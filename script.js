  function calculateTotal() {
    let prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(cell => {
      // Extract all numeric sequences
      let matches = cell.textContent.match(/\d+/g);
      let value = 0;
      if (matches && matches.length > 0) {
        // Take the last number user/Cypress typed
        value = parseInt(matches[matches.length - 1], 10);
      }
      total += value;
    });

    document.getElementById("ans").textContent = total;
  }