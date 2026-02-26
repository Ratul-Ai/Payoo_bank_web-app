
let use=true;
document.getElementById('coupon-btn').addEventListener('click',()=>{
    if(getInputValue('coupon-id')!=='s-1000'){
        alert('Invalid Coupon');
        return;
    }
    if(!use){
      alert('This coupon has already been used');
      return;
    };
    setBalance(getBalance()+1000);
    addTransaction("add", "Bonus Coupon · s-1000", 1000);
    use=false;
  alert(`You got 1000 taka bonus. New account Balance ${getBalance()}`);
})