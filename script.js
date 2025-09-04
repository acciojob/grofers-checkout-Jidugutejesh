    function calculateTotal() {
      let prices = document.querySelectorAll(".price");
      let total = 0;

      prices.forEach(cell => {
        let val = parseFloat(cell.textContent) || 0;
        total += val;
      });

      document.getElementById("ans").textContent = total;
    }