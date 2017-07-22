const express = require ("express"),
    app = express();

const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.get("/home",(req, res, next) => {
    res.send('<h1>hello</h1>');
});
    
app.listen(app.get('port'), () => {
    console.log(`Listening on Port: ${PORT}`);
});