let score = 501;
const elScore = document.getElementById("score");
const elThrow = document.getElementById("throw");
const elMsg = document.getElementById("msg");

document.body.classList.toggle('theme-light')
document.getElementById("ok").addEventListener("click", () => {
  const val = parseInt(elThrow.value, 10);
  if (isNaN(val) || val < 0 || val > 180) { elMsg.textContent = "Ungültiger Wurf."; return; }

  const next = score - val;
  if (next < 0 || next === 1) { // Bust-Regel (vereinfachte Double-Out-Variante)
    elMsg.textContent = "Bust! Score bleibt.";
  } else if (next === 0) {
    elMsg.textContent = "Checkout! 🎯";
    score = 0;
  } else {
    score = next;
    elMsg.textContent = "";
  }
  elScore.textContent = score;
  elThrow.value = "";
  elThrow.focus();
  
});
