const inputNumber = document.getElementById("input-number");
const inputPin = document.getElementById("input-pin");


inputNumber.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});
inputPin.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

document.getElementById("input-btn").addEventListener("click", function () {
  if (inputNumber.value === "01111111111" && inputPin.value === "2222") {
    document.getElementById("login-error").classList.add("hidden");
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userNumber", inputNumber.value);
    window.location.assign("./home.html");
  } else {
    document.getElementById("login-error").classList.remove("hidden");
  }
});


window.addEventListener("pageshow", function () {
  document.getElementById("login-error").classList.add("hidden");
  inputNumber.value = "";
  inputPin.value = "";
});