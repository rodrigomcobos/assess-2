// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

const authButton = document.querySelector('#auth'); // grabbing the button
const authText = authButton.textContent; // grabbing its text

authButton.addEventListener('click', () => {
  // adding an event listener
  authButton.textContent = // changing the text inside the button
    authButton.textContent === 'Log In' ? 'Log Out' : 'Log In'; // ternary operator to check if the text is 'Log In' or 'Log Out' and change accordingly
});

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

const sendAlertForm = document.querySelector('#send-alert'); // grabbing the form

sendAlertForm.addEventListener('submit', (event) => {
  // adding an event listener
  event.preventDefault(); // preventing the form from submitting by default
  const alertMessage = document.querySelector('#alert-message').value; // grabbing the value of the text box
  alert(alertMessage); // calling the alert function
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

const itemAdder = document.querySelector('#item-adder'); // grabbing the button
const list = document.querySelector('#list'); // grabbing the list

itemAdder.addEventListener('dblclick', () => {
  // adding an event listener for the double click
  const listItem = document.createElement('li'); // creating a new list item
  listItem.textContent = 'Item'; // adding the text 'Item' to the list item
  list.appendChild(listItem); // appending the list item to the list
});

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

const blueButton = document.querySelector('#blue'); // grabbing the button blue
const redButton = document.querySelector('#red'); // grabbing the button red
const colorChanger = document.querySelector('#color-changer'); // grabbing the container
const changeColorEls = document.querySelectorAll('.changes-colors'); // grabbing all the elements with the class 'changes-colors'

// Calculate factorial

blueButton.addEventListener('click', () => {
  // adding an event listener for click
  changeColorEls.forEach((el) => {
    // looping through the elements
    if (
      el.textContent !== "This sentence doesn't change colors except" && // checking if the text is not 'This sentence doesn't change colors except' and 'But this item doesn't change colors'
      el.textContent !== "But this item doesn't change colors" // checking if the text is not 'But this item doesn't change colors'
    ) {
      el.style.color = 'blue'; // changing the color to blue
    }
  });
});

redButton.addEventListener('click', () => {
  // adding an event listener for click
  changeColorEls.forEach((el) => {
    // looping through the elements
    if (
      el.textContent !== "This sentence doesn't change colors except" && // checking if the text is not 'This sentence doesn't change colors except' and 'But this item doesn't change colors'
      el.textContent !== "But this item doesn't change colors" // checking if the text is not 'But this item doesn't change colors'
    ) {
      el.style.color = 'red'; // changing the color to red
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

const factorialForm = document.querySelector('#factorial-calculator'); // grabbing the form
const result = document.querySelector('#result'); // grabbing the span

factorialForm.addEventListener('submit', (event) => {
  // adding an event listener for submit with event as the parameter
  event.preventDefault(); // preventing the form from submitting by default
  const input = factorialForm.querySelector('#factorial-input'); // grabbing the input
  const num = parseInt(input.value); // getting the value of the input
  const factorial = factorialOf(num); //  calling the function
  result.textContent = factorial; // putting the result in the span
});

const factorialOf = (num) => {
  // defining the function with num as the parameter
  let total = 1; // setting total to 1
  for (let i = 1; i <= num; i++) {
    // looping from 1 to num
    total *= i; // multiplying total by i
  }
  return total; // returning total
};

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

const form = document.querySelector('#recommend-word'); // grabbing the form
const feedback = document.querySelector('.form-feedback'); // grabbing the span
const word = document.querySelector('#word'); // grabbing the textarea
const submit = document.querySelector('#submit'); // grabbing the button

form.addEventListener('submit', (event) => {
  // adding an event listener for submit with event as the parameter
  event.preventDefault(); // preventing the form from submitting by default
  if (word.value.length < 4) {
    // checking if the length of the text is less than 4
    feedback.textContent = 'The word must be at least 4 characters long.'; // changing the feedback text to say "The word must be at least 4 characters long."
    feedback.style.color = 'red'; // changing the color of the text to red
  } else {
    feedback.textContent = 'Thanks for your submission!'; // changing the feedback text to say "Thanks for your submission!"
    feedback.style.color = 'green'; // changing the color of the text to green
  }
});
