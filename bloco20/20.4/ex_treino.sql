SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT title, description, release_year FROM sakila.film;
SELECT * FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
SELECT CONCAT(title, ' ', 'e a nota é: ', rating) AS 'Classificação' FROM sakila.film;
SELECT * FROM sakila.address;
SELECT CONCAT(address, ' ', 'e o distrito é:', district) AS 'Endereço' FROM sakila.address;
SELECT COUNT(*) FROM sakila.actor;

