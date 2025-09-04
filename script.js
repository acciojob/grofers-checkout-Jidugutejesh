  function calculateTotal() {
    let prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(cell => {
      let val = cell.textContent.replace(/[^0-9]/g, "");
      total += parseFloat(val) || 0;
    });

    document.getElementById("ans").textContent = total;
  }