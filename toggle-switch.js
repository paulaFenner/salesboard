// LIGHT MODE TOGGLE SWITCH
export { toggleOp };

const toggleSwitchEl = document.getElementById('toggle-switch');

toggleSwitchEl.addEventListener('change', toggleOp);

function toggleOp() {
  document.querySelector('.wrapper').classList.toggle('light-mode');
}
