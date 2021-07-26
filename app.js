const inputOne = document.getElementById("input1");
const inputTwo = document.getElementById("input2");
const inputThree = document.getElementById("input3");
const button = document.getElementById("button");

//function
function stockHandler() {
  const buyPrice = inputOne.value;
  const stockQty = inputTwo.value;
  const currentPrice = inputThree.value;
  const investment = buyPrice * stockQty;
  console.log(investment.toFixed(2));
  const amountReturned = currentPrice * stockQty;
  console.log(amountReturned.toFixed(2));
  const totalGain = amountReturned - investment;
  console.log(totalGain.toFixed(2));
}

//Events
button.addEventListener("click", stockHandler);
