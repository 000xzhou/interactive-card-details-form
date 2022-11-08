const express = require('express')
const app = express
app.request(express.urlencoded({extended: true}))

// setting up to pick up the index.html
// and post out the form and redir to the other page