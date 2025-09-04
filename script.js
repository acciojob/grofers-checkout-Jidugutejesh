 function calculateTotal() {
    let prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(cell => {
      let numbers = cell.textContent.match(/\d+/g);
      let value = numbers ? parseInt(numbers[numbers.length - 1], 10) : 0;
      total += value;
    });

    document.getElementById("ans").textContent = total;
  }