const inputOne = document.getElementById("input1");
const inputTwo = document.getElementById("input2");
const inputThree = document.getElementById("input3");
const button = document.getElementById("button");
const output = document.getElementById("output");
const small1 = document.getElementById("small1");
const small2 = document.getElementById("small2");
const small3 = document.getElementById("small3");

//function for calculating stocks
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
  //message + condition to check users loss is more than or == 50%
  let message = "";
  if (percentageGainOrLoss < 0 || percentageGainOrLoss <= -50) {
    document.body.style.backgroundColor = "#FF5D6C";
    message = "Ohh! You lose money. 😞";
    output.classList.add("danger"); //when lose money
    output.classList.remove("success");
  } else if (percentageGainOrLoss >= 0) {
    document.body.style.backgroundColor = "#acffad";
    message = "Awwsome! You gain money. 😃";
    output.classList.add("success"); // When gain money
  }
  if (buyPrice > 0 && stockQty > 0 && currentPrice > 0) {
    //if all fileds are filled and more than 0 then show output
    output.innerHTML = `<hr class="hr-tag" />
    <h2>${message}</h2>
  <ul class="output-ul">
  <li>Total Investment is : ${investment.toFixed(2)}</li>
  <li>Total ${
    amountReturned >= investment ? "Profit" : "Loss"
  } is : ${totalGainOrLoss.toFixed(2)}</li>
  <li>Total Amount : ${amountReturned.toFixed(2)}</li>
  <li>Total ${
    amountReturned >= investment ? "Gain" : "Lose"
  } in % : ${percentageGainOrLoss.toFixed(2)}%</li>
  </ul>
`;
  }

  //condition for showing error in <small> when fields are empty or = to 0
  if (buyPrice === "" || buyPrice == 0) {
    //
    small1.innerText = "Please enter buy price";
    small2.innerText = "";
    document.body.style.backgroundColor = "#e6e6e6";
  } else if (stockQty === "" || stockQty == 0) {
    //
    small2.innerText = "Must enter stock quantity";
    small1.innerText = "";
    document.body.style.backgroundColor = "#e6e6e6";
  } else if (currentPrice === "" || currentPrice == 0) {
    //
    small3.innerText = "Must enter current price";
    small1.innerText = "";
    small2.innerText = "";
    document.body.style.backgroundColor = "#e6e6e6";
  } else {
    small3.innerText = "";
    small2.innerText = "";
    small1.innerText = "";
  }
}

//Events
button.addEventListener("click", stockHandler);
