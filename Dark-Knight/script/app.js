let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.bg1', 5 ,{y:-500})
.to('.girl', 3 , {y: -500}, "-=3")
.to('.content', 3, {top: 0},"-=3")
.fromTo('.content-images', {opacity: 0}, {opacity:1,duration: 2})
.fromTo('.text', {opacity: 0}, {opacity:1,duration: 1});

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "200%",
    triggerHook: "0",
})
.setTween(timeline)
.setPin("section")
.addTo(controller);

  var batLogo = document.querySelector(".logo");
  //window.onload = loading();

  function loading(){
    batLogo.style.display = 'none';
    batLogo.style.transition= 'all 3s ease-out'
  }

setTimeout(loading, 5000);

var theme = new Audio("audio/batTheme.mp3");
function playAudio(){
 theme.play();
 }
 playAudio();