/* =====================================================
   🎂 SIDD'S BIRTHDAY ADVENTURE - SHARED JAVASCRIPT 🎂
   ALL CUSTOMIZATION IS AT THE TOP OF THIS FILE!
   ===================================================== */

/* =====================================================
   🎮  EASY CUSTOMIZATION PANEL - EDIT THESE!
   ===================================================== */
const CFG = {
  // ---------- NAME & BIRTHDAY ----------
  name: "Sidd",
  nameUpper: "SIDD",
  birthDay: 14,
  birthMonth: 10,     // October = 10
  birthYear: 2005,

  // ---------- SECRET CODE ----------
  secretCode: "14102005",   // DDMMYYYY = Sidd's birthday!
  codeHint: "Hint: It's Sidd's birthday (DDMMYYYY) 🎂",

  // ---------- MUSIC ----------
  musicFile: "music/birthday.mp3",

  // ---------- 15 PHOTO CAPTIONS + FRAMES ----------
  photos: [
    { caption: "Smile! 😄",              frame: "pf-1"  },
    { caption: "Best Memories ❤️",       frame: "pf-2"  },
    { caption: "Crazy Moments 😂",       frame: "pf-3"  },
    { caption: "Always Smiling ✨",       frame: "pf-4"  },
    { caption: "Good Times 🎉",           frame: "pf-5"  },
    { caption: "Friendship Goals 🤝",    frame: "pf-6"  },
    { caption: "Just Sidd Being Sidd 😎", frame: "pf-7"  },
    { caption: "Core Memory 💖",         frame: "pf-8"  },
    { caption: "Too Much Fun 😂",         frame: "pf-9"  },
    { caption: "Best Day Ever 🌸",        frame: "pf-10" },
    { caption: "Forever Memories ✨",     frame: "pf-11" },
    { caption: "Keep Smiling 😊",         frame: "pf-12" },
    { caption: "Legend Moment 😎",       frame: "pf-13" },
    { caption: "Another Memory ❤️",      frame: "pf-14" },
    { caption: "15/15 Perfect! 🎂",       frame: "pf-15" }
  ],

  // ---------- MEMORY REVEAL CARDS (page: memories) ----------
  memories: [
    { emoji: "🎢", title: "The Adventure",
      text: "Remember that crazy day we went exploring and got lost? It turned into one of the best days ever! 😂" },
    { emoji: "🍕", title: "Midnight Snacks",
      text: "All those late-night snack runs and random 2 AM conversations — the little moments that made the best memories. 🌙" },
    { emoji: "🎬", title: "Movie Marathons",
      text: "Endless movie marathons where we'd laugh, cry (sometimes), and quote lines for weeks after. 🎥" },
    { emoji: "🎮", title: "Gaming Nights",
      text: "Gaming sessions that lasted 'til sunrise. The trash talk, the wins, the losses — all unforgettable! 🕹️" },
    { emoji: "🌈", title: "Rainy Days",
      text: "Dancing in the rain, getting completely soaked, and not caring one bit. Pure joy with you! ☔" },
    { emoji: "🎵", title: "Our Playlist",
      text: "The songs we'd blast on repeat, sing at the top of our lungs, and completely butcher the lyrics to. 🎶" }
  ],

  // ---------- FUNNY MOMENTS (5 cards, page: memories) ----------
  funnyMoments: [
    { emoji: "🤪", caption: "That one time Sidd tried to cook and almost set off the smoke alarm 😂🔥",
      photo: "images/photo8.jpg"  },
    { emoji: "😎", caption: "Sidd thinking he's the main character — and honestly? He is.",
      photo: "images/photo7.jpg"  },
    { emoji: "💀", caption: "The reaction when the teacher called on Sidd mid-nap in class 😴",
      photo: "images/photo3.jpg"  },
    { emoji: "🎤", caption: "Sidd singing his heart out in the car — zero talent, 100% confidence. 🎶",
      photo: "images/photo10.jpg" },
    { emoji: "🦄", caption: "Proof that Sidd was, is, and always will be the most chaotic friend alive ✨",
      photo: "images/photo15.jpg" }
  ],

  // ---------- COMPLIMENTS (page: memories) ----------
  compliments: [
    "Certified Awesome 😎",
    "Professional Trouble Maker 😂",
    "Friendship Level: Legendary 🏆",
    "100% Good Vibes ✨",
    "Officially Too Cool 😎",
    "Smile That Lights Up The Room 🌟",
    "The Human Version of a Good Mood 💛",
    "Sidd = Walking Happiness 🌈",
    "Certified Mood Booster 🚀",
    "Expert Level: Being Amazing 🎖️",
    "Heart of Gold 💖",
    "One In A Billion ⭐",
    "Naturally Iconic 👑",
    "Always The Best Part Of The Day 🥰",
    "Charm Level: MAXED OUT 💫"
  ],

  // ---------- QUIZ (5 questions, page: quiz) ----------
  quiz: [
    {
      question: "When is Sidd's birthday? 🎂",
      options: ["14 November", "14 October", "24 October", "4 October"],
      answer: 1
    },
    {
      question: "What's Sidd's superpower? 🦸",
      options: ["Flying", "Making everyone laugh", "Invisibility", "Time travel"],
      answer: 1
    },
    {
      question: "Which word describes Sidd best? 😎",
      options: ["Boring", "Awesome", "Quiet", "Grumpy"],
      answer: 1
    },
    {
      question: "What do you do when Sidd is around? 🎉",
      options: ["Sleep", "Have the best time ever", "Study", "Leave"],
      answer: 1
    },
    {
      question: "Sidd is the best...? ❤️",
      options: ["Cook", "Friend anyone could ask for", "Painter", "Driver"],
      answer: 1
    }
  ],

  // ---------- BIRTHDAY MESSAGES ----------
  mainMessage: `Happy Birthday Sidd! 🎂❤️
I hope this new year of your life brings you lots of happiness, success, crazy adventures and unforgettable memories. Keep smiling, keep being yourself, and never stop being awesome! Here's to many more memories, laughs and stupid moments together. 😂❤️`,

  secretLetter: {
    greeting: "Dear Sidd,",
    body: "Some people make life more fun just by being around. You're one of those people. Thanks for all the laughs, memories and crazy moments. Stay awesome and have an amazing birthday! ❤️",
    sign: "— With love, your friend ✨"
  },

  finalMessage: `To my dearest Sidd,
Thank you for every stupid joke, every adventure, every late-night chat, and every single memory we've made. This year, may every single one of your dreams come true. You deserve the absolute best. Keep shining, keep smiling, keep being YOU.
Cheers to many more birthdays together! 🎉❤️🥂`
};

