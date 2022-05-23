let davidText = document.querySelector('h2');

window.addEventListener('scroll', colourChange);


davidText.style.color = 'blanchedalmond';

function colourChange(){
   if (davidText.classList == ''){
      davidText.classList.toggle('rainbow-class');
   }
}