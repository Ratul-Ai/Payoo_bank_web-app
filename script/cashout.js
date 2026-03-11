document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getInputValue("cashout-number");
  const cashoutPin = getInputValue("cashout-pin");
  const cashoutAmount = getInputValue("cashout-amount");

  hideAllErrors(["cashout-number", "cashout-amount", "cashout-pin"]);

  if (cashoutNumber !== accNo) {
    showError("cashout-number", "Invalid agent number.");
    return;
  }
  if (!cashoutAmount || Number(cashoutAmount) <= 0) {
    showError("cashout-amount", "Please enter a valid amount.");
    return;
  }
  if (getBalance() - Number(cashoutAmount) < 0) {
    showError("cashout-amount", "Insufficient balance.");
    return;
  }
  if (cashoutPin !== pin) {
    showError("cashout-pin", "Incorrect pin.");
    return;
  }

  const newAmount = getBalance() - Number(cashoutAmount);
  setBalance(newAmount);
  addTransaction("", "Cash Out", cashoutAmount);
  alert(
    `$${Number(cashoutAmount).toFixed(2)} withdrawn successfully. New balance: $${newAmount.toFixed(2)}`,
  );
  empty("cashout-pin");
  empty("cashout-amount");
});
