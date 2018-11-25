//routes folder formerly known as controllers.

//formerly burgersController now routes/post-api-routes

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  //app.get("/api/posts", function(req, res) {
    app.get("/", function(req, res) {
    //var query = {};
    //if (req.query.burger_id) {
    //  query.BurgerId = req.query.burger_id;
    //}
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
        //where: query,
        //include: [db.Author]
    }).then(function(dbPost) {
      var hbsObject = {
        Post : dbPost
      };
      console.log (hbsObject);
      res.render("index", hbsObject);
    });
  });



  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  /*/ DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
*/


  // PUT route for updating posts
  app.put("/api/burgers/:id", function(req, res) {
    //app.put("/api/burgers/", function(req, res) {
    db.Post.update({
      devoured : req.body.devoured,
    }, {
        where: {
          id: req.params.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
