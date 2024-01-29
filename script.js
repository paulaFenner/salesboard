// PRODUCTS INFO
const productA = {
  emoji: '⭐',
  revenue: 200,
  commision: 50,
};

const productB = {
  emoji: '🔥',
  revenue: 300,
  commision: 75,
};

// DOM elements
const productAEl = document.getElementById('product-a-btn');
const productBEl = document.getElementById('product-b-btn');

const salesCountEl = document.getElementById('sales-count');
const achievementsCountEl = document.getElementById('achievements-count');

const displaySales = document.getElementById('display-sales');
const displayAchievements = document.getElementById('display-achievements');

const totalRevenueEl = document.getElementById('total-revenue');
const totalCommisionEl = document.getElementById('total-commision');

const resetBtn = document.getElementById('reset-btn');

// VARIABLES
const maxDisplayLimit = 20; // Set desired display limit

let sales = [];
let achievements = [];

let totalRevenue = 0;
let totalCommision = 0;

let missingMoneyAchievement = true;

//*** EVENTS LISTENERS ***//
// 1
productAEl.addEventListener('click', function () {
  handleProduct(productA);
});

productBEl.addEventListener('click', function () {
  handleProduct(productB);
});

// 2
resetBtn.addEventListener('click', function () {
  resetAll();
});

//*** FUNCTIONS ***//
// 1
function handleProduct(product) {
  sales.push(product.emoji);
  totalRevenue += product.revenue;
  totalCommision += product.commision;
  renderSales();
  salesCount();
  addAchievements();
  renderAchievements();
  achievementsCount();
  renderRevenue();
  renderCommision();
}

// 2
function renderSales() {
  if (sales.length < maxDisplayLimit) {
    displaySales.innerText = sales.join('');
  } else {
    alert("Go home, you've done your part! Captalists are happy with you.");
  }
}

function salesCount() {
  salesCountEl.textContent = sales.length;
}

function renderRevenue() {
  totalRevenueEl.textContent = ` 
   $ ${totalRevenue} 
   `;
}

function renderCommision() {
  totalCommisionEl.textContent = ` 
   $ ${totalCommision} 
   `;
}

// 3
function addAchievements() {
  if (sales.length === 1) {
    achievements.push('🔔');
  } else if (sales.length === 15) {
    achievements.push('🏆');
  } else if (totalRevenue >= 2500 && missingMoneyAchievement) {
    achievements.push('💰');
    missingMoneyAchievement = false;
  }
}

function renderAchievements() {
  displayAchievements.innerText = achievements.join('');
}

function achievementsCount() {
  achievementsCountEl.textContent = achievements.length;
}

// 4
function resetAll() {
  sales = [];
  achievements = [];

  salesCountEl.innerText = '';
  achievementsCountEl.innerText = '';

  displaySales.innerText = '';
  displayAchievements.innerText = '';

  totalRevenueEl.innerText = '';
  totalCommisionEl.innerText = '';

  totalRevenue = 0;
  totalCommision = 0;
}

// LIGHT MODE TOGGLE SWITCH
const toggleSwitchEl = document.getElementById('toggle-switch');
const mainElement = document.querySelector('main');

toggleSwitchEl.addEventListener('change', function (e) {
  if (e.target.checked) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

function enableLightMode() {
  mainElement.classList.add('light-mode');
}

function enableDarkMode() {
  mainElement.classList.remove('light-mode');
}
