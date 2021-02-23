SELECT * FROM sakila.customer
WHERE email= 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE first_name <> 'KENNETH'
AND store_id = 2
AND active <> 1 ORDER BY first_name;

select now();



