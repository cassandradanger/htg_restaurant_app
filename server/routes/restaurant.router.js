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

// TO DO - model below /search route after /mine and make query for tags instead of user_id
router.get('/search', (req, res) => {
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

router.get('/mine', (req, res) => {
    console.log('check', req.user.id);
    let sqlQuery = `SELECT * from "restaurant" WHERE "user_id" = ${req.user.id}`;
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
    console.log("DATA", req.body.data);
    const name = req.body.data.name;
    const phone = req.body.data.phone;
    const address = req.body.data.address;
    const city = req.body.data.city;
    const state = req.body.data.state;
    const zipcode = req.body.data.zipcode;
    const hours = req.body.data.hours;
    const link = req.body.data.link; 
    const welcomeNote = req.body.data.welcomeNote;
    const description = req.body.data.description;
    const picture = req.body.data.picture;
    const delivery = req.body.data.delivery;
    const pickUp = req.body.data.pickUp;

    const sqlQuery = `INSERT INTO "restaurant" ("user_id", "name", "phone", "address", "city", "state", "zipcode", "hours", 
    "link", "welcomeNote", "description", "picture", "delivery", "pickUp")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING "id"`;

    pool.query(sqlQuery, [req.user.id, name, phone, address, city, state, zipcode, hours, link, welcomeNote, description, picture, delivery, pickUp])
    .then((result) => {
        console.log("RESULTTTTTTTTT", result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
});

module.exports = router;