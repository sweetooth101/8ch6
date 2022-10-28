"use strict";

const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {

	$("#degree_label_1").innerHTML = label1Text
	$("#degree_label_2").innerHTML = label2Text
	$("#degrees_entered").value="";
	$("#degrees_computed").value="";
	$("#message").remove();

               

}


/****************************
*  event handler functions  *
****************************/

const convertTemp = () => {  

               

	let val = parseFloat($("#degrees_entered").value);
	const newLabel = document.createElement("p");
	const newText = document.createTextNode("You must enter a valid number for degrees.");
	newLabel.appendChild(newText)
	newLabel.setAttribute("id", "message")
	if(isNaN(val)){
		document.body.appendChild(newLabel)                                             

	}
	else{
		if($("#to_celsius").checked){
			$("#degrees_computed").value =  calculateCelsius(val).toFixed(0)
			$("#message").remove();                                                                                                             
		}
		else {    

			$("#degrees_computed").value =  calculateFahrenheit(val).toFixed(0)
			$("#message").remove();                                                                                             
		}
	}

               

               

};

 
const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

 

 

 

 

document.addEventListener("DOMContentLoaded", () => {

                // add event handlers

                $("#convert").addEventListener("click", convertTemp);

    $("#to_celsius").addEventListener("click", toCelsius);

    $("#to_fahrenheit").addEventListener("click", toFahrenheit);

               

                // move focus

                $("#degrees_entered").focus();

});