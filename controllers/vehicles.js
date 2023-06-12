const express = require('express')
const router = express.Router()

const vehiclesController = require('../controllers/vehicles')

router.get('/vehicles',vehiclesController.list);
router.get('/vehicles:id', vehiclesController.show);
router.post('/vehicles',vehiclesController.create);

module.exports = router

let vehicles = require("./data/vehicles");

router.get("/vehicles/:id", function (req, res) {
    const vehicle = vehicles.find((item) => item._id.toString() === req.params.id);
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.sendStatus(404);
    }
  });