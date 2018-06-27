var express = require('express'); 
var app = express();
var path = require('path');
var gpio = require('rpi-gpio');

gpio1.setup(7, gpio.DIR_OUT);  #See https://lc.cx/m6hz
gpio2.setup(11, gpio.DIR_OUT);
gpio3.setup(13, gpio.DIR_OUT);
gpio4.setup(15, gpio.DIR_OUT);
gpio5.setup(16, gpio.DIR_OUT);




app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'));

app.get('/', function(req, res){ 
 	res.render('index',{status:"Press Button To change Status of Led !!"});
});

	<!-- ----- LEDs ON ------ -->
<!-- For LED 1 -->
app.post('/led1/on', function(req, res){
gpio1.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!!Led 1 is On"});
    });

});
<!-- For LED 2 -->
app.post('/led2/on', function(req, res){
gpio2.write(11, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!!Led 2 is On"});
    });

});
<!-- For LED 3 -->
app.post('/led3/on', function(req, res){
gpio3.write(13, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!!Led 3 is On"});
    });

});
<!-- For LED 4 -->
app.post('/led4/on', function(req, res){
gpio3.write(15, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!!Led 4 is On"});
    });

});
<!-- For LED 5 -->
app.post('/led5/on', function(req, res){
gpio3.write(16, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!!Led 5 is On"});
    });

});

	<!-- LED off -->
<!-- For LED 1 -->
app.post('/led1/off', function(req, res){
gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Ohh!! Led 1 is Off"});
    });

});
<!-- For LED 2 -->
app.post('/led2/off', function(req, res){
gpio.write(11, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Ohh!! Led 2 is Off"});
    });

});
<!-- For LED 3 -->
app.post('/led3/off', function(req, res){
gpio.write(13, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Ohh!! Led 3 is Off"});
    });

});
<!-- For LED 4 -->
app.post('/led4/off', function(req, res){
gpio.write(15, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Ohh!! Led 4 is Off"});
    });

});
<!-- For LED 5 -->
app.post('/led5/off', function(req, res){
gpio.write(16, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Ohh!! Led 5 is Off"});
    });

});


app.listen(3000, function () {
  console.log('Simple LED Control Server Started on Port: 3000!')
})