/* =====================================================
   🔧  UTILITIES - NO NEED TO EDIT BELOW
   ===================================================== */
const $  = (id)  => document.getElementById(id);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const rand     = (a, b) => Math.random() * (b - a) + a;
const randInt  = (a, b) => Math.floor(rand(a, b + 1));
const randItem = (arr) => arr[randInt(0, arr.length - 1)];

/* ===== CONFETTI COLOR PALETTE ===== */
const PALETTE = [
  "#ff9aa2","#ffdac1","#ffb7b2","#e2f0cb",
  "#b5ead7","#c7ceea","#f8a5c2","#f78fb3",
  "#63cdda","#778beb","#f5cd79","#e77f67"
];

/* ===== ENSURE ANIMATION CONTAINERS ===== */
function ensureContainers() {
  const need = [
    ["balloon-container","balloonContainer"],
    ["hearts-container","heartsContainer"],
    ["sparkles-container","sparklesContainer"],
    ["confetti-container","confettiContainer"],
    ["firework-container","fireworkContainer"]
  ];
  need.forEach(([cls, id]) => {
    if (!$(id)) {
      const d = document.createElement("div");
      d.className = cls;
      d.id = id;
      document.body.appendChild(d);
    }
  });
}

/* ===== CONFETTI ===== */
function startConfetti(count = 220) {
  const host = $("confettiContainer");
  if (!host) return;
  let made = 0;
  const id = setInterval(() => {
    for (let i = 0; i < 12 && made < count; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = rand(0, 100) + "vw";
      c.style.background = randItem(PALETTE);
      c.style.width = rand(6, 12) + "px";
      c.style.height = rand(8, 16) + "px";
      c.style.animationDuration = rand(3, 6) + "s";
      c.style.animationDelay = rand(0, 0.4) + "s";
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      host.appendChild(c);
      setTimeout(() => c.remove(), 7000);
      made++;
    }
    if (made >= count) clearInterval(id);
  }, 40);
}

/* ===== BALLOONS ===== */
const BALLOONS = ["🎈","🎈","🎈","🎀","🎊","🎉"];
function startBalloons(count = 16) {
  const host = $("balloonContainer");
  if (!host) return;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const b = document.createElement("div");
      b.className = "balloon";
      b.textContent = randItem(BALLOONS);
      b.style.left = rand(2, 95) + "vw";
      b.style.fontSize = rand(1.8, 3.6) + "rem";
      b.style.animationDuration = rand(8, 16) + "s";
      host.appendChild(b);
      setTimeout(() => b.remove(), 17000);
    }, i * 350);
  }
}

/* ===== HEARTS ===== */
const HEARTS = ["❤️","💖","💕","💗","💘","💝","💓","💞"];
function startHearts(count = 18) {
  const host = $("heartsContainer");
  if (!host) return;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const h = document.createElement("div");
      h.className = "heart";
      h.textContent = randItem(HEARTS);
      h.style.left = rand(3, 97) + "vw";
      h.style.bottom = rand(-10, 20) + "vh";
      h.style.fontSize = rand(1.2, 2.3) + "rem";
      h.style.animationDuration = rand(6, 12) + "s";
      host.appendChild(h);
      setTimeout(() => h.remove(), 13000);
    }, i * 260);
  }
}

