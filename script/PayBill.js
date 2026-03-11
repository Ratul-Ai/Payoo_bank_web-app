document.getElementById("pay-btn").addEventListener("click", () => {
  const payNumber = getInputValue("pay-number");
  const payPin = getInputValue("pay-pin");
  const payAmount = getInputValue("pay-amount");

  hideAllErrors(["pay-bank", "pay-number", "pay-amount", "pay-pin"]);

  if (getInputValue("pay-bank") === "Select a Bank") {
    showError("pay-bank", "Please select a bank.");
    return;
  }
  if (payNumber !== accNo) {
    showError("pay-number", "Invalid account number.");
    return;
  }
  if (!payAmount || Number(payAmount) <= 0) {
    showError("pay-amount", "Please enter a valid amount.");
    return;
  }
  if (getBalance() - Number(payAmount) < 0) {
    showError("pay-amount", "Insufficient balance.");
    return;
  }
  if (payPin !== pin) {
    showError("pay-pin", "Incorrect pin.");
    return;
  }

  const newAmount = getBalance() - Number(payAmount);
  setBalance(newAmount);
  addTransaction("", "Pay Bill · " + getInputValue("pay-bank"), payAmount);
  alert(
    `$${Number(payAmount).toFixed(2)} bill paid successfully. New balance: $${newAmount.toFixed(2)}`,
  );
  empty("pay-pin");
  empty("pay-amount");
});
