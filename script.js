 function calculateTotal() {
    let prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(cell => {
      let numbers = cell.textContent.match(/\d+/g);
      let val = numbers ? parseInt(numbers[numbers.length - 1]) : 0;
      total += val;
    });

    document.getElementById("ans").textContent = total;
  }