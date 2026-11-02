// Membuka halaman utama
function enterWorld() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("home").style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Fungsi sementara untuk menu
function openMenu(menu) {
  const messages = {
    home: "Welcome to Ceishaa's Little Home! 🏡",
    memory: "Memory Corner is coming soon! 📸",
    game: "Let's play together soon! 🎮",
    letter: "A little secret is waiting here! 💌",
    surprise: "Something special is coming! 🎂"
  };

  alert(messages[menu]);
}
