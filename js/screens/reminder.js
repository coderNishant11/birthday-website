qs("#surprise-btn").addEventListener("click", () => {
  showScreen("cake-screen");
  qs("#cake").classList.remove("decorated", "blown");
  qs("#cake-action-btn").dataset.state = "decorate";
  qs("#cake-action-btn").disabled = false;
  qs("#cake-action-btn").textContent = "Decorate ✨";
  qs("#cake-instruction").textContent =
    "Tap decorate to bring the cake to life.";
});
