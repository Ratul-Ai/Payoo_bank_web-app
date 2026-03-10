document.getElementById("addMoney-btn").addEventListener("click", () => {
  const addMoneyNumber = getInputValue("addMoney-number");
  const addMoneyPin = getInputValue("addMoney-pin");
  const addMoneyAmount = getInputValue("addMoney-amount");

  
  hideAllErrors(["bank", "addMoney-number", "addMoney-amount", "addMoney-pin"]);

  if (getInputValue("bank") === "Select a Bank") {
    showError("bank", "Please select a bank.");
    return;
  }
  if (addMoneyNumber !== accNo) {
    showError("addMoney-number", "Invalid account number.");
    return;
  }
  if (!addMoneyAmount || Number(addMoneyAmount) <= 0) {
    showError("addMoney-amount", "Please enter a valid amount.");
    return;
  }
  if (addMoneyPin !== pin) {
    showError("addMoney-pin", "Incorrect pin.");
    return;
  }

  const newBalance = getBalance() + Number(addMoneyAmount);
  setBalance(newBalance);
  addTransaction("add", "Add Money · " + getInputValue("bank"), addMoneyAmount);
  alert(`$${addMoneyAmount} added successfully. New balance: $${newBalance}`);
});