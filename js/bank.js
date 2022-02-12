function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
};
function getTotal(inputId, newMoney) {
    const totalField = document.getElementById(inputId);
    const previousFieldValue = parseFloat(totalField.innerText);
    const total = previousFieldValue + newMoney;
    totalField.innerText = total;
};
function getCurrentBalance() {
    const updateField = document.getElementById('balance-amount');
    const previousUpdateFieldValue = parseFloat(updateField.innerText);
    return previousUpdateFieldValue;
}
function getUpdateTotal(newMoney, addId) {
    const updateField = document.getElementById('balance-amount');
    const previousUpdateFieldValue = getCurrentBalance();
    if (addId == true) {
        const total = previousUpdateFieldValue + newMoney;
        updateField.innerText = total;
    }
    if (addId == false) {
        const total = previousUpdateFieldValue - newMoney;
        updateField.innerText = total;
    }
};
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositMoney = getInput('deposit-input');
    if (isNaN(newDepositMoney)) {
        alert('Please enter a number');
    }
    if (newDepositMoney > 0) {
        getTotal('deposit-amount', newDepositMoney);
        getUpdateTotal(newDepositMoney, true);
    }

});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawMoney = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (isNaN(newWithdrawMoney)) {
        alert('Please enter a number');
    }
    if (newWithdrawMoney > 0 && newWithdrawMoney < currentBalance) {
        getTotal('withdraw-amount', newWithdrawMoney);
        getUpdateTotal(newWithdrawMoney, false);
    }

});