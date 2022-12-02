const express = require("express");
const pool = require("../db/config");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: 400,
    msg: "Hello",
  });
});

router.get("/games", (req, res) => {
  let sql = `SELECT * FROM games ORDER BY game_id ASC;`;

  pool.query(sql, (err, games) => {
    if (err) {
      res.json({
        status: 400,
        msg: "An error has happened",
        err: err.message,
      });
    } else {
      res.json({
        status: 200,
        results: games.rows,
      });
    }
  });
});

router.get("/games/:id", (req, res) => {
  let sql = `SELECT * FROM games WHERE game_id = ${req.params.id};`;

  pool.query(sql, (err, games) => {
    if (err) {
      res.json({
        status: 400,
        msg: "An error has happened",
        err: err.message,
      });
    }else {
      res.json({
        status: 200,
        results: games.rows,
      });
    }
  });
});

module.exports = router;
