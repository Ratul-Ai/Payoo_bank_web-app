document.getElementById("pay-btn").addEventListener("click", () => {

  const payNumber = getInputValue("pay-number");
  const payPin = getInputValue("pay-pin");
  const payAmount = getInputValue("pay-amount");

  if (getInputValue("pay-bank") === "Select a Bank") {
    alert("Please select a bank");
    return;
  }
  if (payNumber !== accNo || payPin !== pin) {
    alert("Invalid Account Number or Pin");
    return;
  }
  const newAmount = getBalance() - Number(payAmount);
  if (newAmount < 0) {
    alert("Invalid Amount");
    return;
}
  setBalance(newAmount);
  addTransaction("", "Pay Bill · " + getInputValue("pay-bank"), payAmount);

  alert(`${payAmount} taka bill paid. New balance ${newAmount}`);
});
