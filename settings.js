// settings.js (DR1TRA Settings Loader)
window.addEventListener("DOMContentLoaded", () => {
  const $ = id => document.getElementById(id);

  // ✅ Background
  const bgURL = localStorage.getItem("bg");
  if (bgURL) document.body.style.backgroundImage = `url('${bgURL}')`;

  // ✅ Clock & Weather toggles
  const showClock = JSON.parse(localStorage.getItem("showClock") ?? "true");
  const showWeather = JSON.parse(localStorage.getItem("showWeather") ?? "true");
  if (!showClock && $("clock")) $("clock").style.display = "none";
  if (!showWeather && $("weather")) $("weather").style.display = "none";

  // ✅ Compact mode
  if (JSON.parse(localStorage.getItem("compact") ?? "false")) {
    document.body.style.fontSize = "14px";
  }

  // ✅ Blur UI
  if (JSON.parse(localStorage.getItem("blurUI") ?? "false")) {
    document.body.style.backdropFilter = "blur(6px)";
  }

  // ✅ Ghost Mode
  if (JSON.parse(localStorage.getItem("ghostMode") ?? "false")) {
    document.body.style.opacity = "0.75";
  }

  // ✅ Fix Search Bar Function
  const searchInput = $("searchInput");
  const overlay = $("searchOverlay");
  const status = $("searchStatus");
  if (searchInput && overlay && status) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        let val = searchInput.value.trim();
        if (!val) return;

        overlay.style.display = "flex";
        status.innerText = "Loading...";

        setTimeout(() => {
          status.innerText = "✅ Success!";
          setTimeout(() => {
            if (val.startsWith("http")) {
              window.location.href = val;
            } else {
              const google = `https://www.google.com/search?q=${encodeURIComponent(val)}`;
              window.location.href = google;
            }
          }, 400);
        }, 1000);
      }
    });
  }
});