/* ===== SPARKLES ===== */
const SPARKLES = ["✨","⭐","💫","🌟"];
function startSparklesAmbient() {
  const host = $("sparklesContainer");
  if (!host) return;
  setInterval(() => {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.textContent = randItem(SPARKLES);
    s.style.left = rand(0, 100) + "vw";
    s.style.top  = rand(0, 100) + "vh";
    s.style.fontSize = rand(0.9, 1.6) + "rem";
    s.style.animationDuration = rand(2, 4) + "s";
    host.appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }, 450);
}

/* ===== FIREWORKS (for surprise.html) ===== */
function launchFirework(xPct, yPct) {
  const host = $("fireworkContainer");
  if (!host) return;
  const fw = document.createElement("div");
  fw.className = "firework";
  fw.style.left = xPct + "vw";
  fw.style.top  = yPct + "vh";
  host.appendChild(fw);
  const dots = 18;
  const color = randItem(PALETTE);
  for (let i = 0; i < dots; i++) {
    const d = document.createElement("div");
    d.className = "firework-dot";
    d.style.color = color;
    d.style.background = color;
    const angle = (Math.PI * 2 * i) / dots;
    const dist = rand(70, 140);
    d.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    d.style.setProperty("--dy", Math.sin(angle) * dist + "px");
    d.style.animationDuration = rand(1.3, 1.9) + "s";
    fw.appendChild(d);
  }
  setTimeout(() => fw.remove(), 2200);
}

function startFireworks(durationSec = 10) {
  const id = setInterval(() => {
    launchFirework(rand(10, 90), rand(8, 55));
    if (Math.random() > 0.5) {
      setTimeout(() => launchFirework(rand(10, 90), rand(8, 55)), 350);
    }
  }, 700);
  setTimeout(() => clearInterval(id), durationSec * 1000);
}

/* ===== AMBIENT VIBES ===== */
function startAmbientLoops() {
  setInterval(() => Math.random() > 0.65 && startBalloons(3), 10000);
  setInterval(() => Math.random() > 0.75 && startHearts(3), 7500);
}

/* ===== MUSIC PLAYER (CONTINUOUS ACROSS PAGES) ===== */
let musicPlaying = false;
let audioEl = null;
let musicSaveTimer = null;

/* ----- helpers: read/write session state ----- */
function MUSIC_KEY() { return "sidd_bday_music_v1"; }
function readMusicState() {
  try { return JSON.parse(sessionStorage.getItem(MUSIC_KEY()) || "null"); }
  catch (e) { return null; }
}
function writeMusicState(state) {
  try { sessionStorage.setItem(MUSIC_KEY(), JSON.stringify(state)); } catch (e) {}
}
function saveMusicNow() {
  const a = audioEl;
  if (!a) return;
  writeMusicState({
    playing: !a.paused && !a.ended,
    time:    isFinite(a.currentTime) ? a.currentTime : 0
  });
}

function getAudio() {
  if (audioEl) return audioEl;
  audioEl = document.createElement("audio");
  audioEl.loop = true;
  audioEl.preload = "auto";
  // Many fallbacks — picks whatever file exists
  const sources = [
    { src: CFG.musicFile,                          type: "audio/mpeg" },
    { src: "music/birthday.m4a",                   type: "audio/mp4"  },
    { src: "music/birthday.mp3",                   type: "audio/mpeg" },
    { src: "music/AP Dhillon   Thinking Of You.m4a", type: "audio/mp4" },
    { src: "music/AP Dhillon  Thinking Of You.m4a",  type: "audio/mp4" },
    { src: "music/AP Dhillon Thinking Of You.m4a",   type: "audio/mp4" },
    { src: "music/AP%20Dhillon%20%20%20Thinking%20Of%20You.m4a", type: "audio/mp4" }
  ];
  sources.forEach(s => {
    const src = document.createElement("source");
    src.src = s.src;
    src.type = s.type;
    audioEl.appendChild(src);
  });
  document.body.appendChild(audioEl);

  // Every 100ms save position so we can seamlessly resume next page
  audioEl.addEventListener("timeupdate", () => {
    if (!audioEl.paused) saveMusicNow();
  });
  audioEl.addEventListener("play",  saveMusicNow);
  audioEl.addEventListener("pause", saveMusicNow);
  audioEl.addEventListener("ended", saveMusicNow);

  // Periodic safety save
  if (!musicSaveTimer) musicSaveTimer = setInterval(saveMusicNow, 500);

  return audioEl;
}

/* Resume exactly where we left off — if user already pressed play previously.
   Only works AFTER a user gesture (gift click, code submit, candle click etc.)
   — but we also try once directly (modern browsers allow it only if already granted). */
