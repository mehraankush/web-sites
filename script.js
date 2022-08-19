

var progressBar=document.querySelectorAll('.skill-progress > div');
var skillsContainer=document.getElementById('skills-cotainer');
var animate=false;

window.addEventListener('scroll',checkScroll);

 function initialBars()
 {
    for(var bar of progressBar){
      bar.style.width = 0 ;
    }
 }

 initialBars();

function fillBars(){
  
   for(let bar of progressBar){
      let targetwidth=bar.getAttribute('data-bar-width');
      let currentWidth=0;
      let interval = setInterval(function(){
         if(currentWidth>targetwidth){
            clearInterval(interval);
            return;
         }
         currentWidth++;
         bar.style.width = currentWidth + '%';
      },5)
   }
}


function checkScroll(){
   var coordinates=skillsContainer.getBoundingClientRect();

   //condition to check to coordinates of top of skill bars to the top of viewpoet top
   if(!animate && coordinates.top <= window.innerHeight){
     animate=true;
    console.log('i am here');
    fillBars();
   }
   else if(coordinates.top > window.innerHeight){
      animate = false;
      initialBars();
   }
}