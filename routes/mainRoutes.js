const express = require('express');
const route = express.Router();


route.get('/' , (req, res, next ) => {
    res.render('main');
    console.log('/Home');
});

route.get('/about' , (req, res, next) =>{
    res.render('about');
    console.log('/about');
} );

route.get('/education' , (req, res, next) =>{
    res.render('education');
    console.log('/education');
} );

route.get('/skills' , (req, res, next) =>{
    res.render('skills');
    console.log('/skills');
} );


route.get('/contact' , (req, res, next) =>{
    res.render('contact');
    console.log('/contact');
} );

route.get('/etc' , (req, res, next) =>{
    res.render('etc');
    console.log('/etc');
} );


module.exports = route;