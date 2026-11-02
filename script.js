// Membuka halaman utama
function enterWorld() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("home").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mengatur menu
function openMenu(menu) {
  if (menu === "memory") {
    document.getElementById("home").style.display = "none";
    document.getElementById("memory").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const messages = {
    home: "Welcome to Ceishaa's Little Home! 🏡",
    game: "Let's play together soon! 🎮",
    letter: "A little secret is waiting here! 💌",
    surprise: "Something special is coming! 🎂"
  };

  alert(messages[menu]);
}

// Kembali ke halaman utama
function backHome() {
  document.getElementById("memory").style.display = "none";
  document.getElementById("home").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