function resumeMusic() {
  const a = getAudio();
  const btn = $("musicBtn");
  const icon  = btn?.querySelector(".music-icon");
  const text  = btn?.querySelector(".music-text");
  const eq    = btn?.querySelector(".equalizer");
  const npBar = $("nowPlaying");

  const saved = readMusicState();
  if (saved && saved.playing) {
    if (isFinite(saved.time) && saved.time > 0) {
      try { a.currentTime = saved.time; } catch (e) {}
    }
    const p = a.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        musicPlaying = true;
        icon?.classList.add("playing");
        eq?.classList.add("playing");
        if (text) text.textContent = "Pause Music";
        npBar?.classList.add("show");
      }).catch(() => {}); // autoplay blocked by browser — wait for user gesture, will attach later
    }
  }
}

function buildMusicButton(insideFrame = false) {
  if ($("musicBtn")) return;
  const btn = document.createElement("div");
  btn.className = "music-btn";
  btn.id = "musicBtn";
  btn.title = "Toggle Music";
  btn.innerHTML = `
    <span class="music-icon">🎵</span>
    <span class="music-text">Play Music</span>
    <span class="equalizer">
      <span class="eq-bar"></span><span class="eq-bar"></span>
      <span class="eq-bar"></span><span class="eq-bar"></span>
    </span>`;
  const np = document.createElement("div");
  np.className = "now-playing";
  np.id = "nowPlaying";
  np.textContent = "Now Playing 🎵";
  document.body.appendChild(btn);
  document.body.appendChild(np);

  // ----- INSIDE FRAME MODE: delegate all control to outer frame's audio -----
  if (insideFrame && window.parent && window.parent !== window) {
    function syncFromParent(event) {
      if (!event || event.origin !== location.origin) return;
      const msg = event.data;
      if (!msg || msg.type !== "sidd_frame_music_sync") return;
      const icon = btn.querySelector(".music-icon");
      const text = btn.querySelector(".music-text");
      const eq   = btn.querySelector(".equalizer");
      musicPlaying = !!msg.playing;
      icon?.classList.toggle("playing", musicPlaying);
      eq?.classList.toggle("playing", musicPlaying);
      if (text) text.textContent = musicPlaying ? "Pause Music" : "Play Music";
      np?.classList.toggle("show", musicPlaying);
    }
    window.addEventListener("message", syncFromParent);
    // Ask parent for initial state
    try { window.parent.postMessage({ type: "sidd_frame_music_ping" }, "*"); } catch(e) {}

    btn.addEventListener("click", () => {
      try { window.parent.postMessage({ type: "sidd_frame_music_toggle" }, "*"); } catch(e) {}
    });
    return;
  }

  btn.addEventListener("click", () => {
    const a = getAudio();
    const icon  = btn.querySelector(".music-icon");
    const text  = btn.querySelector(".music-text");
    const eq    = btn.querySelector(".equalizer");
    const npBar = $("nowPlaying");
    if (!musicPlaying) {
      // resume saved position if available
      const saved = readMusicState();
      if (saved && isFinite(saved.time) && saved.time > 0) {
        try { a.currentTime = saved.time; } catch (e) {}
      }
      const p = a.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          musicPlaying = true;
          icon?.classList.add("playing");
          eq?.classList.add("playing");
          if (text) text.textContent = "Pause Music";
          npBar?.classList.add("show");
          saveMusicNow();
        }).catch(() => {});
      }
    } else {
      a.pause();
      musicPlaying = false;
      icon?.classList.remove("playing");
      eq?.classList.remove("playing");
      if (text) text.textContent = "Play Music";
      npBar?.classList.remove("show");
      saveMusicNow();
    }
  });
}

/* ===== TYPEWRITER ===== */
function typewriter(el, text, speed = 32, doneCb) {
  if (!el) return;
  el.textContent = "";
  el.classList.remove("done");
  let i = 0;
  (function step() {
    if (i < text.length) {
      el.textContent += text.charAt(i++);
      setTimeout(step, speed);
    } else {
      el.classList.add("done");
      doneCb && doneCb();
    }
  })();
}

/* ===== PAGE NAME SUBSTITUTION ===== */
function fillPlaceholders() {
  document.body.innerHTML = document.body.innerHTML
    .replace(/__NAME__/g, CFG.name)
    .replace(/__NAME_UPPER__/g, CFG.nameUpper);
}

/* =====================================================
   📸  PHOTO HELPERS (photos.html & surprise.html collage)
   ===================================================== */
