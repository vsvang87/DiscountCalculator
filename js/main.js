const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");

//event listener
calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //grabbing all selectors
  const fullAmount = document.getElementById("amount").value;
  const discountValue = document.getElementById("discount-percentage").value;
  const errorMessage = document.getElementById("error");
  const savedAmount = document.getElementById("save-amount");
  const finalPay = document.getElementById("final-pay");

  //check for number
  const pattern = /^[0-9.]*$/g;

  //error message appear if input is not a number
  if (!fullAmount.match(pattern)) {
    errorMessage.classList.add("error");
  }
  if (fullAmount.match(pattern)) {
    errorMessage.classList.remove("error");
    savedAmount.innerHTML = "0";
    finalPay.innerHTML = "0";
  }

  //calculate
  const discountAmt = fullAmount * discountValue;
  const fulldisAmt = discountAmt / 100;
  //to round it off to 2 decimal places
  const finalSaveAmt = fulldisAmt.toFixed(2);
  savedAmount.value = "$ " + finalSaveAmt;

  const finalAmt = fullAmount - fulldisAmt;
  //to round it off to 2 decimal places
  const finalResult = finalAmt.toFixed(2);
  finalPay.value = "$ " + finalResult;
});

//reset
resetBtn.addEventListener("click", () => {
  window.location.reload();
});
