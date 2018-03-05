//function for enabling and disabling the buttons
function enablePlayer2() {
    document.getElementById("dice2").disabled = false;
    document.getElementById("pass2").disabled = false;
    document.getElementById("dice").disabled = true;
    document.getElementById("pass").disabled = true;
        }
function enablePlayer1() {
    document.getElementById("dice").disabled = false;
    document.getElementById("pass").disabled = false;
    document.getElementById("dice2").disabled = true;
    document.getElementById("pass2").disabled = true;
}
//end

//blur effect on jumbotrons
// function blur1(){
// 	document.getElementById("col2").css({opacity:1});
// 	document.getElementById("col1").css({opacity:0.5});
// }$(document).ready(function () {


var randomNumber;
// function for generating random numbers
function rollDice(){
	var die = document.getElementById('die');
	randomNumber = Math.ceil(Math.random()*6);
	die.innerHTML = randomNumber;
}
 // end of function


var player1Array = [];//array that receives the random numbers
var sum=0;//the sum of the random numbers in the play1Array
var totalArray = [];//array that stores the sum of random number per turn 
var total;//the total sum of the items in totalArray


 
// function for checking random number
function putInArray(){
	if (randomNumber===1) {//if you roll a 1,
		alert("sorry, you rolled a one. Cheza Player2!");
		sum=0;//the player will be awarded no points i.e 0 points
		document.getElementById("inHand").innerHTML = sum;
		totalArray.push(sum);//we push the zero into our array

		player1Array=[];//we empty the array for the next round of random numbers
		die.innerHTML=0;

		totalArray.push(sum);
		total = totalArray.reduce(function(a,b){
			return a + b;
		});
		document.getElementById("total").innerHTML = total;
		enablePlayer2();
		console.log("your accumulated total is "+ total)
		console.log("\n")
	}
	else{
		player1Array.push(randomNumber);
		sum=player1Array.reduce(function(a,b){
		return a + b;
		});
		document.getElementById("inHand").innerHTML = sum;
		console.log("You have " + sum + " points in hand");
		//console.log("Your accumulated total is "+ total);
	}
	console.log("player1 "+ player1Array);
	// console.log("You have " + sum + " points in hand");

} 
//end of function for checking random numbers

// function for passing your turn to next player
function pass(){
	totalArray.push(sum);
	total=totalArray.reduce(function(a,b){
		return a + b;
	});
	document.getElementById("total").innerHTML = total;

	if (total>=100) {
		alert("Congratulations Team Red. You win.")
	}

	player1Array=[];//we empty the array for the next round of random numbers,
	sum=0; //In case you want pass, without rolling 
	document.getElementById("inHand").innerHTML = sum;
	die.innerHTML=0;
	//console.log(totalArray);
	console.log("You have accumulated "+ totalArray + " which add up to " + total);
	console.log("\n");
}
// end of function



// player2


var randomNumber2;
// function for generating random numbers
function rollDice2(){
	var die2 = document.getElementById('die');
	randomNumber2 = Math.ceil(Math.random()*6);
	die.innerHTML = randomNumber2;
}
 // end of function


var player2Array = [];//array that receives the random numbers
var sum2=0;//the sum of the random numbers in the play1Array
var totalArray2 = [];//array that stores the sum of random number per turn 
var total2;//the total sum of the items in totalArray


 
// function for checking random number
function putInArray2(){
	if (randomNumber2===1) {//if you roll a 1,
		alert("sorry, you rolled a one. Cheza player1");
		sum2=0;//the player will be awarded no points i.e 0 points
		document.getElementById("inHand2").innerHTML = sum;
		totalArray2.push(sum2);//we push the zero into our array
		player2Array=[0];//we empty the array for the next round of random numbers
		die.innerHTML=0;

		totalArray2.push(sum2);
		total2 = totalArray2.reduce(function(a,b){
			return a + b;
		});
		document.getElementById("total2").innerHTML = total2;
		enablePlayer1();
		console.log("\n")
	}
	else{
		player2Array.push(randomNumber2);
		sum2=player2Array.reduce(function(a,b){
		return a + b;
		});
		document.getElementById("inHand2").innerHTML = sum2;
		console.log("You have " + sum2 + " points in hand");
	}
	console.log("player2 "+player2Array);
	// console.log("You have " + sum + " points in hand");

} 
//end of function for checking random numbers

// function for passing your turn to next player
function pass2(){
	totalArray2.push(sum2);
	total2=totalArray2.reduce(function(a,b){
		return a + b;
	})
	document.getElementById("total2").innerHTML = total2;

	if (total2>=100) {
		alert("Congratulations Team Green. You win.")
	}

	player2Array=[];//we empty the array for the next round of random numbers,
	sum2=0; //In case you want pass, without rolling 
	document.getElementById("inHand2").innerHTML = sum2;
	die.innerHTML=0;
	//console.log(totalArray);
	console.log("player2 has "+ totalArray2 + " which add up to " + total2);
	console.log("\n")
}
// end of function



// $(document).ready(function () {
//     $(".player1score").text("0");
//     $(".player2score").text("0");
//     $(".turn-score").text(turnScore);
//     $("#player1").submit(function () {
//         event.preventDefault();
//         player1.playerName = $(".player1").val().toUpperCase();
//         $(".player1name").text(player1.playerName);
//         $("#player1").hide();
//     });
//     $("#player2").submit(function () {
//         event.preventDefault();
//         player2.playerName = $(".player2").val().toUpperCase();
//         $(".player2name").text(player2.playerName);
//         $("#player2").hide();
//     });
// });