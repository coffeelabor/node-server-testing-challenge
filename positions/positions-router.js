const router = require("express").Router();

const positions = require("./positions-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  positions
    .find()
    .then(position => {
      res.json(position);
    })
    .catch(err => res.send(err));
});

router.post("/", restricted, (req, res) => {
  const position = req.body;
  positions
    .add(position)
    .then(position => {
      res.status(201).json(position);
    })
    .catch(err => {
      res.status(500).json({ message: "Internal error, unable to add" });
    });
});

module.exports = router;
