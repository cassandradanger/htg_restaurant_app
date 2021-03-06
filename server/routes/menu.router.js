const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('menu params:', req.params);
  const menu_id = req.params.id;
  let sqlQuery = `SELECT * from "menu" WHERE "restaurant_id" = ${menu_id}`;
  pool.query(sqlQuery)
    .then((result) => {
      console.log('result', result.rows[0].id);
      let sqlQuery2 = `SELECT * from "menu_item" WHERE "menu_id" = ${result.rows[0].id}`;
      pool.query(sqlQuery2)
      .then((result) => {
        console.log("EMNU ITMES", result.rows)
        res.send(result.rows)
      })

    }).catch((error) => {
      console.log('error', error);
      res.sendStatus(500);
    })
});



/**
 * GET route template
 */
// router.get('/:id', (req, res) => {
//   console.log('menu params:', req.params);
//   const menu_id = req.params.id;
//   let sqlQuery = `SELECT * from "menu" WHERE "restaurant_id" = ${menu_id}`;
//   // const restaurant = await pool.query(sqlQuery);
//   // console.log('restaurant: ', restaurant);
//   // res.send(result.rows);
//   pool.query(sqlQuery)
//     .then((result) => {
//       let menu = result.rows[0];
//       pool.query(`SELECT * from "menu_section" WHERE "menu_id" = ${menu.id}`)
//         .then(result => {
//           const s = result.rows
//           const pSections = s.map(section => {
//             return pool.query(`SELECT * from "menu_item" WHERE "section_id" = ${section.id}`)
//           })
//           return Promise.all(pSections).then(result2 => {
//             const items = result2.map(i => i.rows)
//             const sections = s.map(x => {
//               return {
//                 ...x,
//                 items: items.flat().filter(y => y.menu_section_id === x.id)
//               }
//             })
//             menu = { ...menu, sections: sections };
//             console.log('menu+: ', menu);
//             res.send(menu);
//           })
//         })
//     })
//     .catch((error) => {
//       console.log('error', error);
//       res.sendStatus(500);
//     })
// });

router.get('/', (req, res) => {
  console.log('check');
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