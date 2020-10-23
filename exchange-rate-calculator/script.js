const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');

const rateDisplay = document.getElementById('rate');

function calculate() {
  const currencyOneValue = currencyOne.value;
  const currencyTwoValue = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currencyTwoValue]
      rateDisplay.innerText = `1 ${currencyOneValue} = ${rate} ${currencyTwoValue}`
      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

calculate()