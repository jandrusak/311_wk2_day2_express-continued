const express = require('express')
const router = express.Router()
let con = require("./data/contacts");
const contactsController = require('../controllers/contacts')

router.get('/contacts', contactsController.list)

router.get('/contacts/:id', contactsController.show)

router.post('/contacts', contactsController.create)

module.exports = router


router.get("/contacts/:id", function (req, res) {
    const contact = con.find((item) => item._id.toString() === req.params.id);
    if (contact) {
      res.json(contact);
    } else {
      res.sendStatus(404);
    }
  });