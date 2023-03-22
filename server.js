const express = require('express')
const favicon = require('serve-favicon')
const app = express()
const PORT = 3000

const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

const query = async function (sql, params) {
  let client
  let results = []
  try {
    client = await pool.connect()
    const response = await client.query(sql, params)
    if (response && response.rows) {
      results = response.rows
    }
  } catch (err) {
    console.error(err)
  }
  if (client) client.release()
  return results
}

const queryAllGames = async function () {
  const sql = `SELECT * FROM games;`
  const results = await query(sql)
  return { games: results }
}

// middleware
app.use(express.static(__dirname + 'public'))
app.use(favicon(__dirname + '/public/img/favicon/favicon.ico'))

// set view engine
app.set('view engine', 'ejs')

// index route
app.get('/', async function (req, res) {
  const games = await queryAllGames()
  res.render('pages/index', games)
})

// health route
app.get('/health', async function (req, res) {
  pool.query('SELECT * FROM teams ORDER BY id ASC', (error, results) => {
    if (error) {
      res.status(500).send("Internal Server Error 500")
    }
    res.status(200).json(results.rows)
  })
})

// about route
app.get('/about', (req, res) => {
  res.status(200)
  res.render('pages/about')
})

app.listen(PORT, (error) => {
  if (!error)
    console.log("Server listening on port " + PORT)
  else
    console.log("Error:", error)
})