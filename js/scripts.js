var randomNumber

function rollDice(){
	var die = document.getElementById('die');
	randomNumber = Math.ceil(Math.random()*6);
	die.innerHTML = randomNumber;
}

var player1Array = [];

function putInArray(){
	if (randomNumber===1) {
		alert("sorry, you rolled a one :(");
	}
	else{
		player1Array.push(randomNumber);
	}
	console.log(player1Array);
} 