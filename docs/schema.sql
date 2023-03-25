DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS teams;

CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY,
  home_team_id INTEGER NOT NULL,
  away_team_id INTEGER NOT NULL,
  clock TEXT,
  status TEXT,
  period TEXT,
  home_score INTEGER,
  away_score INTEGER
);

CREATE TABLE IF NOT EXISTS teams (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  logo TEXT NOT NULL
);

-- test data
INSERT INTO teams (id, name, logo)
  VALUES (1, 'Milwaukee Bucks', 'https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png'), (2, 'Boston Celtics', 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png');

INSERT INTO games (id, home_team_id, away_team_id, clock, status, period, home_score, away_score)
  VALUES (1, 1, 2, '1:11', 'active', '1', '99', '00')