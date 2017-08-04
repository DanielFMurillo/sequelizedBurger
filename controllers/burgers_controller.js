var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res){
 db.Burgers.findAll({})
     .then(function(data){
 var hbsObject = {
     burger: data
 };
    console.log(hbsObject)
    res.render("index", hbsObject);
 });
});

router.post("/", function(req, res){
 db.Burgers.create({
     "name": req.body.name,
     "devoured": 0
 })      
  .then(function() {
     res.redirect("/");
     });
});

router.put("/burger/:id", function(req, res) {
    db.Burgers.update({
        "devoured": true
    },{where: {id: req.params.id}
    })
    .then(function(){
         res.redirect("/");
    });
});


module.exports = router;
