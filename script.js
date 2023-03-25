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
