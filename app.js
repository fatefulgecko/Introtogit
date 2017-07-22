const express = require ("express"),
    app = express();

const PORT = process.env.PORT || 3000;


require('./config/app.config')(app);

app.set('port', PORT);
app.get("/", (req, res, next) => {
    res.redirect('/home');
})
app.get("/home",(req, res, next) => {
    res.send('<h1>hello</h1>');
});
    
app.listen(app.get('port'), () => {
    console.log(`Listening on Port: ${PORT}`);
});