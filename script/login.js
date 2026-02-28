const inputNumber = document.getElementById("input-number");
const inputPin = document.getElementById("input-pin");

inputNumber.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});
inputPin.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

document.getElementById("input-btn").addEventListener("click", function () {
    
    if(inputNumber.value==='01111111111' && inputPin.value==='2222'){
        window.location.assign('home.html');
        alert('Log in successful');
    }
    else{
        alert('Incorrect number or password!');
        return;
    }
});
