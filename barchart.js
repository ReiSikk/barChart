"use strict;";

window.addEventListener("load", init);

const model = [];
let i = 0;
let scrollSpeed = 500;

function init() {
  setTimeout(showData, scrollSpeed);
}

//Visualize data when 32 is 100% and every entry is relative to 32
function appendData() {
  const barChart = document.querySelector(".bar_chart");
  barChart.innerHTML += `<div class="bar" style= "height: ${(model[0] / 32) * 100}%;"></div>`;
}

// get the "data"
function getData() {
  const randomNr = getNumberOfCustomers();

  if (i < 40) {
    model.unshift(randomNr);
    i++;
  } else {
    model.length = 39;
    model.unshift(randomNr);
  }
  console.log(model);
  init();
}

//show the data on the chart
function showData() {
  getData();
  appendData();
}

function getNumberOfCustomers() {
  //gives me a random number of guests, max 32
  return Math.floor(Math.random() * 32);
}

init();
