const bodyParser = require ("body-parser"),
    cookieParser = require ("cookie-parser");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cookieParser());
}

