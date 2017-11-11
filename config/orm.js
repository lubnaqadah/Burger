var connection = require("./connection.js");

var orm = {
	selectAll: function(tableName, cb){
		connection.query("select * from " + tableName + ";", function(err, result){
			if (err) console.log(err);
//			console.log("data===========", result)
			cb(result);
		})
	},
	insertOne: function(table,cols, value, cb){
		console.log("cols =====",value);
		var queryString = "insert into " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "values (" +'"' +value[0]+'"' +","+ value[1] + ")";
		console.log("queryString======", queryString);
		
		connection.query(queryString,  function(err, res){
			if (err) console.log(err);
			cb(res);
		});
	},
	updateOne: function(table, value, condition, cb){
		
		console.log("data===========", value, table, condition)
		connection.query("update " + table + " set devoured = " + value.devoured + " where " + condition, function(err, result){
			if (err) console.log(err);
			cb(result);
		})
	}


};


module.exports = orm;