import { productA, productB } from './data.js';
import { toggleOp } from './toggle-switch.js';

// State Variables
let sales = [];
let achievements = [];
let revenue = 0;
let commission = 0;
let missingMoneyAchievement = true;

// DOM Elements
const productBtnEls = document.querySelectorAll('.product');
const resetBtnEl = document.getElementById('reset-btn');

// Event Listeners
productBtnEls.forEach((productBtnEl) => {
  productBtnEl.addEventListener('click', handleSalesTransactions);
});

resetBtnEl.addEventListener('click', resetSales);

// Utility Functions
function getProductById(id) {
  if (id === 'prod-a') {
    return productA;
  } else if (id === 'prod-b') {
    return productB;
  }
  return null;
}

// Main Functions
function handleSalesTransactions(e) {
  appendLiveSales(e);
  limitOfSales();
  appendLiveAchievements();
  updateRevenueAndCommission();
}

function appendLiveSales(e) {
  const product = getProductById(e.target.id);
  if (product) {
    sales.push(product.emoji);
    revenue += product.revenue;
    commission += product.commission;
    updateSalesDisplayAndCount();
  }
}

function appendLiveAchievements() {
  if (sales.length === 1) {
    achievements.push('🔔');
  } else if (sales.length === 15) {
    achievements.push('🏆');
  } else if (revenue >= 2500 && missingMoneyAchievement) {
    achievements.push('💰');
    missingMoneyAchievement = false;
  }
  updateAchievemnetsDisplayAndCount();
}

function resetSales() {
  sales = [];
  achievements = [];
  revenue = 0;
  commission = 0;
  missingMoneyAchievement = true;
  updateSalesDisplayAndCount();
  updateAchievemnetsDisplayAndCount();
  updateRevenueAndCommission();
}

function limitOfSales() {
  const maxSales = 15;
  if (sales.length > maxSales) {
    alert(`You have reached the maximum limit of ${maxSales} sales.`);
  }
}

// Update Functions
function updateSalesDisplayAndCount() {
  const displaySalesEl = document.getElementById('display-sales');
  const salesCountEl = document.getElementById('sales-count');
  displaySalesEl.textContent = sales.join('');
  salesCountEl.textContent = sales.length;
}

function updateAchievemnetsDisplayAndCount() {
  const displayAchievementsEl = document.getElementById('display-achievements');
  const achievementsCountEl = document.getElementById('achievements-count');
  displayAchievementsEl.textContent = achievements.join('');
  achievementsCountEl.textContent = achievements.length;
}

function updateRevenueAndCommission() {
  const revenueEl = document.getElementById('total-revenue');
  const commissionEl = document.getElementById('total-commission');

  revenueEl.textContent = `$${revenue}`;
  commissionEl.textContent = `$${commission}`;
}
