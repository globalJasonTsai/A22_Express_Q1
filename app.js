
// require packages used in the project
const express = require('express')
const app = express()
// require express-handlebars here
const exphbs = require('express-handlebars')
const port = 3000

// setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/About', (req, res) => {
  res.render('About')
})

app.get('/Portfolio', (req, res) => {
  res.render('Portfolio')
})

app.get('/Contact', (req, res) => {
  res.render('Contact')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on  http://localhost:${port}`)
})

