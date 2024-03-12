CREATE DATABASE plightsout;

CREATE TABLE puzzles(
    puzzle_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    solution_sequence TEXT []

);

CREATE TABLE puzzles_editable(
    puzzle_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    solution_sequence TEXT []
);

CREATE TABLE help_firstcouplesolves(
    puzzle_id integer REFERENCES puzzles (puzzle_id),
    description VARCHAR(255),
    solution_sequence TEXT []
);