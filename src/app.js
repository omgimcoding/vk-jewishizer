const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const { port } = require('./config/default');
const removeTrailingSlash = require('./utils/slashes');
const jew = require('./routes/jew');

let app = express();

app.listen(port);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/:somepath*/vkjewishizer/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(removeTrailingSlash);

app.use('/:somepath*/vkjewishizer', jew);
