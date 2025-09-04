// Select all price elements
const prices = document.querySelectorAll(".prices");

// Calculate total
let total = 0;
prices.forEach(priceCell => {
  total += parseFloat(priceCell.textContent); // convert text to number
});

// Create new row
const table = document.getElementById("groceryTable");
const totalRow = document.createElement("tr");
totalRow.classList.add("total-row");

const totalCell = document.createElement("td");
totalCell.colSpan = 2; // span across both columns
totalCell.textContent = "Total Price: " + total;

totalRow.appendChild(totalCell);
table.appendChild(totalRow);
