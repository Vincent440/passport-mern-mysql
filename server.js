require('dotenv').config()
const express = require("express");
const passport = require("passport");
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const routes = require("./routes");
const PORT = process.env.PORT;// Stored in .env File along with DB Config. 
require('./controllers/passportController')(passport); // pass passport for configuration

app.use(cookieParser('mysqlpassportmernreact'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
        secret: 'mysqlpassportmernreact',
        resave: false,
        saveUninitialized: false 
    })
);

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}.`));