'use strict'

var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var button = document.getElementById("restart_btn");
var stop = document.getElementById("stop_btn");


var bar = new ProgressBar.Circle(container, { // Creating new Progress Bar
  color: "Black",                             // Setting color of text to black

  strokeWidth: 8,
  trailWidth: 6,
  easing: "easeInOut",                        // Animation type

  duration: 6000,                     
  text: {
    autoStyleContainer: false,          
  },
  from: { color: "#5DADE2", width: 7 },
  to: { color: "#5DADE2", width: 8 },

  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100 + 1);
    console.log(value);
    if (value <= 30) {
      circle.setText("Execution");
      number2.classList.remove('visible');
      number3.classList.remove('visible');
    } else if (value > 30 && value <= 67) {
      circle.setText("Progress");
      number2.classList.add('visible');
      number3.classList.remove('visible');
    } else if (value > 67 && value <= 100) {
      circle.setText("Review & Learn");
      number3.classList.add('visible');
      number2.classList.add('visible');
      if(value===100){
        button.classList.add('visible')
      }
    }
  },
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "1.6rem";



const animateCycle  = function(){
  bar.animate(0.3);
setTimeout(function () {
  bar.animate(0.7);
}, 6500);
setTimeout(function () {
  bar.animate(1.0);
}, 13000);
}

const resetCircle = function(){
  bar.animate(0);
  setTimeout(animateCycle,7000);
}

const stopCircle = function(){
  bar.stop();
}

animateCycle();

button.addEventListener('click', resetCircle);
stop.addEventListener('click', stopCircle);

