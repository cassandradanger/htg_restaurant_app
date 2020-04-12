const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('check');
    let sqlQuery = 'SELECT * from "restaurant"';
    pool.query(sqlQuery)
    .then((result) => {
        console.log("hello", result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
    console.log('req.boyd', req.params);
    let sqlQuery = `SELECT * from "restaurant" WHERE "id" = '${req.params.id}'`;
    pool.query(sqlQuery)
    .then((result) => {
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