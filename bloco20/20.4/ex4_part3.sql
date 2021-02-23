SET SQL_SAFE_UPDATES = 0;
           
DELETE FROM Pixar.BoxOffice
WHERE movie_id = 11;

DELETE FROM Pixar.Movies
WHERE title = 'WALL-E';

DELETE FROM Pixar.BoxOffice
WHERE movie_id = 9;

DELETE FROM Pixar.BoxOffice
WHERE movie_id = 2;

DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';

