document.getElementById("transfer-btn").addEventListener("click", function () {
  const transferNumber = getInputValue("transfer-number");
  const transferPin = getInputValue("transfer-pin");
  const transferAmount = getInputValue("transfer-amount");


  hideAllErrors(["transfer-number", "transfer-amount", "transfer-pin"]);

  if (transferNumber !== accNo) {
    showError("transfer-number", "Invalid account number.");
    return;
  }
  if (!transferAmount || Number(transferAmount) <= 0) {
    showError("transfer-amount", "Please enter a valid amount.");
    return;
  }
  if (getBalance() - Number(transferAmount) < 0) {
    showError("transfer-amount", "Insufficient balance.");
    return;
  }
  if (transferPin !== pin) {
    showError("transfer-pin", "Incorrect pin.");
    return;
  }

  const newAmount = getBalance() - Number(transferAmount);
  setBalance(newAmount);
  addTransaction("", "Transfer", transferAmount);
  alert(`$${transferAmount} transferred successfully. New balance: $${newAmount}`);
});