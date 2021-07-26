const inputOne = document.getElementById("input1");
const inputTwo = document.getElementById("input2");
const inputThree = document.getElementById("input3");
const button = document.getElementById("button");
const output = document.getElementById("output");
const small1 = document.getElementById("small1");
const small2 = document.getElementById("small2");
const small3 = document.getElementById("small3");

//function
function stockHandler() {
  const buyPrice = inputOne.value;
  const stockQty = inputTwo.value;
  const currentPrice = inputThree.value;

  const investment = buyPrice * stockQty;
  // console.log(investment.toFixed(2));
  const amountReturned = currentPrice * stockQty;
  // console.log(amountReturned.toFixed(2));
  const totalGainOrLoss = amountReturned - investment;
  // console.log(totalGainOrLoss.toFixed(2));
  const percentageGainOrLoss = ((currentPrice - buyPrice) / buyPrice) * 100;
  // console.log(percentageGainOrLoss.toFixed(2) + "%");
  let porl = ""; //profit or loss
  let gorl = ""; //gain or lose
  if (totalGainOrLoss >= investment) {
    porl = "Profit";
    gorl = "Gain";
  } else {
    porl = "Loss";
    gorl = "Lose";
  }
  // document.body.style.backgroundColor = "yellow";
  output.innerHTML = `
           <ul>
           <li>Your total Investment is : ${investment.toFixed(2)}</li>
           <li>Your total ${porl} is : ${totalGainOrLoss.toFixed(2)}</li>
           <li>Total Amount : ${amountReturned.toFixed(2)}</li>
           <li>Total ${gorl} in percentage : ${percentageGainOrLoss.toFixed(
    2
  )}%</li>
           </ul>
  `;

  if (buyPrice === "") {
    small1.innerText = "Please enter buy price";
    small2.innerText = "";
  } else if (stockQty === "") {
    small2.innerText = "Must enter stock quantity";
    small1.innerText = "";
  } else if (currentPrice === "") {
    small3.innerText = "Must enter current price";
    small1.innerText = "";
    small2.innerText = "";
  } else {
    small3.innerText = "";
    small2.innerText = "";
    small1.innerText = "";
  }
}

//Events
button.addEventListener("click", stockHandler);
