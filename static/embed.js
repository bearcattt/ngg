"use strict";

const iframe = document.getElementById("frame");

registerSW()
  .then(() => {
    iframe.src = "/static/nowgg/hvtrs8%2F-mctjsqpmt%2Ccmm-";  // Properly terminate this line with a semicolon
  }) // Close the then block here
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });
