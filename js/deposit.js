document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    
    const previousDepositTotal = getTextElementValueById('deposit-total');

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', currentDepositTotal);


    const previousBalanceTotal = getTextElementValueById('balance-total');

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', currentBalanceTotal);
})