
	// for dice first

var randomNumber1 = Math.floor(Math.random() * 6) + 1 ; // giving random number
var randomDiceImage1 = "dice" + randomNumber1 + ".png";		//dice1 to dice6

var imagesSource1 = "images/" + randomDiceImage1;			// images/diceNumber.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imagesSource1);


// for dice second

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var imagesSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imagesSource2);



if(randomNumber1 === randomNumber2){

document.querySelector("h1").innerHTML = "draw!";

}
else if(randomNumber1 > randomNumber2){
	
		document.querySelector("h1").innerHTML = "play1 win ";
}
else {
	
		document.querySelector("h1").innerHTML = "player2 win ";
}