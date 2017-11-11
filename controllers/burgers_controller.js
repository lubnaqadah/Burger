var express = require("express");
var orm = require("../config/orm.js");

module.exports = function(app){

app.get("/", function(req, res){
	orm.selectAll("burgers", function( result){

		var dataObj = {
			burgers: result
		};
		res.render("index", dataObj);
	});
});

app.post("/api/burgers", function(req, res){
	
	console.log("req.body", req.body);
	
	orm.insertOne("burgers",[
		"burger_name", "devoured"
	],[
		req.body.burger_name, req.body.devoured
	],function(result){
		res.json({id: result.insertId});
	});
});

app.put("/api/burgers/:id", function(req, res){
	var condition = "id = " + req.params.id;
	
	orm.updateOne("burgers", {
		devoured: true
	}, condition, function(result){
		console.log(result)
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

};