var express = require('express')
var app = express()
var path = require('path')
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out');
var LED2 = new Gpio(17, 'out'); 	<!-- See https://lc.cx/m6hz -->
var LED3 = new Gpio(27, 'out');
var LED4 = new Gpio(22, 'out');
var LED5 = new Gpio(23, 'out');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public')); 

app.get('/', function(req, res){ 
 	res.render('index',{status:"Press Button To change Status of Led !!"});
	res.send({statusled1:"Press Button To change Status of Led !!"},{statusled2:"Press Button To change Status of Led !!"},{statusled3:"Press Button To change Status of Led !!"},{statusled4:"Press Button To change Status of Led !!"},{statusled5:"Press Button To change Status of Led !!"})
});

	<!-- ----- LEDs ON ------ -->
<!-- For LED 1 -->
app.post('/led1/on', function(req, res){
	LED.writeSync(1); //set pin state to 1 (turn LED on)
	res.render('index',{statusled1:"Led 1 en fonction"});
});
<!-- For LED 2 -->
app.post('/led2/on', function(req, res){
	LED2.writeSync(1); //set pin state to 1 (turn LED on)
	res.render('index',{statusled1:"Led 2 en fonction"});
});
<!-- For LED 3 -->
app.post('/led3/on', function(req, res){
	LED3.writeSync(1); //set pin state to 1 (turn LED on)
	res.render('index',{statusled1:"Led 3 en fonction"});
});
<!-- For LED 4 -->
app.post('/led4/on', function(req, res){
	LED4.writeSync(1); //set pin state to 1 (turn LED on)
	res.render('index',{statusled1:"Led 4 en fonction"});
});
<!-- For LED 5 -->
app.post('/led5/on', function(req, res){
	LED5.writeSync(1); //set pin state to 1 (turn LED on)
	res.render('index',{statusled1:"Led 5 en fonction"});
});

	<!-- LED off -->
<!-- For LED 1 -->
app.post('/led1/off', function(req, res){
	LED.writeSync(0);
	res.render('index',{statusled1:"Led 1 éteinte"});

});
<!-- For LED 2 -->
app.post('/led2/off', function(req, res){
	LED2.writeSync(0);
	res.render('index',{statusled1:"Led 2 éteinte"});
});
<!-- For LED 3 -->
app.post('/led3/off', function(req, res){
	LED3.writeSync(0);
	res.render('index',{statusled1:"Led 3 éteinte"});
});
<!-- For LED 4 -->
app.post('/led4/off', function(req, res){
	LED4.writeSync(0);
	res.render('index',{statusled1:"Led 4 éteinte"});
});
<!-- For LED 5 -->
app.post('/led5/off', function(req, res){
	LED5.writeSync(0);
	res.render('index',{statusled1:"Led  5éteinte"});
});


app.listen(3000, function () {
  console.log('Simple LED Control Server Started on Port: 3000!')
})

