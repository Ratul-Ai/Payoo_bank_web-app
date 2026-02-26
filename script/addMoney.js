document.getElementById("addMoney-btn").addEventListener("click", () => {

  const addMoneyNumber = getInputValue("addMoney-number");
  const addMoneyPin = getInputValue("addMoney-pin");
  const addMoneyAmount = getInputValue("addMoney-amount");

  if (getInputValue("bank") === "Select a Bank") {
    alert("Please select a bank");
    return;
  }
  if (addMoneyNumber !== accNo || addMoneyPin !== pin) {
    alert("Invalid Account Number or Pin");
    return;
  }
  if (addMoneyAmount <= 0) {
    alert("Invalid amount");
    return;
  }
  const newBalance = getBalance() + Number(addMoneyAmount);
  setBalance(newBalance);
  console.log('hello');
  addTransaction("add", "Add Money · " + getInputValue("bank"), addMoneyAmount);
  console.log('hello2');

  alert(addMoneyAmount + " added in your account. New balance: " + newBalance);
});
