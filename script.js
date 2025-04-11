'use strict';



const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }





const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });

}


const header = document.querySelector("[data-header]");

let lastScrollPosition = 0;

window.addEventListener("scroll", function () {

  let scrollPosition = window.pageYOffset;

  if (scrollPosition > lastScrollPosition) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }

  lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;

});

const input = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-submit]");

input.addEventListener("input", function () {

  if (input.checkValidity()) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }

});


const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 200 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


  function toggleAudio(id) {
    const audio = document.getElementById(id);
    const button = audio.nextElementSibling;
    if (audio.paused) {
      audio.play();
      button.innerHTML = '<ion-icon name="pause"></ion-icon>';
    } else {
      audio.pause();
      button.innerHTML = '<ion-icon name="play"></ion-icon>';
    }
  }


    let currentAudio = null;
  
    function toggleAudio(audioId, playButtonId) {
      const audio = document.getElementById(audioId);
      const playButton = document.getElementById(playButtonId);
      
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        const currentButton = document.querySelector(`#${currentAudio.id.replace('audio', 'play')}`);
        currentButton.setAttribute('name', 'play');
      }
  
      if (audio.paused) {
        audio.play();
        playButton.setAttribute('name', 'pause');
      } else {
        audio.pause();
        playButton.setAttribute('name', 'play'); 
      }
    }
    
    document.getElementById('play1').addEventListener('click', () => toggleAudio('audio1', 'play1'));
    document.getElementById('play2').addEventListener('click', () => toggleAudio('audio2', 'play2'));
    document.getElementById('play3').addEventListener('click', () => toggleAudio('audio3', 'play3'));
    document.getElementById('play4').addEventListener('click', () => toggleAudio('audio4', 'play4'));
    document.getElementById('play5').addEventListener('click', () => toggleAudio('audio5', 'play5'));
    document.getElementById('play6').addEventListener('click', () => toggleAudio('audio6', 'play6'));
    document.getElementById('play7').addEventListener('click', () => toggleAudio('audio7', 'play7'));
    document.getElementById('play8').addEventListener('click', () => toggleAudio('audio8', 'play8'));
  
   
    
    document.querySelector(".navbar-btn").addEventListener("click",()=>{
        document.location = "https://open.spotify.com/";
    })
  