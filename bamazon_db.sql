DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;
USE bamazon;

CREATE TABLE materialist (
 item_id INT AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(75) NOT NULL,
 department_name VARCHAR(30) NOT NULL,
 price DECIMAL(10,4) NOT NULL,
 stock_quantity INT(10) NOT NULL,
 PRIMARY KEY (item_id)
);

INSERT INTO materialist (product_name,department_name,price,stock_quantity)
VALUES ("40 Watt Plasma Rifle","Weaponry",999.99,5),
	("Paper Street Soap","Toiletry",8.99,200),
    ("Dapper Dan Pomade","Toiletry",20.50,60),
    ("Soul Glo","Toiletry",15.99,150),
    ("Frozen Bubba Gump Shrimp","Food n Drink",10,35),
    ("Big Kahuna Burger Patties","Food n Drink",9.99,40),
    ("Everlasting Gobstopper","Food n Drink",2.99,120),
    ("Matell Hover Board","Games n Toys",499.99,12),
    ("Brawndo Energy Drink","Food n Drink",5.99,160),
    ("Zorg ZF-1 Gun","Weaponry",1299.99,2),
    ("Soylent Green","Food n Drink",1.99,250),
    ("Soma","Medicine",120,99);
    
SELECT * FROM bamazon.materialist;

