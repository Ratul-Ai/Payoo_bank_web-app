document.getElementById("transfer-btn").addEventListener("click", function () {

  const transferNumber = getInputValue("transfer-number");
  const transferPin = getInputValue("transfer-pin");
  const transferAmount = getInputValue("transfer-amount");

  if (transferNumber !== accNo) {
    alert("Invalid Account Number");
    return;
  }

  const newAmount = getBalance() - Number(transferAmount);

  if (newAmount < 0) {
    console.log(newAmount);
    alert("Invalid Amount");
    return;
  }
  if (transferPin === pin) {
    setBalance(newAmount);
    addTransaction("", "Transfer ", transferAmount);
    alert(`Amount ${transferAmount} transfer successful. New balance ${newAmount}`);
  } else {
    alert("Invalid Pin");
    return;
  }
});
