const accNo="11111111111";
const pin='2222';

document.querySelectorAll('.only-digit').forEach(input => {
    input.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});
});


function getInputValue(id){
    return document.getElementById(id).value;
}

function getBalance(){
   return Number( document.getElementById("current-amount").innerText);
}
function setBalance(value){
    document.getElementById("current-amount").innerText=value;
}

function show(id){
    document.getElementById('add-money').classList.add('hidden');
    document.getElementById('cash-out').classList.add('hidden');
    document.getElementById('transfer-money').classList.add('hidden');
    document.getElementById('coupon').classList.add('hidden');
    document.getElementById('pay-bill').classList.add('hidden');
    document.getElementById('transaction-id').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}

function highlight(id){
    
    document.getElementById('add').classList.add('btn-soft');
    document.getElementById('out').classList.add('btn-soft');
    document.getElementById('transfer').classList.add('btn-soft');
    document.getElementById('bonus').classList.add('btn-soft');
    document.getElementById('bill').classList.add('btn-soft');
    document.getElementById('transaction').classList.add('btn-soft');
    document.getElementById(id).classList.remove('btn-soft');

}

