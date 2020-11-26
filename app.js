const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

//views
app.set('view engine', 'ejs');
app.set('views', 'views');

//routes
var indexRouter = require('./routes/index');

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);

app.listen(3000);