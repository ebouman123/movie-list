const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


//! For stretch goals
router.get('/', (req, res) => {
  const query = `
    SELECT * FROM "genres"
      ORDER BY "id" ASC;
  `;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: GET genres', err);
      res.sendStatus(500)
    })
});

module.exports = router;