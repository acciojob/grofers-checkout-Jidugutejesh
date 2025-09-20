function calculateTotal() {
  const priceElements = document.querySelectorAll(".price");
  let sum = 0;

  priceElements.forEach(price => {
    let text = price.textContent.trim();

    let value = parseFloat(text.match(/\d+$/)); 

    if (!isNaN(value)) {
      sum += value;
    }
  });

  const existingTotal = document.getElementById("totalRow");
  if (existingTotal) existingTotal.remove();

  const table = document.getElementById("groceryTable");
  const row = document.createElement("tr");
  row.id = "totalRow";

  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.textContent = "Total Price: " + sum;

  row.appendChild(cell);
  table.appendChild(row);

  document.getElementById("ans").textContent = sum;
}
