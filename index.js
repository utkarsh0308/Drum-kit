var numberOfButtons = document.querySelectorAll(".drum").length;
var tom1 = new Audio("sounds/tom-1.mp3"); 

for(i = 0;i<numberOfButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
    tom1.play();
}