# NBA Live Game Stat Tracker

I will be creating an application that provides live updates for NBA games as they are happening. The application will show live score updates for each matchup, as well as time remaining. The user will be able to click on each matchup to view a detailed scoring breakdown. There will also be a page that displays the current conference standings, updated at the conclusion of each game.

## Web Service

[NBA Api](https://rapidapi.com/api-sports/api/api-nba/) apiKey

- GET games https://api-nba-v1.p.rapidapi.com/games
- GET teams https://api-nba-v1.p.rapidapi.com/teams
- GET game statistics https://api-nba-v1.p.rapidapi.com/games/statistics
- GET players https://api-nba-v1.p.rapidapi.com/players
- GET player statistics https://api-nba-v1.p.rapidapi.com/players/statistics
- GET standings https://api-nba-v1.p.rapidapi.com/standings

## Database use

I anticipate requiring a table with entries for each matchup. Each row will contain two team objects as foreign keys. Those team objects will have many player objects as foreign keys, along with a relationship to that players statistic for each given game. I will also have a separate table containing conference standings. I will not have to write any data for this application.

## Initial designs

![UI Mockup](/docs/ui_mockup.png)
![Site Map](/docs/site_map.png)
