const accNo = "11111111111";
const pin = "2222";

if (!sessionStorage.getItem("isLoggedIn")) {
  window.location.replace("./index.html");
}

// Fill logged-in user's number in the hamburger menu
document.getElementById("menu-user-number").textContent =
  sessionStorage.getItem("userNumber") || "Unknown";

document.querySelectorAll(".only-digit").forEach((input) => {
  input.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
});

document.querySelectorAll(".amount-digit").forEach((input) => {
  input.addEventListener("input", function () {
    this.value = this.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1")
      .replace(/(\.\d{2})\d+/g, "$1");
  });
});

// Get value of an input by ID
function getInputValue(id) {
  return document.getElementById(id).value;
}
function empty(id) {
  document.getElementById(id).value = "";
}
// Get current balance from DOM
function getBalance() {
  return Number(document.getElementById("current-amount").innerText);
}

// Update balance in DOM
function setBalance(value) {
  document.getElementById("current-amount").innerText = value.toFixed(2);
}

// Show one section, hide all others
function show(id) {
  document
    .querySelectorAll(".display")
    .forEach((e) => e.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  if (id === "transaction-id") {
    document.getElementById("transaction-title").textContent =
      "Transaction History";
  }
}

// Highlight the active service button, reset all others
function highlight(id) {
  document
    .querySelectorAll(".active-btn")
    .forEach((btn) => btn.classList.add("btn-soft"));
  document.getElementById(id).classList.remove("btn-soft");
}

//  hide all service sections, show transaction history, reset button highlights
function goHome() {
  ["add-money", "cash-out", "transfer-money", "coupon", "pay-bill"].forEach(
    (sectionId) => document.getElementById(sectionId).classList.add("hidden"),
  );
  document.getElementById("transaction-id").classList.remove("hidden");
  document.getElementById("transaction-title").textContent = "Latest Payment";
  ["add", "out", "transfer", "bonus", "bill", "transaction"].forEach((btnId) =>
    document.getElementById(btnId).classList.add("btn-soft"),
  );
}

// Show inline error
function showError(id, message) {
  const el = document.getElementById(id + "-error");
  el.textContent = message;
  el.classList.remove("hidden");
}

// Hide inline error
function hideError(id) {
  document.getElementById(id + "-error").classList.add("hidden");
}

// Hide multiple error
function hideAllErrors(ids) {
  ids.forEach((id) => hideError(id));
}

function logout() {
  sessionStorage.clear();
  window.location.replace("./index.html");
}
