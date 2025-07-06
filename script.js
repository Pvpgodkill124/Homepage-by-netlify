// script.js (DR1TRA Homepage v2) window.onload = () => { const $ = id => document.getElementById(id);

// Clock const updateClock = () => { const now = new Date(); $("clock").innerText = now.toLocaleTimeString(); } setInterval(updateClock, 1000); updateClock();

// Weather fetch("https://wttr.in/Purulia?format=%t+%C") .then(res => res.text()) .then(data => $("weather").innerText = "Weather: " + data) .catch(() => $("weather").innerText = "Weather: --");

// Notes const notes = $("notes"); notes.value = localStorage.getItem("notes") || ""; notes.addEventListener("input", () => { localStorage.setItem("notes", notes.value); });

// Search const searchInput = $("searchInput"); const overlay = $("searchOverlay"); const status = $("searchStatus");

searchInput.addEventListener("keydown", (e) => { if (e.key === "Enter") { let val = searchInput.value.trim(); if (!val) return;

overlay.style.display = "flex";
  status.innerText = "Loading...";

  setTimeout(() => {
    status.innerText = "✅ Success!";
    setTimeout(() => {
      if (val.startsWith("http")) {
        window.location.href = val;
      } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(val)}`;
      }
    }, 500);
  }, 1000);
}

});

// Creative Widget Effects const widgets = document.querySelectorAll('.widgetBtn'); widgets.forEach(btn => { btn.onclick = () => { const effect = btn.innerText; switch (effect) { case '🎮 FPS Mode': document.body.style.filter = "contrast(1.3) saturate(1.2)"; break; case '🧊 Frost Effect': document.body.style.backdropFilter = "blur(4px)"; break; case '🕶 Minimal View': document.querySelector('.apps').style.display = 'none'; $("notes").style.display = 'none'; break; case '🌈 RGB Shadow': document.body.style.boxShadow = "0 0 25px red, 0 0 25px blue"; break; case '👻 Ghost Mode': document.body.style.opacity = "0.7"; break; default: alert("Effect not found"); } } });

// Load saved background if custom (optional support) const bgURL = localStorage.getItem("bg"); if (bgURL) document.body.style.backgroundImage = url('${bgURL}'); };

