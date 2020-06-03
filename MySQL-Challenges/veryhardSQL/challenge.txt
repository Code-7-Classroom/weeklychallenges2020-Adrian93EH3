DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

CREATE TABLE cars(
	make VARCHAR(50),
    model VARCHAR(50),
    year INT 
);

INSERT INTO cars(make, model, year)
VALUES ("Honda", "Civic Type R", 2001),
("Honda", "Integra Type R", 2000),
("Honda", "NSX", 2001),
("Chevrolet", "Corvette ZR1", 2018),
("Lamborghini", "Diablo SV", 1997);

-- Add Three Cars to the Cars Table in single query
INSERT INTO cars(make, model, year)
VALUES ("Camry", "Toyota", 2020),
("Accord", "Honda", 2020),
("Odyssey", "Honda", 2020);

-- Add price and color column
ALTER TABLE cars
ADD (price DECIMAL(10,2), color VARCHAR(50));

-- Update Cars table with new data
UPDATE cars 
SET price = 15990.00, color = "Championship White"
WHERE model = "Civic Type R";

UPDATE cars 
SET price = 18999.00 , color = "Phoenix Yellow"
WHERE model = "Integra Type R";

UPDATE cars 
SET price = 49000.00 , color = "Midnight Purple III"
WHERE model = "NSX";

UPDATE cars 
SET price = 88900.00, color = "Torch Red"
WHERE model = "Corvette ZR1";

UPDATE cars 
SET price = 521826.00, color = "Giallo Gala"
WHERE model = "Diablo SV";

UPDATE cars 
SET price = 24425.00, color = "Silver"
WHERE model = "Camry";

UPDATE cars 
SET price = 24020.00, color = "Electron Blue Pearl"
WHERE model = "Accord";

UPDATE cars 
SET price = 19850.00, color = "Black"
WHERE model = "Civic";

SELECT * FROM cars;

-- Combine Make and Model into single column
SELECT CONCAT(make, ' ', model) AS 'vehicle' FROM cars;

-- Adds column showing number of cars with matching make to the results
SELECT results.matching_make, cars.make, cars.model, cars.year, cars.price, cars.color FROM cars
INNER JOIN (SELECT make, count(make) AS matching_make FROM cars GROUP BY make) AS results
ON results.make = cars.make;