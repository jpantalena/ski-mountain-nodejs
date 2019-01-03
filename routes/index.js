const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const MOUNTAIN_TBL = "mountain";

router.get('/', (req, res, next) => {
  getMountains().then((mountains) => {
    res.render('home', {
      title: 'Hey',
      mountains: mountains
    })
  }).catch((error) => next(error));
});

router.get('*', function (req, res) {
  res.status(404).send("You're out-of-bounds - don't lose your season pass")
});

function getMountains() {
  return knex(MOUNTAIN_TBL)
}

module.exports = router;