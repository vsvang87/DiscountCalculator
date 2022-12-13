const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");

//event listener
calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //grabbing all selectors
  const fullAmount = document.getElementById("amount").value;
  const discountValue = document.getElementById("discount-percentage").value;
  const finalPay = document.getElementById("final-pay");
  const discountAmount = document.getElementById("discount-amount");
  const errorMessage = document.getElementById("error");

  //check for number
  const pattern = /^[0-9.]*$/g;

  //error message appear if input is not a number
  if (!fullAmount.match(pattern)) {
    errorMessage.classList.add("error");
  }
  if (fullAmount.match(pattern)) {
    errorMessage.classList.remove("error");
    discountAmount.innerHTML = "0";
    finalPay.innerHTML = "0";
  }

  //calculate
  const discountAmt = fullAmount * discountValue;
  const fulldisAmt = discountAmt / 100;
  discountAmount.innerHTML = "$ " + fulldisAmt;

  const finalAmt = fullAmount - fulldisAmt;
  finalPay.innerHTML = "$ " + finalAmt;
});

//reset
resetBtn.addEventListener("click", () => {
  window.location.reload();
});
