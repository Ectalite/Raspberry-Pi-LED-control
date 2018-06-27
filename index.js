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

	# ----- LEDs ON ------
#For led 1
app.post('/led1/on', function(req, res){
gpio1.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!!Led is On"});
    });

});
#For led 2
app.post('/led2/on', function(req, res){
gpio2.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!!Led is On"});
    });

});
#For led 3
app.post('/led3/on', function(req, res){
gpio3.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!!Led is On"});
    });

});

app.post('/led/off', function(req, res){
gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Ohh!! Led is Off"});
    });

});


app.listen(3000, function () {
  console.log('Simple LED Control Server Started on Port: 3000!')
})

