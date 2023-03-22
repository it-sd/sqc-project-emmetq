# NBA Live Game Stat Tracker

Emmet Quint

[Live NBA Game Scoreboard](https://nba-live-stats.onrender.com)

A web application for tracking NBA game scores live.

[Entity Relationship Diagram](/docs/erd.jpg)

The games table contains foreign keys linking the home and away team. It also contains columns showing the time remaining on the clock, the game status (in progress, finished, etc), the current period, and the score for each respective team.

The teams table contains a foreign key linking a current game id to each team, as well as a team name and logo.