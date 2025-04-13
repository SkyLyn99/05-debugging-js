// Get elements from the DOM
const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const calculateBtn = document.getElementById("calculate");
const totalDisplay = document.getElementById("totalAmount");
const themeToggle = document.getElementById("themeToggle");
const form = document.querySelector(".calculator");

// Function to calculate the tip and total amount
function calculateTotal(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the bill amount and tip percentage from the inputs
  let bill = parseFloat(billInput.value); // Convert bill input to a number
  let tip = parseFloat(tipSelect.value); // Convert tip input to a number

  // Check if bill and tip are valid numbers
  if (isNaN(bill) || isNaN(tip)) {
    totalDisplay.innerText = "Please enter valid numbers for bill and tip.";
    return; // Exit the function if inputs are invalid
  }

  // Calculate the total amount
  let total = bill + (bill * tip / 100);

  // Display the total amount as a decimal
  totalDisplay.innerText = `Total: $${total.toFixed(2)}`; // Format number to a fixed number of (2) decimal places
}

// Function to toggle light/dark mode
function toggleTheme() {
  // Toggle the "dark" class on the body element
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark"); // Remove dark mode
    themeToggle.innerText = "Switch to Dark Mode"; // Update button text
  } else {
    document.body.classList.add("dark"); // Add dark mode
    themeToggle.innerText = "Switch to Light Mode"; // Update button text
  }
}

// Event listeners
form.addEventListener("submit", calculateTotal);
themeToggle.addEventListener("click", toggleTheme);
