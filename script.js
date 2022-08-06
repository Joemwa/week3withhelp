You're running out of storage (97%). … 
Soon you won't be able to upload new files to Drive and send or receive emails in Gmail.Learn more
My Drive

var facilitator, facilitators, new_fac;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


facilitators = ['Malkit', 'Ivonne', 'Tosin', 'Joe', 'Jennifer'];


document.getElementById('button').addEventListener('click', (event) => {
  facilitator = randomMember(facilitators);
  let element_fac = document.getElementById('fac');
  element_fac.innerText = facilitator;

});

document.getElementById('adder').addEventListener('click', (event) => {
  new_fac = getNumberOrString(document.getElementById('input').value);
  facilitators.unshift(new_fac);
  let element_input = document.getElementById('input');
  element_input.innerText = 'z';

});