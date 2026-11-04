// ENTER THE LITTLE WORLD

function enterWorld() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("home").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// MENU NAVIGATION

function openMenu(menu) {
  if (menu === "home") {
    backHome();
    return;
  }

  const pages = ["memory", "game", "letter", "surprise", "ending"];

  pages.forEach(function(page) {
    document.getElementById(page).style.display = "none";
  });

  document.getElementById("home").style.display = "none";
  document.getElementById(menu).style.display = "block";

  if (menu === "letter") {
    startLetterTyping();
  }

  if (menu === "ending") {
    startEndingTyping();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}


// BACK TO HOME

function backHome() {
  const pages = ["memory", "game", "letter", "surprise", "ending"];

  pages.forEach(function(page) {
    document.getElementById(page).style.display = "none";
  });

  document.getElementById("home").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// WAIT FUNCTION

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// SECRET LETTER TYPEWRITER

const letterContent = document.getElementById("letter-content");

const originalLetter = Array.from(letterContent.children).map(function(item) {
  return {
    tag: item.tagName,
    text: item.textContent
  };
});

let typingSession = 0;

async function startLetterTyping() {
  const session = ++typingSession;
  const sign = document.querySelector(".letter-sign");

  letterContent.innerHTML = "";
  sign.classList.remove("show");
  letterContent.classList.add("typing");

  for (const item of originalLetter) {
    if (session !== typingSession) return;

    const element = document.createElement(item.tag);
    letterContent.appendChild(element);

    for (const character of Array.from(item.text)) {
      if (session !== typingSession) return;

      element.textContent += character;
      await wait(60);
    }

    await wait(750);
  }

  if (session === typingSession) {
    letterContent.classList.remove("typing");
    sign.classList.add("show");
  }
}


// ENDING NOTE TYPEWRITER

const endingNote = document.querySelector(".ending-note");

const originalEndingParagraphs = Array.from(
  endingNote.querySelectorAll("p")
).map(function(paragraph) {
  return paragraph.textContent;
});

let endingTypingSession = 0;

async function startEndingTyping() {
  const session = ++endingTypingSession;
  const paragraphs = endingNote.querySelectorAll("p");

  paragraphs.forEach(function(paragraph) {
    paragraph.textContent = "";
  });

  for (let i = 0; i < originalEndingParagraphs.length; i++) {
    if (session !== endingTypingSession) return;

    const paragraph = paragraphs[i];
    const text = originalEndingParagraphs[i];

    for (const character of Array.from(text)) {
      if (session !== endingTypingSession) return;

      paragraph.textContent += character;
      await wait(25);
    }

    await wait(500);
  }
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


// THE FINAL SURPRISE

let finaleStarted = false;

async function startFinale() {
  if (finaleStarted) return;

  const screen = document.getElementById("finale-screen");
  const flowerArea = document.getElementById("falling-flowers");

  if (!screen || !flowerArea) {
    console.error("Final screen elements were not found.");
    return;
  }

  finaleStarted = true;

  const button = document.querySelector(".finale-button");
  const hint = document.querySelector(".finale-hint");

  if (button) {
    button.style.display = "none";
  }

  if (hint) {
    hint.style.display = "none";
  }

  // FALLING FLOWERS

  const flowers = ["🌸", "🌷", "🌼", "✿", "❀"];

  for (let i = 0; i < 28; i++) {
    const flower = document.createElement("span");

    flower.className = "falling-flower";
    flower.textContent = flowers[i % flowers.length];

    flower.style.left = Math.random() * 100 + "%";
    flower.style.fontSize = (16 + Math.random() * 18) + "px";
    flower.style.animationDuration = (4 + Math.random() * 3) + "s";
    flower.style.animationDelay = (Math.random() * 1.5) + "s";

    flowerArea.appendChild(flower);
  }

  // FADE TO DARK

  await wait(300);
  screen.classList.add("active");

  // SHOW THE END

  await wait(3500);
  screen.classList.add("show-title");
}
