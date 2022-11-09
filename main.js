const express = require('express')
const app = express()
// need to figure out how to change this for github
const port = 3000

// good for static display like img and css use module for code
// app.use(express.static(__dirname + 'public'))
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
// Setting { extended: true } allows the bodyParser to accept json like data within the form data including nested objects
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))

// const formV = require(__dirname + '/app.js')

// setting up to pick up the index.html
// and post out the form and redir to the other page
app.listen (port, ()=> {
    console.log(`I'm lising to ${port}`)
})
app.get('/', (req, res)=> {
    // get an engine and do this
    //res.render('form')
    // later will try
    res.sendFile(__dirname + '/index.html')
})

app.get('/thanks', (req, res)=> {
    res.sendFile(__dirname + '/thanks.html')
    
})

app.post('/', (req, res)=> {
    // got stuff... but how to send it to the thanks page and have it display?
    // maybe i need a EJS
    const cardholderName = req.body.cardholderName
    const cardNumber = req.body.cardNumber
    console.log(cardholderName + cardNumber)
    // res.sendFile(__dirname + '/thanks.html')

})
app.post('/thanks', (req, res)=> {
    // idk how to 
    const cardholderName = req.body.cardholderName
    console.log(cardholderName + "test post")
    res.redirect('/')
})