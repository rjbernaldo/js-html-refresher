'use strict';

// onload
console.log('test');

// onclick
var clickButton = document.querySelector('.clickButton');

clickButton.addEventListener('click', onClick);

function onClick() {
  console.log('onClick');

  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  }
  xhr.open('GET', )
};

// on blur
var inputBlur = document.querySelector('.inputBlur');

inputBlur.addEventListener('blur', function() {
  console.log('inputBlur');
});

// on focus
var inputFocus = document.querySelector('.inputFocus');

inputFocus.addEventListener('focus', function() {
  console.log('inputFocus');
});

// timer
function timeout() {
  alert('timeout!');
}

// miliseconds
// setTimeout(timeout, 1000)

var count = 0;

function interval() {
  count += 1;
  console.log('interval', count);
}

// setInterval(interval, 1000);

// onclick
var buggedButton = document.querySelector('.buggedButton');

buggedButton.addEventListener('click', onBuggedClick);

function onBuggedClick() {
  test += 1;
  console.log('onClick');
};

var form = document.querySelector('.submitForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var formInput = form.querySelector('input');
  var valid = validateEmail(formInput.value);

  if (!valid) {
    alert('Please enter a valid email address');
  } else {
    alert('Nice');
  }
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}