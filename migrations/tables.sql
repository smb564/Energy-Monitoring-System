CREATE TABLE IF NOT EXISTS User (id INT NOT NULL AUTO_INCREMENT,first_name VARCHAR(30) NULL,last_name VARCHAR(50) NULL,user_name VARCHAR(20) NULL,email VARCHAR(40) NULL,password VARCHAR(100) NULL,is_admin BOOLEAN NOT NULL DEFAULT false,PRIMARY KEY ( id ))ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS Complaint (id INT NOT NULL AUTO_INCREMENT,user_id INT NULL,title VARCHAR(200) NOT NULL,description TEXT NOT NULL,comment TEXT NOT NULL,comp_type VARCHAR(20) NOT NULL,created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY ( id ), FOREIGN KEY (user_id) REFERENCES User(id) )ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS Customer (id INT(9) NOT NULL,first_name VARCHAR(30) NULL,last_name VARCHAR(50) NULL,PRIMARY KEY ( id ))ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS User (id INT NOT NULL AUTO_INCREMENT,email VARCHAR(40) NULL,password VARCHAR(100) NULL,customer_id INT NULL,is_admin BOOLEAN NOT NULL DEFAULT false,PRIMARY KEY ( id ), FOREIGN KEY (customer_id) REFERENCES Customer(id) )ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS Complaint (id INT NOT NULL AUTO_INCREMENT,user_id INT NULL,title VARCHAR(200) NOT NULL,description TEXT NOT NULL,comp_type VARCHAR(20) NOT NULL,created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY ( id ), FOREIGN KEY (user_id) REFERENCES User(id) )ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS Area (id INT NOT NULL AUTO_INCREMENT,name VARCHAR(50) NULL,PRIMARY KEY ( id ))ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS PowerCut (id INT NOT NULL AUTO_INCREMENT,starting_date DATETIME NOT NULL,ending_date DATETIME NOT NULL,description VARCHAR(45) NULL,PRIMARY KEY ( id ))ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS Area_m2m_PowerCut(Area_id INT NOT NULL, PowerCut_id INT NOT NULL, FOREIGN KEY (Area_id) REFERENCES Area(id),FOREIGN KEY (PowerCut_id) REFERENCES PowerCut(id))ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS Connection (id INT NOT NULL AUTO_INCREMENT,account_no INT NOT NULL,address_line1 VARCHAR(30) NOT NULL,address_line2 VARCHAR(30) NULL,address_street VARCHAR(45) NOT NULL,address_city VARCHAR(30) NOT NULL,address_district VARCHAR(30) NOT NULL,connection_type VARCHAR(30) NOT NULL,customer_id INT NOT NULL,area_id INT NOT NULL,PRIMARY KEY ( id ), FOREIGN KEY (customer_id) REFERENCES Customer(id) , FOREIGN KEY (area_id) REFERENCES Area(id) )ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS Bill (id INT NOT NULL AUTO_INCREMENT,connection_id INT NOT NULL,starting_date DATE NOT NULL,ending_date DATE NOT NULL,reading INT NOT NULL,amount FLOAT(10,2) NOT NULL,PRIMARY KEY ( id ), FOREIGN KEY (connection_id) REFERENCES Connection(id) )ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS BillPayment (amount FLOAT NOT NULL,bill_id INT NOT NULL,pay_date DATE NOT NULL, FOREIGN KEY (bill_id) REFERENCES Bill(id) )ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS Breakdown (id INT NOT NULL AUTO_INCREMENT,user_id INT NULL,area INT NULL,description VARCHAR(255) NULL,status VARCHAR(255) NULL,finished BOOLEAN NOT NULL DEFAULT false,created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY ( id ), FOREIGN KEY (user_id) REFERENCES User(id) , FOREIGN KEY (area) REFERENCES Area(id) )ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS ConnectionRequest (id INT NOT NULL AUTO_INCREMENT,userId INT NULL,telephone VARCHAR(12) NULL,status VARCHAR(50) NULL,address1 VARCHAR(30) NULL,address2 VARCHAR(30) NULL,street VARCHAR(30) NULL,city VARCHAR(30) NULL,district VARCHAR(30) NULL,created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY ( id ), FOREIGN KEY (userId) REFERENCES User(id) )ENGINE=INNODB;
