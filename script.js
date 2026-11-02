// Membuka halaman utama
function enterWorld() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("home").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mengatur menu
function openMenu(menu) {
  if (menu === "memory" || menu === "game") {
    document.getElementById("home").style.display = "none";
    document.getElementById("memory").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById(menu).style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const messages = {
    home: "Welcome to Ceishaa's Little Home! 🏡",
    letter: "A little secret is waiting here! 💌",
    surprise: "Something special is coming! 🎂"
  };

  alert(messages[menu]);
}

// Kembali ke halaman utama
function backHome() {
  document.getElementById("memory").style.display = "none";
  document.getElementById("game").style.display = "none";
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
