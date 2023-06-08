"use strict"
//burger menu//

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

//pop up//
const openButton = document.getElementById('openButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});


//slider//
const slider = document.querySelector('.slider');
const sliderContent = document.querySelector('.slider-content');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  sliderContent.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
