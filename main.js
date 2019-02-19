
const express = require('express');
const app = express();  //constructor 

//Defines the Humidity Route 
app.get('/Humidity', (req, res) => {
    res.send('OK!');
    console.log('Humidity: ' + req);
});
//Defines the Voltage Route 
app.get('/Voltage', (req, res) => {
    res.send('OK!');
    console.log('Voltage: ' + req);
});
//Defines the Temp Route 
app.get('/Temp', (req, res) => {
    res.send('OK!');
    console.log('Temp: ' + req);
});

var server = app.listen(3000);