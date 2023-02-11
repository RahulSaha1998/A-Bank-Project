//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step -2 : get the deposit amount from the deposit input field
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    //set the value string to number
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3 : get the current deposit total
    //for non input area user innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    //set the value string to number
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4 : add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;


    //step-4 : get balance current total
    const balanceTotalElement =  document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    //set the value string to number
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6 : calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;







    //step-7: clear the amount field
    depositField.value = '';


})