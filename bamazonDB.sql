DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE product(
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER NOT NULL,
    stock_quantity INTEGER NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Pink Nikes Sneakers", "Shoes", 95, 40);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Birthstone Stud Earrings", "Jewerly", 25, 100);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Teacup Yorkies", "Pets", 600, 15);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Unicorn Marble Cake", "Food", 20, 10);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Christian Louboutin Pigalle 100", "Shoes", 695, 27);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Popcorn T-shirt", "Clothes", 5, 187);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Arm Warmers", "Clothes", 12, 72);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Dry Ice", "Food", 1, 1002);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Yoshi", "Pets", 1003, 4);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Grumpy Cat", "Pets", 150, 1);