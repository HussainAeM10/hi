const form = document.getElementById("calcForm");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productWeight = document.getElementById("product-weight");
const weightUnit = document.getElementById("weight-unit");
const deductWeight = document.getElementById("deduct-weight");
const deductUnit = document.getElementById("deduct-unit");
const deductedWeightOutput = document.getElementById("deducted-weight-output");
const deductedPriceOutput = document.getElementById("deducted-price-output");
const totalPriceOutput = document.getElementById("total-price-output");
const remainingWeightOutput = document.getElementById("remaining-weight-output");
const results = document.getElementById("results");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pricePerGram = calculatePricePerGram(productPrice.value, weightUnit.value);
  const deductedWeight = convertWeightToGrams(deductWeight.value, deductUnit.value);
  const remainingWeight = calculateRemainingWeight(productWeight.value, deductWeight.value, deductUnit.value);
  const totalDeductedPrice = calculateDeductedPrice(deductedWeight, pricePerGram);
  const totalPrice = calculateTotalPrice(remainingWeight, pricePerGram);

  deductedWeightOutput.textContent = deductedWeight;
  deductedPriceOutput.textContent = totalDeductedPrice.toFixed(2);
  totalPriceOutput.textContent = totalPrice.toFixed(2);
  remainingWeightOutput.textContent = remainingWeight;

  results.classList.remove("hidden");
});

function calculatePricePerGram(price, unit) {
  const pricePerKg = unit === "kg" ? price : price * 1000;
  return pricePerKg / 1000;
}

function convertWeightToGrams(weight, unit) {
  return unit === "kg" ? weight * 1000 : weight;
}

function calculateRemainingWeight(weight, deductWeight, deductUnit) {
  const remainingWeightInGrams = convertWeightToGrams(weight, weightUnit.value) - convertWeightToGrams(deductWeight, deductUnit);
  return remainingWeightInGrams.toFixed(2);
}

function calculateDeductedPrice(deductedWeight, pricePerGram) {
  return deductedWeight * pricePerGram;
}

function calculateTotalPrice(remainingWeight, pricePerGram) {
  return remainingWeight * pricePerGram;
}


// Select the results container element
const resultsContainer = document.getElementById("results");

// Add a click event listener to the calculate button
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Calculate the results here...

  // Show the results container element
  resultsContainer.classList.remove("hidden");

  // Scroll to the results container element
  resultsContainer.scrollIntoView({ behavior: "smooth" });
});




var addBtn = document.querySelector(".plus-button");
var modal = document.querySelector(".modal");
var closeModalBtn = document.querySelector(".close-button");
var profitContainer = document.querySelector(".profit-container-c");
var componentPriceContainer = document.querySelector(".price-container-c");

addBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});




const ProfitBtn = document.createElement('button');
ProfitBtn.id = 'Profit-btn';
ProfitBtn.textContent = 'Profit ?';
addContainerBtn.parentNode.insertBefore(ProfitBtn, addContainerBtn.nextSibling);

ProfitBtn.addEventListener('click', () => {
  const newContainer = document.createElement('div');
  newContainer.classList.add('container');
  newContainer.innerHTML = `
    <h1>Calculate Profit</h1>
    <form>
      <div class="input-group">
        <label for="dessert-name">Dessert Name:</label>
        <input type="text" id="dessert-name" name="dessert-name" required>
      </div>
      <div class="input-group">
        <label for="dessert-price">Dessert Price ($):</label>
        <input type="number" id="dessert-price" name="dessert-price" step="0.01" min="0.01" required>
      </div>
      <div class="input-group">
        <label for="cost">Cost ($):</label>
        <input type="number" id="cost" name="cost" step="0.01" min="0.01" required>
      </div>
      <div class="input-group">
        <label for="number-of-sales">Number of Sales:</label>
        <input type="number" id="number-of-sales" name="number-of-sales" min="1" required>
      </div>
      <button type="submit">Calculate Profit</button>
    </form>
    <div class="result"></div>
    <br>
    <div class="disabled-message">This button calculates the profit from sales of a dessert. Stay tuned for more features!</div>
  `;


  
  container.parentNode.insertBefore(newContainer, container.nextSibling);
  ProfitBtn.disabled = true;

  newContainer.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 100 });

  const form = newContainer.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dessertName = form.querySelector('#dessert-name').value;
    const dessertPrice = Number(form.querySelector('#dessert-price').value);
    const cost = Number(form.querySelector('#cost').value);
    const numberOfSales = Number(form.querySelector('#number-of-sales').value);
    const revenue = dessertPrice * numberOfSales;
    const profit = revenue - cost;
    const resultDiv = newContainer.querySelector('.result');
    resultDiv.innerHTML = `
      <p>Dessert Name: ${dessertName}</p>
      <p>Revenue: $${revenue.toFixed(2)}</p>
      <p>Cost: $${cost.toFixed(2)}</p>
      <p>Profit: $${profit.toFixed(2)}</p>
    `;
  });
});




