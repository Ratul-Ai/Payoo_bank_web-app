let use = true;

document.getElementById("coupon-btn").addEventListener("click", () => {
  const couponValue = getInputValue("coupon-id");

  hideAllErrors(["coupon-id"]);

  if (!couponValue.trim()) {
    showError("coupon-id", "Please enter a coupon code.");
    return;
  }
  if (couponValue !== "s-1000") {
    showError("coupon-id", "Invalid coupon code.");
    return;
  }
  if (!use) {
    showError("coupon-id", "This coupon has already been used.");
    return;
  }

  setBalance(getBalance() + 1000);
  addTransaction("add", "Bonus Coupon · s-1000", 1000);
  use = false;
  alert(
    `Bonus added! $1000.00 credited. New balance: $${getBalance().toFixed(2)}`,
  );
  empty("coupon-id");
});
