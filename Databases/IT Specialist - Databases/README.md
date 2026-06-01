#  IT Specialist - Databases

## Initialising Database

#### Create Database
`CREATE DATABASE <db_name>`;

#### Verify DB creation
`SELECT name FROM sys.databases;`

#### Delete DB
`DROP DATABASE IF EXISTS <db_name>;`

#### Example

```sql
/* Create the database */
CREATE DATABASE NFL;


/* Set the context. Make NFL the active databse */
USE NFL;


/* Create a database table to store data about NFL teams */
CREATE TABLE teams (
    team_name varchar(40),
    stadium_name varchar(40),
    state varchar(20),
    ground_capacity int,
    star_player varchar(40),
    date_founded date,
    no_of_superbowls_won int
);


/* Insert records into the teams table */
INSERT INTO teams (team_name, stadium_name, state, ground_capacity, star_player, date_founded, no_of_superbowls_won) VALUES ('Buffalo Bills', 'Highmark Stadium', 'New York', 71608, 'Damar Hamlin', '1959/10/28', 0);

INSERT INTO teams (team_name, stadium_name, state, ground_capacity, star_player, date_founded, no_of_superbowls_won) VALUES ('Miami Dolphins', 'Hard Rock Stadium', 'Florida', 70000, 'Salvon Ahmed', '1965/08/16', 2);

INSERT INTO teams (team_name, stadium_name, state, ground_capacity, star_player, date_founded, no_of_superbowls_won) VALUES ('Philadelphia Eagles', 'Lincoln Financial Field', 'Pennsylvania', 71896, 'Jalen Hurts', '1933/07/08', 1);

INSERT INTO teams (team_name, stadium_name, state, ground_capacity, star_player, date_founded, no_of_superbowls_won) VALUES ('Dallas Cowboys', 'AT&T Stadium', 'New York', 80000,'Zack Martin', '1960/01/28', 4);

INSERT INTO teams (team_name, stadium_name, state, ground_capacity, star_player, date_founded, no_of_superbowls_won) VALUES ('Chicago Bears', 'Soldier Field', 'Illinois', 61500,'Jalen Carter', '2020/09/17', 1);


/* Use a SELECT statement to show details of records stored in the teams table. */
SELECT team_name, stadium_name, state, ground_capacity, star_player, date_founded, no_of_superbowls_won FROM teams;


/* Update field */
UPDATE teams SET ground_capacity = 65326 WHERE team_name = 'Miami Dolphins';
UPDATE teams SET state = 'Texas' WHERE team_name = 'Dallas Cowboy';
UPDATE teams SET no_of_superbowls_won = 5 WHERE team_name = 'Dallas Cowboys';

SELECT * FROM teams;


/* Use a DELETE statement to delete the record for the team with the name of Buffalo Bills. */
DELETE FROM teams WHERE team_name = 'Buffalo Bills';
