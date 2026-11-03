
function enterWorld() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("home").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMenu(menu) {
  if (menu === "home") {
    backHome();
    return;
  }

  const pages = ["memory", "game", "letter", "surprise"];

  pages.forEach(function(page) {
    document.getElementById(page).style.display = "none";
  });

  document.getElementById("home").style.display = "none";
  document.getElementById(menu).style.display = "block";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backHome() {
  const pages = ["memory", "game", "letter", "surprise"];

  pages.forEach(function(page) {
    document.getElementById(page).style.display = "none";
  });

  document.getElementById("home").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// MYSTERY GIFT GAME

function openGift(number) {
  const gifts = [
    "🌷 A little reminder: you are someone's sunshine. Keep shining, Ceishaa!",
    "💗 You deserve happiness, beautiful memories, and all the good things in life!",
    "🎀 Your biggest gift is being YOU. Never stop being your lovely self!"
  ];

  const result = document.getElementById("gift-result");

  result.classList.remove("revealed");

  result.textContent = "✨ Opening your mystery gift...";

  setTimeout(function() {
    result.textContent = gifts[number];
    result.classList.add("revealed");
  }, 600);
}

// BIRTHDAY SURPRISE

function showSurprise() {
  document.getElementById("surprise-intro").style.display = "none";

  const reveal = document.getElementById("birthday-reveal");
  reveal.classList.add("show");

  const area = document.getElementById("confetti-area");
  const decorations = ["🎀", "💗", "✨", "🎉", "🌸"];

  area.innerHTML = "";

  for (let i = 0; i < 24; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";
    piece.textContent = decorations[i % decorations.length];
    piece.style.left = Math.random() * 95 + "%";
    piece.style.animationDelay = Math.random() * 1.5 + "s";

    area.appendChild(piece);
  }
}
