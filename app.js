const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/index');

const config = require('./config/app-config.js');
const clientErrorHandler = require("./config/error-handler-config").clientErrorHandler;
const logErrors = require("./config/error-handler-config").logErrors;
const errorHandler = require("./config/error-handler-config").errorHandler;

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

// CONFIGURATION
config.init(app, express);

// ROUTING
app.use('/', routes);

// ERROR HANDLING
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// RENDERED TEMPLATE ENGINE - HANDLEBARS
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(port, () => console.log('ski-mountain-nodejs is running on port 8080 '));

module.exports = app;