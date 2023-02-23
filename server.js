const express = require('express')
const favicon = require('serve-favicon')
const app = express()
const PORT = 3000

// middleware
app.use(express.static(__dirname + 'public'))
app.use(favicon(__dirname + '/public/img/favicon/favicon.ico'))

// set view engine
app.set('view engine', 'ejs')

// index route
app.get('/', (req, res) => {
  res.status(200)
  res.render('pages/index')
})

// health route
app.get('/health', (req, res) => {
  res.status(200)
  res.send("healthy")
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