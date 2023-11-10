"use strict";

// core function
const calc = function (arr) {
  // const arr = [q, w, e, r, t];
  const positives = [];
  const negatives = [];
  const theZeros = [];
  let total = 0;
  let multiplication = 1;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    multiplication *= arr[i];

    if (arr[i] > 0) {
      positives.push(arr[i]);
    } else if (arr[i] < 0) {
      negatives.push(arr[i]);
    } else if (arr[i] === 0) {
      theZeros.push(arr[i]);
    }
  }

  return [positives, negatives, theZeros.length, total, multiplication];
};

// let [P, N, Z, T, M] = calc(5, 8, 7, 890, 0);
// console.log(P, N, Z, T, M);
// end of core function

// variables
const add = document.querySelector(".add");
const numbers = document.querySelector(".numbers");
const result = document.querySelector(".result");
const numbersDisplay = document.querySelector(".numbers-display");
const message = document.querySelector(".message");
let positives = document.querySelector(".p");
let negatives = document.querySelector(".n");
let theZeros = document.querySelector(".z");
let total = document.querySelector(".t");
let multiplication = document.querySelector(".m");
const arr = [];

// add function
add.addEventListener("click", function () {
  const input = Number(document.querySelector("input").value);
  console.log(`${input} added to the array`);
  arr.push(input);
  document.querySelector(".input").value = "";
  return arr;
});

// numbers function
numbers.addEventListener("click", function () {
  let numbersDisplayValue = "";
  for (let i = 0; i < arr.length; i++) {
    numbersDisplayValue += `${arr[i]},`;
  }

  numbersDisplay.textContent += ` ${numbersDisplayValue} ;`;
  console.log(arr);
});

// result function
result.addEventListener("click", function () {
  const [p, n, z, t, m] = calc(arr);
  console.log(p, n, z, t, m);

  positives.textContent += `${p} ;`;
  negatives.textContent += `${n} ;`;
  theZeros.textContent += `${z} ;`;
  total.textContent += `${t} ;`;
  multiplication.textContent += `${m} ;`;

  message.classList.remove("hidden");

  return [p, n, z, t, m];
});
