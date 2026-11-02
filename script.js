// Membuka halaman utama
function enterWorld() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("home").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mengatur menu
function openMenu(menu) {
  const pages = ["memory", "game", "letter", "surprise"];

  if (pages.includes(menu)) {
    document.getElementById("home").style.display = "none";

    pages.forEach(function(page) {
      document.getElementById(page).style.display = "none";
    });

    document.getElementById(menu).style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  alert("Welcome to Ceishaa's Little Home! 🏡");
}

// Kembali ke halaman utama
function backHome() {
  ["memory", "game", "letter", "surprise"].forEach(function(page) {
    document.getElementById(page).style.display = "none";
  });

  document.getElementById("home").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Kejutan kotak hadiah
function openGift(number) {
  const gifts = [
    "🌷 You are a beautiful little sunshine!",
    "💗 You deserve all the happiness in the world!",
    "🎀 Never stop being your lovely self, Ceishaa!"
  ];

  document.getElementById("gift-result").textContent = gifts[number];
}

// Birthday Surprise
function showSurprise() {
  document.getElementById("surprise-result").textContent =
    "🎉 SURPRISE! Happy Birthday, Ceishaa! 🎉 May all your little wishes come true! 💗";
}
