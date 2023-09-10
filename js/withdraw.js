document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const previousBalanceTotal = getTextElementValueById('balance-total');
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank e eto tk nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', currentWithdrawTotal);


    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', currentBalanceTotal);
})