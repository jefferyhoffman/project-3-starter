-- schema
CREATE TABLE brand(
    id INT NOT NULL AUTO_INCREMENT,
    inventory_name VARCHAR(50) NOT NULL,
    store BOOLEAN DEFAULT true,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);