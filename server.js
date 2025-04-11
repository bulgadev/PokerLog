const express = require('express')
const { MongoClient } = require("mongodb");
const { default: mongoose } = require('mongoose');
const path = require('path');
const app = express()
const port = 3000

app.use(express.static('public'))

//vars
mongoose.connect('mongodb://localhost:27017')


//code stuff
function Tryregister() {
    
}

function Trylogin() {
    
}

//http requests
app.post('/', (req, res) => {
    res.send('hello world')
})

app.post('/login', (req, res) => {
    console.log('login')
    Trylogin()
    res.redirect('/')
})

app.post('/register', (req, res) => {
    console.log('register')
    Tryregister()
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) 