/*start mamory-cost */
// mamory-button-1
const mamoryButton1 = document.getElementById('mamory-button-1').addEventListener('click', function(){
    const mamoryCost = document.getElementById('mamory-cost');
    mamoryCost.innerText = '0';
    updateTotal()
});
// mamory-button-1
const mamoryButton2 = document.getElementById('mamory-button-2').addEventListener('click', function(){
    const mamoryCost = document.getElementById('mamory-cost');
    mamoryCost.innerText = '100';
    updateTotal()
});
/*end mamory-cost 
*/
// -------------------------------
/*
start storage-cost */
// storage-button-1
const storageButton1 = document.getElementById('storage-button-1').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '0';
    updateTotal()
});
// storage-button-2
const storageButton2 = document.getElementById('storage-button-2').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '100';

    updateTotal()
});
// storage-button-3
const storageButton3 = document.getElementById('storage-button-3').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '150';
    updateTotal()
});
/*end storage-cost 
*/
// -------------------------------
/*
start delivery-cost */
// delivery-button-1
const deliveryButton1 = document.getElementById('delivery-charge-button-1').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = '0';
    updateTotal()
});
// delivery-button-2
const deliveryButton2 = document.getElementById('delivery-charge-button-2').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = '10';
    updateTotal()
});
/*end delivery-cost */

function updateTotal() {
   
}



/* function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
} */