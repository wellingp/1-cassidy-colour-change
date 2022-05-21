let davidText = document.querySelector('h1');
davidText.addEventListener('mouseenter', colourChange);

let header = document.getElementById('navbar');
header.addEventListener('mouseenter', colourChange);

let footer = document.querySelector('footer');
footer.addEventListener('mouseenter', colourChange);

const MAGENTA = '#FF00C6';
const ORANGE = '#FF5F01';
const LIGHTBLUE = '#02DEFF';
const YELLOW = '#FFFF00';

davidText.style.color = 'brown';

//

function colourChange(){

   switch(davidText.style.color){
      case 'brown':
         davidText.style.color = MAGENTA;
      break;
      case 'rgb(255, 0, 198)':
         davidText.style.color = ORANGE;
      break;
      case 'rgb(255, 95, 1)':
         davidText.style.color = LIGHTBLUE;
      break;
      case 'rgb(2, 222, 255)':
         davidText.style.color = YELLOW;
      break;
      case 'rgb(255, 255, 0)':
         davidText.style.color = MAGENTA;
      break;
   }
}