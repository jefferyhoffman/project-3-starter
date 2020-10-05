-- this page is just for refrence to how well set up the tables for sequelize

CREATE DATABASE ecommerce_db;
USE ecommerce_db;


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

CREATE TABLE order_table (
order_id VARCHAR(50) NOT NULL,
order_number INT NOT NULL,
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
