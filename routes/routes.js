const express = require('express')
const router = express.Router()

module.exports = function (app){
    router.use(express.static("data"))

    return router
}

let counter = 1;
let db = [];

//routes
// let com = require("./data/comments");
// let con = require("./data/contacts");
// let pro = require("./data/products");
// let vehicles = require("./data/vehicles");


router.get("/comments/:id", function (req, res) {
    const comment = com.find((item) => item._id.toString() === req.params.id);
    if (comment) {
      res.json(comment);
    } else {
      res.sendStatus(404);
    }
  });

router.get("/contacts/:id", function (req, res) {
    const contact = con.find((item) => item._id.toString() === req.params.id);
    if (contact) {
      res.json(contact);
    } else {
      res.sendStatus(404);
    }
  });

router.get("/products/:id", function (req, res) {
    const product = pro.find((item) => item._id.toString() === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.sendStatus(404);
    }
  });

router.get("/vehicles/:id", function (req, res) {
  const vehicle = vehicles.find((item) => item._id.toString() === req.params.id);
  if (vehicle) {
    res.json(vehicle);
  } else {
    res.sendStatus(404);
  }
});





router.post("/comments", function (req, res) {
    let id = counter;
    counter++;
    let body = req.body.body;
    let postId = req.body.postId;
    let newComment = {
      body: body,
      postId: postId,
      id: counter
};
db.push(newComment);
res.json(newComment);
});


router.post("/vehicles", function (req, res) {
    let _id = counter;
    counter++;
    // let _id = req.body._id;
    let imgUrl = req.body.imgUrl;
    let year = req.body.year;
    let make = req.body.make;
    let model = req.body.model;
    let price = req.body.price;
    let km = req.body.km;
    let miles = req.body.miles;
    let fuel = req.body.fuel;
    let city = req.body.city;
    let isNew = req.body.isNew;
  
    let newVehicle = {
      _id: _id,
      imgUrl: imgUrl,
      year: year,
      make: make,
      model: model,
      price: price,
      km: km,
      miles: miles,
      fuel: fuel,
      city: city,
      isNew: isNew
    };
    db.push(newVehicle);
    res.json(newVehicle);
  });



router.post("/contacts", function (req, res) {
    let id =counter; 
    counter++;
    let name = req.body.name;
    let occupation = req.body.occupation;
    let avatar = req.body.avatar;
  
    let newContact = {
      id: id,
      name: name,
      occupation: occupation,
      avatar: avatar
    };
    db.push(newContact);
    res.json(newContact);
  });



router.post("/products", function (req, res) {
    let id = counter;
    counter++;
    let _id = req.body._id;
    let name = req.body.name;
    let description = req.body.description;
    let rating = req.body.rating;
    let imgUrl = req.body.imgUrl;
    let price = req.body.price;
    let category = req.body.category;
    let reviews = req.body.reviews;
  
    let newProduct = {
      _id: _id,
      name: name,
      description: description,
      rating: rating,
      imgUrl: imgUrl,
      price: price,
      category: category,
      reviews: reviews
    };
    db.push(newProduct);
    res.json(newProduct);
  });



return router;
