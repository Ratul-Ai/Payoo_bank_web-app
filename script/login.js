const inputNumber = document.getElementById("input-number");
const inputPin = document.getElementById("input-pin");


inputNumber.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});
inputPin.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

window.addEventListener("pageshow", function () {
  document.getElementById("login-error").classList.add("hidden");

  if (sessionStorage.getItem("isLoggedIn")) {
    window.location.replace("./home.html");
  }
});

document.getElementById("input-btn").addEventListener("click", function () {
  if (inputNumber.value === "01111111111" && inputPin.value === "2222") {
    document.getElementById("login-error").classList.add("hidden");
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userNumber", inputNumber.value);
    window.location.replace("./home.html");
  } else {
    document.getElementById("login-error").classList.remove("hidden");
  }
});