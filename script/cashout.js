document.getElementById("cashout-btn").addEventListener("click", function () {

  const cashoutNumber = getInputValue("cashout-number");
  const cashoutPin = getInputValue("cashout-pin");
  const cashoutAmount = getInputValue("cashout-amount");
  
  if (cashoutNumber !== accNo) {
    alert("Invalid Agent Number");
    return;
  }

  const newAmount = getBalance() - Number(cashoutAmount);

  if (newAmount < 0) {
    alert("Invalid Amount");
    return;
  }
  if (cashoutPin === pin) {
    setBalance(newAmount);
    addTransaction("", "Cash Out", cashoutAmount);

    alert(`Amount ${cashoutAmount} Withdraw successful.New balance ${newAmount}`);
  } else {
    alert("Invalid Pin");
    return;
  }
});
