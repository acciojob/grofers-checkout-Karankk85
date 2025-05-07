document.addEventListener("DOMContentLoaded", function () {
  const getSumBtn = document.getElementById("calculateBtn");

  const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(priceCell => {
      const value = parseFloat(priceCell.textContent.trim());
      if (!isNaN(value)) {
        total += value;
      }
    });

    const resultDiv = document.getElementById("ans");
    resultDiv.textContent = total;
  };

  getSumBtn.addEventListener("click", getSum);
});
