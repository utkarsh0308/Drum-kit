var numberOfButtons = document.querySelectorAll(".drum").length;
var tom1 = new Audio("sounds/tom-1.mp3"); 
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var crash = new Audio("sounds/crash.mp3");
var snare = new Audio("sounds/snare.mp3");

const wdrum = document.getElementByClassName("w drum");
  wdrum.addEventListener("click",playTom1);

function playTom1(){
    tom1.play();
}