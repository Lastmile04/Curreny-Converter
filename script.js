// Gather the DOM elements
const themeCheckbox = document.querySelector('.theme-switch__checkbox');
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.querySelector('button');
const result = document.getElementById('result');
const form = document.getElementById('converter-form');



// API for JSON
const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';
const CURRENCY_LIST = ` ${BASE_URL}.min.json`;


form.addEventListener('submit', function(e){
    e.preventDefault();

    // Access values using existing DOM element variables
    const amount = amountInput.value;
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    const inputData = {
        Amount: amount,
        From: fromCurrencyValue,
        To: toCurrencyValue,
    }
    console.log(inputData);

  if (amount && fromCurrencyValue && toCurrencyValue) {
        // Call your conversion function
        convertCurrency(inputData);
    } else {
        result.textContent = 'Please fill in all fields';
    }


})

async function fetchCurrencyList(){
    try {
        const response = await fetch(CURRENCY_LIST);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data);
        displaySelectOptions(data);
    } catch (error) {
        console.error(error.message);
    }
    // will add a fallback url eventually after learning where to actually put it 

}

function displaySelectOptions(data){
    fromCurrency.innerHTML = '';
    toCurrency.innerHTML = '';

    Object.entries(data).forEach(([code, name]) =>{
        fromCurrency.innerHTML+= `
        <option value = '${code}'>${code.toUpperCase()}</option>
        `;

        toCurrency.innerHTML +=`
        <option value = '${code}'>${code.toUpperCase()}</option>
        `;

    })
}

async function convertCurrency(data) {
    try {
        const response = await fetch(`${BASE_URL}/${data.From}.json`)
        const rates = await response.json();
        console.log(rates);

        displayResult(data, rates);
    } catch (error) {
        console.error(error.message);
    }
}

function displayResult(data, rates){
    result.innerHTML = '';
    const rate = rates[data.From][data.To];
    const converted = (data.Amount * rate).toFixed(2)
    result.innerHTML = `
    <p>${data.Amount} ${data.From.toUpperCase()} = ${converted} ${data.To.toUpperCase()}</p>`;
}


// Add:
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeCheckbox.checked = savedTheme === 'light';
});

// Change this listener to use themeCheckbox:
// (no need to re-declare themeSwitch)
themeCheckbox.addEventListener('change', () => {
  const newTheme = themeCheckbox.checked ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});


fetchCurrencyList()



