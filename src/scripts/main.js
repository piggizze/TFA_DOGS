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

//pop 2/:

const openButton2 = document.getElementById('openButton2');
const popup2 = document.getElementById('popup2');
const closeButton2 = document.getElementById('closeButton2');

openButton2.addEventListener('click', () => {
  popup2.style.display = 'block';
});

closeButton2.addEventListener('click', () => {
  popup2.style.display = 'none';
});
//pop up 3//
const openButton3 = document.getElementById('openButton3');
const popup3 = document.getElementById('popup3');
const closeButton3 = document.getElementById('closeButton3');

openButton3.addEventListener('click', () => {
  popup3.style.display = 'block';
});

closeButton3.addEventListener('click', () => {
  popup3.style.display = 'none';
});
///pop up 4//
const openButton4 = document.getElementById('openButton4');
const popup4 = document.getElementById('popup4');
const closeButton4 = document.getElementById('closeButton4');

openButton4.addEventListener('click', () => {
  popup4.style.display = 'block';
});

closeButton4.addEventListener('click', () => {
  popup4.style.display = 'none';
});
///pop up 5///
const openButton5 = document.getElementById('openButton5');
const popup5 = document.getElementById('popup5');
const closeButton5 = document.getElementById('closeButton5');

openButton5.addEventListener('click', () => {
  popup5.style.display = 'block';
});

closeButton5.addEventListener('click', () => {
  popup5.style.display = 'none';
});
//slider//
