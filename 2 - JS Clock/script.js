"use strict";

const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

let seconds = 0;
let mins = 0;
let hour = 0;
function setDate() {
  const now = new Date();

  seconds = now.getSeconds();
  //   console.log(seconds);
  const secondsDeg = (seconds / 60) * 360 + 90; //s*6
  secHand.style.transform = `rotate(${secondsDeg}deg)`;

  mins = now.getMinutes();
  const minsDeg = (mins / 60) * 360 + 90; //m * 6;
  //   console.log(mins);
  minHand.style.transform = `rotate(${minsDeg}deg)`;

  hour = now.getHours();
  const hoursDeg = (hour / 12) * 360 + 90 + Math.round(mins / 12); //h*30
  //   console.log(hour);
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);

setDate();
