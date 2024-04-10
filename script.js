
let control=document.getElementById("control")
let range=document.getElementById("range")
let song=document.getElementById("song")
let songimg=document.querySelector(".songimg")
let forward=document.getElementById("forward")
let backward=document.getElementById("backward")
let h4div=document.querySelector(".h4div")
let h2div=document.querySelector(".h2div")
let h2=document.getElementById("h2")
let h4=document.getElementById("h4")
const separatorPattern = /\,|\s+/;

let songs=[{songname:"Kanavea nee",url:"music/song1.mp3",singer:"Sooraj Santhosh"},
{songname:"Ithuvarai illatha",url:"music/song2.mp3",singer:"Uvan shankar raja"},
{songname:"Po uravea",url:"music/song3.mp3",singer:"Sid Sriram"},
{songname:"Poi Vazhva",url:"music/song4.mp3",singer:"Santhosh narayanan and Vijay Narain"},
{songname:"Poo Avizhum Pozhuthil",url:"music/song5.mp3",singer:"Sid Sriram"},
]

let lastplayed=0;
song.src=songs[lastplayed].url;
console.log(lastplayed)
h2.textContent=songs[0].songname
h4.textContent=songs[0].singer

control.addEventListener("click",playpause)

song.onloadedmetadata = function(){
  

range.max=song.duration;
range.value=song.currentTime;



findwidth();
findwidthnew()
}

function playpause(){
 
 
   if(control.classList.contains("fa-play")){
    song.play();
    control.classList.remove("fa-play")
    control.classList.add("fa-pause")
    songimg.classList.add("rotate")

   }
   else{
    control.classList.remove("fa-pause")
    control.classList.add("fa-play")
    song.pause();
    songimg.classList.remove("rotate")
   }
  
}

if(song.play()){
setInterval(()=>{
    range.value=song.currentTime;
},300)
}

range.onchange=function(){
    song.currentTime=range.value;
}

let i=0
forward.addEventListener("click",nextsong);
function nextsong(){

  h4div.classList.remove("slide")
  if(i==songs.length-1)
  {
i=0;
song.src=songs[i].url
h2.textContent=songs[i].songname
h4.textContent=songs[i].singer 
lastplayed=i;
console.log(lastplayed+ "is last played")
  }else{
    ++i;
    song.src=songs[i].url
    h2.textContent=songs[i].songname
    h4.textContent=songs[i].singer 
    lastplayed=i;
    console.log(lastplayed+ "is last played") }

   

  if(control.classList.contains("fa-pause")){
song.play();
  }
  else{
    song.pause()
  }

    
}



backward.addEventListener("click",presong);
function presong(){
    if(i==0){
        lastplayed=i;
        i=songs.length-1
        song.src=songs[i].url
        h2.textContent=songs[i].songname
        h4.textContent=songs[i].singer
  
    }
    else{
    --i;
    song.src=songs[i].url
    h2.textContent=songs[i].songname
    h4.textContent=songs[i].singer
    lastplayed=i;

    }
 
     
    
    if(control.classList.contains("fa-pause")){
        song.play();
          }
          else{
            song.pause()
          }
}
song.pause();
console.log(songs.length+"is length")



function playrepeat(){
  song.src=songs[i].url
  song.play()
}
function findwidth(){
  const textwidth=h4div.scrollWidth;
  
  if(textwidth>h4div.offsetWidth){
    h4div.classList.add("slide")
  }
  else{
    h4div.classList.remove("slide")
  }

  const animationdistance=textwidth-h4div.offsetWidth;

  let animationduration
  if(animationdistance<100){
    animationduration=5;
  }
  else if(animationdistance>100 && animationdistance <200){
    animationduration=8;
  }
  else if(animationdistance>200 && animationdistance <300 ){
    animationduration=12;
  }
  else{
    animationduration=10;
  }
  
  
 

  h4div.style.setProperty("--animation-distance", `${animationdistance}px`);
  h4div.style.animationDuration=`${animationduration}s`

}

