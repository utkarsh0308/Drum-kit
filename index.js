var numberOfButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfButtons; i++) {
  
  document.querySelectorAll('.drum')[i].addEventListener('click',function(){
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
  })
  }

  document.addEventListener('keydown',function(event){
    playSound(event.key);
  })

function playSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    
    case 'j':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default: alert('invalid key is pressed');
      break;
  }
}

function buttonAnimation(pressedKey) {
    var pressedKey = document.querySelector('.'+ pressedKey);
    pressedKey.classList.add(pressed);
    
}