const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const mongoose = require('mongoose');

//views
app.set('view engine', 'ejs');
app.set('views', 'views');

//routes
var indexRouter = require('./routes/index');

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

//public
app.use(express.static(path.join(__dirname, 'public')));

//using route
app.use(indexRouter);


mongoose.connect('mongodb+srv://rohith:13vF7uFZWb24IXoM@cluster0.ayzod.mongodb.net/assoc?retryWrites=true&w=majority')
.then(result => {
    app.listen(3000);
})
.catch(err =>{
    console.log(err);
});
