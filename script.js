const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 // Step 1: Select all prices
  let prices = document.querySelectorAll(".price");

  let total = 0;

  // Step 2: Sum up the prices
  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // Step 3: Create new row and cell
  let newRow = document.createElement("tr");
  let newCell = document.createElement("td");

  // Span across 2 columns
  newCell.colSpan = 2;
  newCell.textContent = "Total Price: Rs " + total;

  // Step 4: Append to table
  newRow.appendChild(newCell);
  document.querySelector("table").appendChild(newRow);

  // Disable button after showing total (optional, avoids duplicate rows)
  getSumBtn.disabled = true;

};

getSumBtn.addEventListener("click", getSum);

