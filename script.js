const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  // Sum all the prices (skipping header if needed)
  for (let i = 1; i < prices.length; i++) {
    total += parseFloat(prices[i].textContent);
  }

  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.colSpan = "2";
  newCell.style.fontWeight = "bold";
  newCell.textContent = `Total Price: ₹${total}`;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
