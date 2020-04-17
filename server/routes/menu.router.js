const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  console.log('menu params:', req.params);
  const restaurant_id = req.params.id;
  pool.query(`SELECT * FROM "menu" WHERE "restaurant_id" = ${restaurant_id}`)
    .then((result0) => {
      console.log('result0: ', result0);
      const menu_id = result0.rows[0].id;
      let sqlQuery = `SELECT * from "menu" WHERE "id" = '${menu_id}'`;
      // const restaurant = await pool.query(sqlQuery);
      // console.log('restaurant: ', restaurant);
      // res.send(result.rows);
      pool.query(sqlQuery)
        .then((result) => {
          let menu = result.rows[0];
          pool.query(`SELECT * from "menu_section" WHERE "menu_id" = ${menu.id}`)
            .then(result => {
              const s = result.rows
              const pSections = s.map(section => {
                return pool.query(`SELECT * from "menu_item" WHERE "menu_section_id" = ${section.id}`)
              })
              return Promise.all(pSections).then(result2 => {
                const items = result2.map(i => i.rows)
                const sections = s.map(x => {
                  return {
                    ...x,
                    items: items.flat().filter(y => y.menu_section_id === x.id)
                  }
                })
                menu = { ...menu, sections: sections };
                console.log('menu+: ', menu);
                res.send(menu);
              })
            })
        })
    })
    .catch((error) => {
      console.log('error', error);
      res.sendStatus(500);
    })
});

router.get('/', (req, res) => {
  console.log('get menus: ', req.params);
  let sqlQuery = 'SELECT * from "menu"';
  pool.query(sqlQuery)
    .then((result) => {
      console.log("menu:", result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error', error);
      res.sendStatus(500);
    })
});

/**
* POST route template
*/
router.post('/', (req, res) => {

});

module.exports = router;