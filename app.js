const express = require('express');
const mongoose = require('mongoose');
const Announcement=require('./models/announcement')

// express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://Coolb:59UBSTSYY3TCJZZk@cluster0.k8t44.mongodb.net/wellfareBoard?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology: true})
    .then((result)=> app.listen(3000))
    .catch((err)=> console.log(err));

// listen for requests


// register view engine
app.set('view engine', 'ejs');

// app.set('views', 'myviews');

app.use(express.static('public'));



app.use('/public/images/', express.static('./public/images'));

app.get('/',(req, res)=>{
    Announcement.find().sort({ creation:-1 })
    .then((result)=>{res.render('index',{announcements: result, title: 'Home'})
    })
    .catch(err=>{console.log(err);
    }); 
   
});

app.get('/add-announce',(req,res)=>{
    const announcement = new Announcement({
        title:'Pikachu',
        description:'Pikachu',
        link:'https://en.wikipedia.org/wiki/Pikachu',
        impotant:false,
        category:"Pokemon",
        date: 2021-03-20,
    });

    announcement.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{console.log(err);});
})


