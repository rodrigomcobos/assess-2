// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

const authButton = document.querySelector('#auth');
const authText = authButton.textContent;

authButton.addEventListener('click', () => {
  authButton.textContent =
    authButton.textContent === 'Log In' ? 'Log Out' : 'Log In';
});

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

const sendAlertForm = document.querySelector('#send-alert');

sendAlertForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const alertMessage = document.querySelector('#alert-message').value;
  alert(alertMessage);
});

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-click to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

const itemAdder = document.querySelector('#item-adder');
const list = document.querySelector('#list');

itemAdder.addEventListener('dblclick', () => {
  const listItem = document.createElement('li');
  listItem.textContent = 'Item';
  list.appendChild(listItem);
});

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

const blueButton = document.querySelector('#blue');
const redButton = document.querySelector('#red');
const colorChanger = document.querySelector('#color-changer');
const changeColorEls = document.querySelectorAll('.changes-colors');

// Calculate factorial

blueButton.addEventListener('click', () => {
  changeColorEls.forEach((el) => {
    if (
      el.textContent !== "This sentence doesn't change colors except" &&
      el.textContent !== "But this item doesn't change colors"
    ) {
      el.style.color = 'blue';
    }
  });
});

redButton.addEventListener('click', () => {
  changeColorEls.forEach((el) => {
    if (
      el.textContent !== "This sentence doesn't change colors except" &&
      el.textContent !== "But this item doesn't change colors"
    ) {
      el.style.color = 'red';
    }
  });
});
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

const factorialForm = document.querySelector('#factorial-calculator');
const result = document.querySelector('#result');

factorialForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = factorialForm.querySelector('#factorial-input');
  const num = parseInt(input.value);
  const factorial = factorialOf(num);
  result.textContent = factorial;
});

function factorialOf(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

const form = document.querySelector('#recommend-word');
const feedback = document.querySelector('.form-feedback');
const word = document.querySelector('#word');
const submit = document.querySelector('#submit');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (word.value.length < 4) {
    feedback.textContent = 'The word must be at least 4 characters long.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Thanks for your submission!';
    feedback.style.color = 'green';
  }
});
