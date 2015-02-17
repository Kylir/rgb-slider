/* jshint undef: true, node: true */

var express = require('express');
//var piblaster = require('pi-blaster.js');
//Mock it for test
var piblaster = {setPwm:function(pin, value){console.log("piblaster - pin: "+pin+", value: "+value);}};
var path = require('path');
var app = express();

var RED_GPIO_PIN = xx;
var GREEN_GPIO_PIN = xx;
var BLUE_GPIO_PIN = xx;


//Serve public content - the main page
app.use(express.static(path.join(__dirname, 'public')));

//We need 3 services - Red, Green and Blue
app.get('/red/:value', function (req, res) {
    console.log("red = " + req.params.value);
    var redValue = req.params.value;
    if( isNumber(redValue) ){
        piblaster.setPwm(RED_GPIO_PIN, redValue/255);
        res.send('ok');
    } else {
        res.status(400).send('error');
    }
});

app.get('/green/:value', function (req, res) {
    console.log("green = " + req.params.value);
    var greenValue = req.params.value;
    if( isNumber(greenValue) ){
        piblaster.setPwm(GREEN_GPIO_PIN, greenValue/255);
        res.send('ok');
    } else {
        res.status(400).send('error');
    }
});

app.get('/blue/:value', function (req, res) {
    console.log("blue = " + req.params.value);
    var blueValue = req.params.value;
    if( isNumber(blueValue) ){
        piblaster.setPwm(BLUE_GPIO_PIN, blueValue/255);
        res.send('ok');
    } else {
        res.status(400).send('error');
    }
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('RGB LED Slider listening at http://%s:%s', host, port);
});

