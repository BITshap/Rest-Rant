require('dotenv').config()
const express = require('express')
const app = express()

// MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.send('404 page')
})

app.listen(process.env.PORT)
console.log("I am running!")

