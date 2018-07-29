var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;

    // Calls displayProduct function
    displayProduct();
});

// Function to render the products
function displayProduct() {
    connection.query("SELECT * FROM product", function (err, res) {
        console.log("Welcome to Bamazon")
        console.log("--------------------------------------------------------");
        console.log("--------------------------------------------------------");

        // Loops through the array to display each products
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + ":" + res[i].product_name + " \nDepartment: " + res[i].department_name + " \nPrice: "
                + res[i].price + " \nIn Stock: " + res[i].stock_quantity);
            console.log("\n--------------------------------------------------------");
        }

        //Calls the userInput function
        userInput();
    });
};

// Function to prompt user
function userInput() {
    var inquirer = require("inquirer");

    inquirer.prompt([
        {
            type: "input",
            message: "What ID of the product would you like to order?",
            name: "selection"
        },
        {
            type: "input",
            message: "How much did you want to order?",
            name: "quantity"
        }
    ]).then(function (inquirerResponse) {

        var item = inquirerResponse.selection;
        var amount = inquirerResponse.quantity;
        var updatedStock = 0;
        var total = 0;

        connection.query("SELECT * FROM product WHERE item_id = ?", [item], function (err, res) {
            if (err) throw err;

            // To determine if there is sufficient quantity
            if (res[0].stock_quantity > amount) {

                updatedStock = res[0].stock_quantity - amount;

                // Calls updateProduct function
                updateProduct(updatedStock, item);

                total = amount * res[0].price;

                console.log("Total price: $" + total + "\nThank for shopping at Bamazon. We appericate your business.")

            } else {
                console.log("Sorry, Insufficient quantity!");
            };

            connection.end();
        });
    });
};

// Function that updates database
function updateProduct(newStock, item) {
    connection.query(
        "UPDATE product SET ? WHERE ?",
        [
            {
                stock_quantity: newStock
            },
            {
                item_id: item
            }
        ],
    );
}