const PLACEHOLDER_EMOJIS = [
  "📸","🌷","🌈","🦋","🌸","🍰","🎀","🎂","💫","🌻","🍬","🎈","🎊","🦄","⭐"
];
function makePlaceholderSVG(idx) {
  const e = PLACEHOLDER_EMOJIS[idx % PLACEHOLDER_EMOJIS.length];
  const w = 600, h = 600;
  return `data:image/svg+xml;charset=utf-8,` + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
      <defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stop-color='#ffdac1'/><stop offset='100%' stop-color='#c7ceea'/>
      </linearGradient></defs>
      <rect width='${w}' height='${h}' fill='url(#g)'/>
      <text x='50%' y='48%' font-size='180' text-anchor='middle' dominant-baseline='middle'>${e}</text>
      <text x='50%' y='72%' font-size='36' font-family='Segoe UI' fill='#777' text-anchor='middle'>Photo ${idx + 1}</text>
    </svg>`);
}
function photoSrc(idx) {
  return `images/photo${idx + 1}.jpg`;
}
function attachFallback(img, idx) {
  img.onerror = () => {
    img.onerror = null;
    img.src = makePlaceholderSVG(idx);
  };
}

/* =====================================================
   🏠  PAGE 1: INDEX - MYSTERY GIFT
   ===================================================== */
function initIndex() {
  const gift = $("mysteryGift");
  if (!gift) return;
  gift.addEventListener("click", () => {
    if (gift.classList.contains("open")) return;
    gift.classList.add("open");
    startConfetti(260);
    startHearts(25);
    startBalloons(20);
    setTimeout(() => startConfetti(180), 800);
    setTimeout(() => {
      window.location.href = "unlock.html";
    }, 1900);
  });
}

/* =====================================================
   🔐  PAGE 2: UNLOCK - SECRET CODE
   ===================================================== */
function initUnlock() {
  const wrap = $("codeInputs");
  if (!wrap) return;
  const status = $("unlockStatus");
  const hintEl = $("codeHint");
  if (hintEl && CFG.codeHint) hintEl.textContent = CFG.codeHint;
  const len = CFG.secretCode.length;
  wrap.innerHTML = "";
  const inputs = [];
  for (let i = 0; i < len; i++) {
    const inp = document.createElement("input");
    inp.className = "code-digit";
    inp.type = "text";
    inp.maxLength = 1;
    inp.inputMode = "numeric";
    inp.dataset.idx = i;
    wrap.appendChild(inp);
    inputs.push(inp);

    inp.addEventListener("input", () => {
      inp.value = inp.value.replace(/[^0-9]/g, "").slice(-1);
      if (inp.value) inp.classList.add("filled");
      else inp.classList.remove("filled");
      if (inp.value && i < len - 1) inputs[i + 1].focus();
      checkCode();
    });
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !inp.value && i > 0) {
        inputs[i - 1].focus();
      } else if (e.key === "ArrowRight" && i < len - 1) {
        inputs[i + 1].focus();
      } else if (e.key === "ArrowLeft" && i > 0) {
        inputs[i - 1].focus();
      }
    });
    inp.addEventListener("paste", (e) => {
      e.preventDefault();
      const pasted = (e.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, len);
      pasted.split("").forEach((c, k) => {
        if (inputs[k]) {
          inputs[k].value = c;
          inputs[k].classList.add("filled");
        }
      });
      checkCode();
    });
  }
  inputs[0].focus();

  function readCode() { return inputs.map(i => i.value).join(""); }
  function checkCode() {
    const entered = readCode();
    if (entered.length < len) return;
    if (entered === CFG.secretCode) {
      status.textContent = "✅ Unlocked! 🎉";
      status.className = "unlock-status success";
      inputs.forEach(i => i.style.borderColor = "#5bc88e");
      startConfetti(320);
      startHearts(22);
      setTimeout(() => startConfetti(220), 600);
      setTimeout(() => { window.location.href = "birthday.html"; }, 1900);
    } else {
      status.textContent = "❌ Oops, try again! 💭";
      status.className = "unlock-status error";
      setTimeout(() => {
        inputs.forEach(i => { i.value = ""; i.classList.remove("filled"); i.style.borderColor = ""; });
        inputs[0].focus();
        status.textContent = "";
        status.className = "unlock-status";
      }, 900);
    }
  }
}

/* =====================================================
   🎂  PAGE 3: BIRTHDAY - BLOW THE CANDLE
   ===================================================== */
function initBirthday() {
  const stage = $("cakeStage");
  const candle = $("candleArea");
  const wish   = $("wishText");
  const next   = $("birthdayNext");
  if (!stage || !candle) return;
  candle.addEventListener("click", () => {
    if (stage.classList.contains("cake-blown")) return;
    stage.classList.add("cake-blown");
    wish.classList.add("show");
    startConfetti(420);
    setTimeout(() => startConfetti(300), 500);
    startBalloons(30);
    setTimeout(() => startBalloons(20), 600);
    startHearts(28);
    if (next) next.style.display = "inline-flex";
  });
}

/* =====================================================
   📸  PAGE 4: PHOTOS - 15 POLAROIDS + PHOTO STRIP
   ===================================================== */
let lbIndex = 0;
function openLB(idx) {
  lbIndex = idx;
  updateLB();
  $("lightbox")?.classList.add("on");
  document.body.style.overflow = "hidden";
}
function closeLB() {
  $("lightbox")?.classList.remove("on");
  document.body.style.overflow = "";
}
function navLB(delta) {
  lbIndex = (lbIndex + delta + CFG.photos.length) % CFG.photos.length;
  updateLB();
}
function updateLB() {
  const img = $("lbImg");
  const cap = $("lbCap");
  if (!img || !cap) return;
  const p = CFG.photos[lbIndex];
  const test = new Image();
  test.onload = () => { img.src = photoSrc(lbIndex); img.style.display = ""; };
  test.onerror = () => { img.src = makePlaceholderSVG(lbIndex); img.style.display = ""; };
  test.src = photoSrc(lbIndex);
  cap.textContent = p.caption;
}

function initPhotos() {
  const strip = $("photoStrip");
  const grid  = $("polaroidGrid");
  if (grid) {
    grid.innerHTML = "";
    CFG.photos.forEach((p, idx) => {
      const card = document.createElement("div");
      card.className = "polaroid";
      card.innerHTML = `
        <div class="polaroid-frame ${p.frame}">
          <img class="polaroid-img" src="${photoSrc(idx)}" alt="${p.caption}" loading="lazy"/>
        </div>
        <div class="polaroid-caption">${p.caption}</div>`;
      const img = card.querySelector("img");
      attachFallback(img, idx);
      card.addEventListener("click", () => openLB(idx));
      grid.appendChild(card);
    });
  }
  if (strip) {
    const picks = [0, 3, 7, 11];
    strip.innerHTML = "";
    picks.forEach(idx => {
      const s = document.createElement("div");
      s.className = "strip-item";
      const img = document.createElement("img");
      img.src = photoSrc(idx);
      img.alt = CFG.photos[idx].caption;
      attachFallback(img, idx);
      s.appendChild(img);
      strip.appendChild(s);
    });
  }
  // lightbox
  $("lbClose")?.addEventListener("click", closeLB);
  $("lbPrev")?.addEventListener("click", () => navLB(-1));
  $("lbNext")?.addEventListener("click", () => navLB(+1));
  document.addEventListener("keydown", (e) => {
    if (!$("lightbox")?.classList.contains("on")) return;
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowLeft") navLB(-1);
    if (e.key === "ArrowRight") navLB(+1);
  });
  $("lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLB();
  });
}

/* =====================================================
   💭  PAGE 5: MEMORIES - REVEAL + FUNNY + COMPLIMENT + METER
   ===================================================== */
function initMemories() {
  // ---------- REVEAL ----------
  const counter = $("memoryCounter");
  const card    = $("memoryCard");
  const btn     = $("memoryRevealBtn");
  const nextBtn = $("memoriesNext");
  let memIdx = -1;
  if (card) {
    showMemory(0);
    btn?.addEventListener("click", () => {
      const next = memIdx + 1;
      if (next < CFG.memories.length) {
        card.classList.add("swap-out");
        setTimeout(() => {
          showMemory(next);
          card.classList.remove("swap-out");
          card.classList.add("swap-in");
          setTimeout(() => card.classList.remove("swap-in"), 600);
        }, 380);
        startHearts(6);
        if (next % 2 === 0) startConfetti(60);
      }
      if (next >= CFG.memories.length - 1 && nextBtn) {
        nextBtn.style.display = "inline-flex";
      }
    });
  }
  function showMemory(i) {
    memIdx = i;
    const m = CFG.memories[i];
    if (counter) counter.textContent = `Memory ${i + 1} / ${CFG.memories.length} ❤️`;
    if (!m) return;
    card.innerHTML = `
      <div class="memory-emoji">${m.emoji}</div>
      <h2 class="memory-title gradient-text">${m.title}</h2>
      <p class="memory-text">${m.text}</p>`;
  }

  // ---------- FUNNY MOMENTS ----------
  const funnyGrid = $("funnyGrid");
  if (funnyGrid) {
    funnyGrid.innerHTML = "";
    CFG.funnyMoments.forEach((fm, i) => {
      const card = document.createElement("div");
      card.className = "funny-card";
      card.innerHTML = `
        <div class="funny-inner">
          <div class="funny-face funny-front">
            <div class="funny-emoji-big">😂</div>
            <div style="font-weight:800; font-size:1.1rem; letter-spacing:.3px;">Click to reveal 😂</div>
            <div style="font-size:.78rem; font-weight:500; opacity:.9; margin-top:2px;">Sidd being Sidd 👀</div>
          </div>
          <div class="funny-face funny-back">
            <div class="funny-back-img">
              <img src="${fm.photo}" alt="Funny ${i+1}" loading="lazy"/>
            </div>
            <div style="font-size:2.4rem; line-height:1;">${fm.emoji}</div>
            <div style="font-size:0.92rem; font-weight:600; color:var(--text); line-height:1.45; padding:0 2px;">${fm.caption}</div>
          </div>
        </div>`;
      const img = card.querySelector("img");
      attachFallback(img, (i * 3 + 7) % 15);
      card.addEventListener("click", () => {
        const wasFlipped = card.classList.contains("flipped");
        if (!wasFlipped) {
          card.classList.add("flipped");
          if (i === 1 || i === 3) startHearts(6);
          if (i === 2) startConfetti(50);
          if (i === 0) startSparklesAmbient();
        } else {
          card.classList.remove("flipped");
        }
      });
      funnyGrid.appendChild(card);
    });
  }

  // ---------- COMPLIMENT ----------
  const compBtn  = $("complimentBtn");
  const compText = $("complimentText");
  let lastCompIdx = -1;
  if (compBtn && compText) {
    compBtn.addEventListener("click", () => {
      let idx;
      do { idx = randInt(0, CFG.compliments.length - 1); }
      while (CFG.compliments.length > 1 && idx === lastCompIdx);
      lastCompIdx = idx;
      compText.classList.remove("show");
      setTimeout(() => {
        compText.textContent = CFG.compliments[idx];
        compText.classList.add("show");
      }, 150);
      startHearts(4);
    });
  }

  // ---------- FRIENDSHIP METER ----------
  const fill    = $("meterFill");
  const percent = $("meterPercent");
  const msg     = $("meterMsg");
  if (fill && percent) {
    let p = 0;
    const animateMeter = () => {
      requestAnimationFrame(() => {
        if (p < 100) {
          p += 1.6;
          if (p > 100) p = 100;
          fill.style.width = p + "%";
          percent.textContent = Math.round(p) + "%";
          animateMeter();
        } else {
          msg?.classList.add("show");
        }
      });
    };
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting) { animateMeter(); obs.disconnect(); }
      });
    }, { threshold: 0.4 });
    obs.observe(fill);
  }
}

/* =====================================================
   🧩  PAGE 6: QUIZ
   ===================================================== */
function initQuiz() {
  const qWrap   = $("quizCard");
  const prog    = $("quizProgress");
  if (!qWrap) return;
  let qi = 0;
  let score = 0;
  let locked = false;

  buildProgress();
  renderQuestion();

  function buildProgress() {
    if (!prog) return;
    prog.innerHTML = "";
    CFG.quiz.forEach((_, i) => {
      const d = document.createElement("div");
      d.className = "qp-dot" + (i === 0 ? " current" : "");
      d.dataset.i = i;
      prog.appendChild(d);
    });
  }
  function updateProgress(answered) {
    if (!prog) return;
    Array.from(prog.querySelectorAll(".qp-dot")).forEach((d, i) => {
      d.classList.remove("current", "done");
      if (i < answered) d.classList.add("done");
      else if (i === answered) d.classList.add("current");
    });
  }

  function renderQuestion() {
    if (qi >= CFG.quiz.length) return renderResult();
    const q = CFG.quiz[qi];
    locked = false;
    qWrap.innerHTML = `
      <div class="quiz-qnum">Question ${qi + 1} of ${CFG.quiz.length}</div>
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((o, i) => `<button class="quiz-opt" data-i="${i}">${o}</button>`).join("")}
      </div>`;
    qWrap.querySelectorAll(".quiz-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        if (locked) return;
        locked = true;
        const picked = Number(btn.dataset.i);
        const correct = q.answer;
        btn.classList.add("picked");
        if (picked === correct) {
          btn.classList.add("correct");
          score++;
          startConfetti(60);
        } else {
          btn.classList.add("wrong");
          qWrap.querySelectorAll(".quiz-opt")[correct]?.classList.add("correct");
          startHearts(3);
        }
        updateProgress(qi + 1);
        setTimeout(() => { qi++; renderQuestion(); }, 1100);
      });
    });
  }

  function renderResult() {
    const total = CFG.quiz.length;
    const pct = Math.round((score / total) * 100);
    let message = "";
    if (pct === 100)       message = "🎉 PERFECT! You know Sidd better than anyone!";
    else if (pct >= 80)    message = "🎉 YOU KNOW SIDD PRETTY WELL!";
    else if (pct >= 60)    message = "😎 Pretty good! You and Sidd are tight.";
    else                   message = "😂 Time to make more memories with Sidd!";

    qWrap.className = "quiz-card quiz-result glass";
    qWrap.innerHTML = `
      <div class="quiz-score-label">Your Score</div>
      <div class="quiz-score-big">${score}/${total}</div>
      <div style="font-weight:700; color:var(--text-light);">${pct}%</div>
      <div class="quiz-message">${message}</div>
      <a href="award.html" class="btn btn-lav btn-big" style="margin-top:20px;">
        <span>🏆</span><span>NEXT: THE AWARD</span><span>→</span>
      </a>`;

    startConfetti(360);
    setTimeout(() => startConfetti(220), 500);
    startBalloons(22);
    startHearts(20);
  }
}

/* =====================================================
   🏆  PAGE 7: AWARD
   ===================================================== */
function initAward() {
  const cert = $("certificate");
  if (!cert) return;
  setTimeout(() => {
    cert.classList.add("show");
    startConfetti(320);
    setTimeout(() => startConfetti(200), 400);
    startHearts(16);
  }, 350);
}

/* =====================================================
   💌  PAGE 8: MESSAGE - SECRET LETTER
   ===================================================== */
function initMessage() {
  const env  = $("envStage");
  const full = $("letterFull");
  const body = $("letterBody");
  if (!env) return;
  let opened = false;
  const open = () => {
    if (opened) return;
    opened = true;
    env.classList.add("open");
    startHearts(18);
    setTimeout(() => {
      full.classList.add("show");
      setTimeout(() => {
        typewriter(body, CFG.secretLetter.body, 30);
      }, 700);
    }, 900);
  };
  env.addEventListener("click", open);
  $("envOpenBtn")?.addEventListener("click", open);
}

/* =====================================================
   🎆  PAGE 9: SURPRISE - FINAL
   ===================================================== */
function initSurprise() {
  // 15-tile collage
  const collage = $("collage");
  if (collage) {
    collage.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      const t = document.createElement("div");
      t.className = "collage-tile";
      const img = document.createElement("img");
      img.src = photoSrc(i);
      img.alt = CFG.photos[i].caption;
      img.loading = "lazy";
      attachFallback(img, i);
      t.appendChild(img);
      collage.appendChild(t);
    }
  }

  // Final message typewriter
  const fm = $("finalMessage");
  if (fm) {
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting) {
          typewriter(fm, CFG.finalMessage, 24);
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    obs.observe(fm);
  }

  // Grand entrance party
  setTimeout(() => startFireworks(12), 400);
  setTimeout(() => startConfetti(600), 300);
  setTimeout(() => startConfetti(400), 1300);
  setTimeout(() => startConfetti(300), 2400);
  startBalloons(40);
  setTimeout(() => startBalloons(30), 1200);
  startHearts(30);
  setTimeout(() => startHearts(20), 800);
  // Repeating bursts for 20s
  setTimeout(() => {
    const id = setInterval(() => {
      startConfetti(180);
      startBalloons(8);
    }, 2600);
    setTimeout(() => clearInterval(id), 20000);
  }, 3000);
}

/* =====================================================
   🚀  GLOBAL BOOTSTRAP
   ===================================================== */
function detectPage() {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const map = {
    "index.html":    initIndex,
    "unlock.html":   initUnlock,
    "birthday.html": initBirthday,
    "photos.html":   initPhotos,
    "memories.html": initMemories,
    "quiz.html":     initQuiz,
    "award.html":    initAward,
    "message.html":  initMessage,
    "surprise.html": initSurprise
  };
  return map[path] || (() => {});
}

document.addEventListener("DOMContentLoaded", () => {
  fillPlaceholders();
  ensureContainers();
  document.body.classList.add("page-enter");
  setTimeout(() => document.body.classList.remove("page-enter"), 1100);

  // If running inside the index-frame.html wrapper, the OUTER frame handles music.
  // We'll still render the inner button but clicking it will postMessage to parent.
  const inFrame = (function(){
    try { return sessionStorage.getItem('sidd_frame_mode') === '1' || window.top !== window.self; }
    catch (e) { return window.top !== window.self; }
  })();

  buildMusicButton(inFrame);
  startSparklesAmbient();
  startAmbientLoops();

  if (!inFrame) {
    // 1) Try to resume music immediately. Browser might allow it only if
    //    user already granted permission on a previous page (modern Chrome/Edge do).
    resumeMusic();

    // 2) Fallback global one-shot listener: the FIRST click/key/tap anywhere on ANY
    //    page (gift, code, candle, photo, button) triggers resume — so music
    //    carries across ALL subsequent pages perfectly.
    let gestureResumed = false;
    function resumeOnGesture() {
      if (gestureResumed) return;
      gestureResumed = true;
      resumeMusic();
      window.removeEventListener("click",    resumeOnGesture, true);
      window.removeEventListener("keydown",  resumeOnGesture, true);
      window.removeEventListener("touchstart", resumeOnGesture, true);
    }
    window.addEventListener("click",    resumeOnGesture, true);
    window.addEventListener("keydown",  resumeOnGesture, true);
    window.addEventListener("touchstart", resumeOnGesture, true);
  }

  const pageInit = detectPage();
  try { pageInit(); } catch (e) { console.error("Page init error:", e); }
});
