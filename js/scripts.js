function rollDice(){
	var die = document.getElementById('die');
	var randomNumber = Math.ceil(Math.random()*6);
	die.innerHTML = randomNumber;
}