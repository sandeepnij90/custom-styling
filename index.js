'use strict';

var inputs = document.querySelectorAll('input');

function handleUpdate() {
  var suffix = this.dataset.sizing;
  var html = document.querySelector('html');
  html.style.setProperty('--' + this.name, '' + this.value + suffix);
}

inputs.forEach(function (input) {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
});

