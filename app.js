const express = require('express');

const app = express();

const mainRoute = require('./routes/mainRoutes')


//view engine 
app.set('view engine','ejs');
app.set('views','views');

//middleware section start here 
app.use(mainRoute);
app.get('/dumy', (req,res,next) => {
    res.write('This is Just a palin text');
    res.end()
    console.log('/ page')
});

app.listen(3001);
