"use strict";

const form = document.querySelector(".msg__form");

const text = document.querySelector(".c-text");

const svg = document.querySelector(".contact_svg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.visibility = "hidden";
  text.style.visibility = "hidden";
  svg.style.visibility = "hidden";
  const successMsg = document.createElement("div");
  successMsg.classList.add("success-msg");
  const successMsgP = document.createElement("p");
  successMsgP.classList.add("success-msg__p");
  successMsgP.textContent = "Message sent successfully!";
  successMsg.appendChild(successMsgP);
  document.body.appendChild(successMsg);

  window.onclick = function (event) {
    if (event.target == successMsg) {
      successMsg.style.display = "none";
      form.style.visibility = "visible";
      text.style.visibility = "visible";
      svg.style.visibility = "visible";
    }
  };
});

let fieldOne = document.querySelector(".field-one");
let labelOne = document.querySelector(".label-one");
fieldOne.addEventListener("change", (e) => {
  labelOne.textContent = e.target.value;
});

let fieldTwo = document.querySelector(".field-two");
let labelTwo = document.querySelector(".label-two");
fieldTwo.addEventListener("change", (e) => {
  labelTwo.textContent = e.target.value;
});

let fieldThree = document.querySelector(".field-three");
let labelThree = document.querySelector(".label-three");
fieldThree.addEventListener("change", (e) => {
  labelThree.textContent = e.target.value;
});

let fieldFour = document.querySelector(".field-four");
let labelFour = document.querySelector(".label-four");
fieldFour.addEventListener("change", (e) => {
  labelFour.textContent = e.target.value;
});
