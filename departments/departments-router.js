const router = require("express").Router();

const departments = require("./departments-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  departments
    .find()
    .then(department => {
      res.json(department);
    })
    .catch(err => res.send(err));
});

router.post("/", restricted, (req, res) => {
  const department = req.body;
  departments
    .add(department)
    .then(department => {
      res.status(201).json(department);
    })
    .catch(err => {
      res.status(500).json({ message: "Internal error, unable to add" });
    });
});

module.exports = router;
