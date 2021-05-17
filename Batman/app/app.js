const card = document.querySelector(".card");
const container = document.querySelector(".container");
var i=0, j=0, k=0, l=0, m=0;

container.addEventListener("mousemove",(e)=>{
    let xAxis = ((window.innerWidth / 2) - e.pageX)/23;
    let yAxis = ((window.innerHeight / 2) - e.pageY)/23;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

container.addEventListener("mouseenter", (e)=>{
    card.style.transition = 'none';

    title.style.transform = "translateZ(160px)";
    batman.style.transform = "translateZ(200px) rotateY(-30deg)";
    purchase.style.transform = "translateZ(180px)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(160px)";
});

container.addEventListener("mouseleave", e=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    batman.style.transform = "translateZ(0px) rotateY(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0)";
});

const title = document.querySelector(".title");
const batman = document.querySelector(".batman img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

var audio1 = new Audio('../audio/SiletGuardian.mp3');
var audio2 = new Audio('../audio/whyDoWeFall.mp3');
var audio3 = new Audio('../audio/Joker.mp3');
var audio4 = new Audio('../audio/Alfred2.mp3');
var audio5 = new Audio('../audio/Harvey.mp3');


let play = document.querySelector(".Dark");
play.addEventListener("click",(e)=>{
    if(i==0)
    {
    audio1.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    i=1;
    }
    else if(i==1){
        audio1.pause();
        i=0;
     }

     var img2 = document.querySelector(".background");
     img2.style.background = 'url("../images/silentGuardian.jpg")';
     img2.style.transition = 'all 2s ease-in'

});




let next = document.querySelector(".purchase button");
next.addEventListener("click",(e)=>{
    
    if(j==0)
    {
    audio2.play();
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    j=1;
    }
    else if(j==1){
    audio2.pause();
    j=0;
     }
    
     var img2 = document.querySelector(".background");
    img2.style.background = 'url("../images/whyFall.jpg")';
    img2.style.transition = 'all 2s ease-in'

});

let Joker = document.querySelector(".active");
Joker.addEventListener("click",(e)=>{
    
    if(k==0)
    {
    audio3.play();
    audio1.pause();
    audio2.pause();
    audio4.pause();
    audio5.pause();
    k=1;
    }
    else if(k==1){
    audio3.pause();
    k=0;
     }
    
     var img2 = document.querySelector(".background");
    img2.style.background = 'url("../images/Joker.jpg")';
    img2.style.transition = 'all 2s ease-in'

});

let alfred = document.querySelector(".Wise");
alfred.addEventListener("click",(e)=>{
    
    if(l==0)
    {
    audio4.play();
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio5.pause();
    l=1;
    }
    else if(l==1){
    audio2.pause();
    l=0;
     }
    
     var img2 = document.querySelector(".background");
    img2.style.background = 'url("../images/Alfred.jpg")';
    img2.style.transition = 'all 2s ease-in'

});

let harvey = document.querySelector(".next");
harvey.addEventListener("click",(e)=>{
    
    if(m==0)
    {
    audio5.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio1.pause();
    m=1;
    }
    else if(m==1){
    audio2.pause();
    m=0;
     }
    
     var img2 = document.querySelector(".background");
    img2.style.background = 'url("../images/Harvey.jpg")';
    img2.style.transition = 'all 2s ease-in'

});


// let pause = document.querySelector(".active");
// pause.addEventListener("click",(e)=>{
//     audio1.pause();
//     audio2.pause();
// });
