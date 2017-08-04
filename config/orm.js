// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = { 
    
    selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
    insertOne: function(table, cols, vals, cb){
  //var queryString = "INSERT INTO BURGERS (name) VALUES ('Double Double')";
  
    var queryString = "INSERT INTO " + table;

    console.log(vals);

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
    console.log(vals.length);
    
    connection.query(queryString, vals,function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: cheeseburger, devoured: true}
    updateOne: function(table, objColVals, condition, cb) {

    var queryString = 'UPDATE ' + table;
        queryString += ' SET devoured = 1';
        //queryString += + objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;


    console.log(queryString);
    //console.log(objColVals);
    connection.query(queryString, function(err, result) {
      if (err) {
      }
        throw err;
       cb(result);
    });
   }
};


module.exports = orm;