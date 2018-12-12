let mysql = require('mysql');
let inquier = require('inquirer');
let keys = require('./keys.js');
let chalk = require('chalk');
let Table = require('cli-table');

let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: keys.databaseKeys.username,
    password: keys.databaseKeys.password,
    database: "bamazon"
})

connection.connect(function(err){
    if(err) throw err;
    console.log("Connection successful on port 3306")
    runBamazon();
})

function runBamazon() {

    var table = new Table({
        head: ['ID', 'Item', 'Department', 'Price', 'In Stock']
      , colWidths: [4, 35, 20, 20, 20]
    });

    connection.query("SELECT * FROM materialist", function(err, res){
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, '$' + res[i].price, res[i].stock_quantity]);
        };

        console.log(table.toString());
    })
};

function helloCustomer(res) {}