function findwidthnew(){

let animationdistance
  let songwidth=h2div.scrollWidth;
  let songoffsetwidth=h2div.offsetWidth
  if(songwidth>songoffsetwidth){

    h2div.classList.add("slidenew")
    let animationdistance=songwidth-songoffsetwidth

    h2div.style.setProperty("--animation-distance",`${animationdistance}px`)
  }else{
    h2div.classList.remove("slidenew")
  }



    
  let animationduration
  if(animationdistance<100){
    animationduration=5;
  }
  else if(animationdistance>100 && animationdistance <200){
    animationduration=8;
  }
  else if(animationdistance>200 && animationdistance <300 ){
    animationduration=12;
  }
  else{
    animationduration=10;
  }
  h2div.style.animationDuration=`${animationduration}s`
}



setInterval(()=>{ 

  if(song.currentTime==song.duration){

    if(playtype==1)
    { nextsong();
    }

    else if(playtype==2){
  playrepeat()
    }

    else if(playtype==3){
      
      let l=songs.length-1
      i=Math.floor(Math.random()*l)
      if(i==lastplayed){
        i=Math.random()*l
      }
      song.src=songs[i].url
      song.play()
      h2.textContent=songs[i].songname
h4.textContent=songs[i].singer
lastplayed=i
    
    }
   
  }
},300)





let togglebar=document.getElementById("togglebar")
let menu=document.getElementById("menu")
let i3=document.getElementById("i3")
let i2=document.getElementById("i2")
let i1=document.getElementById("i1")
let iid=document.getElementById("iid")
togglebar.addEventListener("click",showmenu)
let icondiv1=document.querySelector(".icondiv1")
let icondiv2=document.querySelector(".icondiv2")
let icondiv3=document.querySelector(".icondiv3")
function showmenu(){

  if(iid.classList.contains("fa-bars")){
    iid.classList.remove("fa-bars");
    iid.classList.add("fa-xmark")
    
    if(playtype==1){
      icondiv1.classList.add("selected")
   
      icondiv2.classList.remove("selected")
      icondiv3.classList.remove("selected")
    }
    else if(playtype==2){
      icondiv2.classList.add("selected")
      icondiv1.classList.remove("selected")

      icondiv3.classList.remove("selected")
    }else{
      icondiv3.classList.add("selected")
      icondiv1.classList.remove("selected")
      icondiv2.classList.remove("selected")

    }


  }
  else
  {
    iid.classList.remove("fa-xmark")
    iid.classList.add("fa-bars");
    icondiv1.classList.remove("selected")
    icondiv2.classList.remove("selected")
    icondiv3.classList.remove("selected")
  }




menu.classList.toggle("menu");

if(menu.classList.contains("menu")){
  i1.style.display="block"
i2.style.display="block"
i3.style.display="block"
}else{
  i1.style.display="none"
  i2.style.display="none"
  i3.style.display="none"
}





}

let playtype=1;

icondiv1.addEventListener("click",repeatall)
icondiv2.addEventListener("click",repeatone)
icondiv3.addEventListener("click",shuffle)
function repeatall(){
  playtype=1
  select()

let popmsg=document.querySelector(".pop")
popmsg.innerHTML="Repeat all songs"
popmsg.classList.add("popanim")
setTimeout(()=>{
popmsg.classList.remove("popanim")
},2100)
}

function repeatone(){
  playtype=2
  select()

  let popmsg=document.querySelector(".pop")
  popmsg.innerHTML="Repeat current song"
  popmsg.classList.add("popanim")
  setTimeout(()=>{
  popmsg.classList.remove("popanim")
  },2100)

}
function shuffle(){
  playtype=3
  select()

  let popmsg=document.querySelector(".pop")
popmsg.innerHTML="Shuffle"
popmsg.classList.add("popanim")
setTimeout(()=>{
popmsg.classList.remove("popanim")
},2100)
}

function select(){
  if(menu.classList.contains("menu")){

    if(playtype==1){
      icondiv1.classList.add("selected")
   
      icondiv2.classList.remove("selected")
      icondiv3.classList.remove("selected")
    }
    else if(playtype==2){
      icondiv2.classList.add("selected")
      icondiv1.classList.remove("selected")

      icondiv3.classList.remove("selected")
    }else{
      icondiv3.classList.add("selected")
      icondiv1.classList.remove("selected")
      icondiv2.classList.remove("selected")

    }
   
  }
}
