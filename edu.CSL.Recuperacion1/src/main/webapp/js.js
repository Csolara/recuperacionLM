/**
 * 
 */

let palabra;
let letra;
let intentos = 0;
document.getElementById("intentos").innerHTML = intentos;

 function introducirPalabra(){
	 	
	 palabra = prompt("Introduzca la palabra: ");		  
	 
	 document.getElementById("palabra").innerHTML = "Palabra: " + palabra;	 
	 
 }

 
 function Letra(){	 
	 
	 document.getElementById("intentos").innerHTML = intentos++;
	 
	 letra = prompt("Introduzca una letra: ");	 
	 
	 if(letra == palabra){		 
		 document.getElementById("letra").innerHTML = letra;	
	 if(intentos <= 1){
		 alert("Magnífico");
	 }else if(intentos > 1 && intentos < 3){
		 alert("Bien");
	 }else if(intentos > 3 && intentos < 5){
		 alert("Por poco")
	 }else if(intentos > 5){
		 alert("Has perdido")
	 }
	 }else{
		 alert("la palabra introducida es incorrecta");
	 }	
	 
 }
  
 function tiempo(){
	 
 }