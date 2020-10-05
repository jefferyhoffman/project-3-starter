-- this page is just for refrence to how well set up the tables for sequelize

CREATE DATABASE ecommerce_db2;
USE ecommerce_db;

DROP TABLE customer;
DROP TABLE category;
DROP TABLE order_details;
DROP TABLE order_table;
DROP TABLE product;


CREATE TABLE customer (
customer_id INT NOT NULL AUTO_INCREMENT,
customer_email VARCHAR(50),
first VARCHAR(50),
last VARCHAR(50),
password VARCHAR(50),
address VARCHAR(50),
zip VARCHAR(50),
city VARCHAR(50),
phone VARCHAR(50),
PRIMARY KEY(customer_id)
);

CREATE TABLE category (
category_id INT NOT NULL AUTO_INCREMENT,
category_name VARCHAR(50),
category_img VARCHAR(50),
category_description VARCHAR(150),
PRIMARY KEY(category_id)
);

CREATE TABLE product (
product_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50),
product_description VARCHAR(150),
product_img_one VARCHAR(50),
product_img_two VARCHAR(50),
product_img_three VARCHAR(50),
price INT,
stock INT,
category_id INT,
PRIMARY KEY(product_id),
FOREIGN KEY(category_id) REFERENCES category(category_id)
);

DROP TABLE IF EXISTS order_table; 

CREATE TABLE order_table (
order_id VARCHAR(50) NOT NULL,
order_number INT NOT NULL AUTO_INCREMENT,
order_date DATETIME,
order_total INT,
customer_id INT,
shipping_date DATETIME,
is_delivered VARCHAR(50),
PRIMARY KEY(order_id),
FOREIGN KEY(customer_id) REFERENCES customer(customer_id)
);

CREATE TABLE order_details (
order_details_id INT NOT NULL AUTO_INCREMENT,
product_id INT,
product_qty INT,
product_price INT,
order_id VARCHAR(50) NOT NULL,
subtotal INT,
PRIMARY KEY(order_details_id),
FOREIGN KEY(product_id) REFERENCES product(product_id),
FOREIGN KEY(order_id) REFERENCES order_table(order_id)
);


INSERT INTO customer(customer_email, first, last, password, address, zip, city, phone)
VALUES ("test2@test.com", "adam", "grossman", "test", "124 main st", "28210", "charlotte", "704-111-1112"),
		("test3@test.com", "nick", "ryder", "test", "125 main st", "28210", "charlotte", "704-111-1113"),
        ("test4@test.com", "ryan", "brooks", "test", "126 main st", "28210", "charlotte", "704-111-1114"),
        ("test5@test.com", "jeff", "hoffman", "test", "127 main st", "28210", "charlotte", "704-111-1115");
        
SHOW TABLES;
SELECT * FROM customer;

INSERT INTO category(category_name, category_description)
VALUES ("tops", "t-shirts, sweatshirts, longsleeves and more"),
		("bottoms", "shorts, sweatpants, leggings and more"),
        ("outerwear", "jackets, and snowsuits"),
        ("misc", "coffe mugs, flags, office supplies and more"),
        ("footwear", "sneakers, boots and sandels");

SELECT * FROM category;

INSERT INTO product(product_name, product_description, price, stock, category_id)
VALUES ("tshirt", "100% cotton teeshirt", 10.99, 25, 1),
		("sweatshirt", "fleece sweatshirt", 24.99, 20, 1),
		("longsleeve", "100% cotton longsleeve shirt", 14.99, 22, 1),
        ("shorts", "mesh shorts", 17.99, 10, 2),
        ("leggings", "nylon leggings", 24.99, 30, 2),
        ("sweatpants", "100% cotton sweatpants", 19.99, 13, 2),
        ("jacket", "northface jacket", 70.00, 5, 3),
        ("flag", "american flag", 16.99, 5, 4),
        ("sneakers", "nike", 65.00, 10, 5),
        ("boots", "red wing", 100.00, 10, 5);
        
SELECT * FROM product;

INSERT INTO order_table(order_id, order_number, customer_id)
VALUES ("matt-1", 1, 1),
		("adam-1", 2, 2),
		("nick-1", 3, 3),
        ("ryan-1", 4, 4),
        ("jeff-1", 5, 5),
        ("matt-2", 6, 1);

SELECT * FROM order_table;

INSERT INTO order_details(product_id, product_qty, order_id)
VALUES (1, 2, "matt-1"),
		(4, 1, "adam-1"),
		(2, 3, "nick-1"),
        (7, 1, "ryan-1"),
        (8, 1, "jeff-1"),
        (9, 1, "matt-2");
        
SELECT * FROM order_details;

