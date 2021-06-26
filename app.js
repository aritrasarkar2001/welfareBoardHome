const express = require('express');
const mongoose = require('mongoose');


// express app
const app = express();

// listen for requests

app.listen(3000);
// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.use(express.static('public'));

//mongoose and mongo sandbox routes

app.use('/public/images/', express.static('./public/images'));

app.get('/',(req, res)=>{
    res.render('index',{title: 'Home'})
});


