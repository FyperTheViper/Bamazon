let mysql = require('mysql');
let inquirer = require('inquirer');
let keys = require('./keys.js');
let chalk = require('chalk');
let Table = require('cli-table');
let spacer = (chalk.grey("==================================="));
let log = console.log;

let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: keys.databaseKeys.username,
    password: keys.databaseKeys.password,
    database: "bamazon"
})

connection.connect(function(err){
    if(err) throw err;
    log(chalk.grey("Booting up materialist.exe. Your needs will be met."));
    log(spacer);
    welcomeMessage();
})

function welcomeMessage() {

    inquirer.prompt([{
        type: "confirm",
        name: "confirm",
        message: "Hello and welcome to BAMAZON. Only the widest selections. Would you like to browse our stock?",
        default: true

    }]).then(function(user) {
        if (user.confirm === true) {
            tableDisplay();
        } else {
            log(chalk.italic("But... we have everything you " + chalk.bold.red("DESIRE!")));
            log(chalk.italic.grey("Powering down.... Daisy... Daisy..."))
        }
    });
}

function tableDisplay() {

    let table = new Table({
        head: ['ID', 'Item', 'Department', 'Price', 'In Stock']
      , colWidths: [4, 35, 20, 20, 20]
    });

    connection.query("SELECT * FROM materialist", function(err, res){
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, '$' + res[i].price, res[i].stock_quantity]);
        };

        log(table.toString());
        reelIn();
    })
};

function reelIn() {

    inquirer.prompt([{

        type: "confirm",
        name: "continue",
        message: "You'd like to partake in our choice selection, right?",
        default: true

    }]).then(function(user) {
        if (user.continue === true) {
            buyersBeware();
        } else {
            log(chalk.red("No? But please! I have no function outside of your greed!"));
        }
    });
}

function buyersBeware() {

    inquirer.prompt([{
            type: "input",
            name: "inputId",
            message: "Just enter the ID number of the product you want. It should be in the most left-hand column:",
        },
        {
            type: "input",
            name: "amountNumber",
            message: "Such a good choice! And how many of that wonderfully exceptional item would you like?",
        }

    ]).then(function(userChoice) {

        connection.query("SELECT * FROM materialist WHERE item_id=?", userChoice.inputId, function(err, res) {
            for (let i = 0; i < res.length; i++) {

                if (userChoice.inputId > res[i].stock_quantity) {
                    log(spacer);
                    log(chalk.red("My deepest apologies, that item was so good we don't have it stock currently"));
                    log(spacer);
                    welcomeMessage();

                } else {           
                    log(spacer);
                    log(chalk.green("Perfect, we have it! Here is what's in your cart:"));
                    log(spacer);
                    log(res[i].product_name);
                    log(chalk.grey("Department: ") + res[i].department_name);
                    log(chalk.grey("Price: ") + res[i].price);
                    log(chalk.grey("Quantity: ") + userChoice.amountNumber);
                    log(chalk.grey("----------------"));
                    log(chalk.grey("Your total comes to: ") + chalk.yellow.underline("$" + res[i].price * userChoice.amountNumber));
                    log(spacer);

                    let updatedStock = (res[i].stock_quantity - userChoice.amountNumber);
                    let taggedProduct = (userChoice.inputId);
                    
                    checkout(updatedStock, taggedProduct);
                }
            }
        });
    });
}

function checkout(updatedStock, taggedProduct) {
    inquirer.prompt([{
        type: "confirm",
        name: "confirmPurchase",
        message: "Are you sure you would like to purchase this item and quantity?",
        default: true

    }]).then(function(userConfirm) {
        if (userConfirm.confirmPurchase === true) {

            connection.query("UPDATE materialist SET ? WHERE ?", [{
                stock_quantity: updatedStock
            }, {
                item_id: taggedProduct
            }], function(err, res) {});

            log(spacer);
            log(chalk.green("Transaction completed. Have the most wonderful of days fellow human!"));
            log(spacer);
            welcomeMessage();
        } else {
            log(spacer);
            log(chalk.red("What!? We get this far and you don't want it? How- " +
            chalk.grey("function polite(emotion);") + chalk.green(" I mean, thank you come again soon!")));
            log(spacer);
            welcomeMessage();
        }
    });
}