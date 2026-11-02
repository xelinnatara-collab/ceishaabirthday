function enterWorld() {
  const title = document.querySelector("h1");
  const subtitle = document.querySelector(".subtitle");
  const button = document.querySelector("button");
  const bunny = document.querySelector(".bunny");

  title.innerHTML = "Yayyy! You're Here! 💗";
  subtitle.innerHTML =
    "Welcome to your special little world, Ceishaa!";

  bunny.innerHTML = "🐰🎀";
  button.innerHTML = "Let's Explore! ✨";

  button.onclick = function() {
    alert("Your little adventure is coming soon! 💗");
  };
}
