const cake = qs("#cake"),
  cakeButton = qs("#cake-action-btn"),
  cakeInstruction = qs("#cake-instruction"),
  candleAudio = qs("#candle-audio");

  function lightCandlesOneByOne() {
    const flames = cake.querySelectorAll(".flame");

    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.classList.add("lit");
        }, index * 700);
    });
}

// cakeButton.addEventListener("click", async () => {
//   const state = cakeButton.dataset.state || "decorate";
//   if (state === "decorate") {
//     cakeButton.disabled = true;
//     cakeButton.textContent = "Decorating... ✨";
//     document.getElementById("cake-title").textContent = "Your cake is ready! 🎂";
//     cakeInstruction.textContent = "Adding a little birthday magic...";
//     cake.classList.add("decorated");
//     await sleep(1200);
   
//     cakeButton.disabled = false;
//     cakeButton.dataset.state = "blow";
//     cakeButton.textContent = "Blow the Candles 🕯️";
//     cakeInstruction.textContent = "Make a wish... then blow out the candles!";
//     return;
//   }
//   if (state === "blow") {
//     cakeButton.disabled = true;
//     cakeButton.textContent = "Blow... 💨";
//     cakeInstruction.textContent = "Make your wish... ✨";
//     cake.classList.add("blown");
//     await sleep(750);
//     cakeButton.textContent = "Celebrating... 🎉";
//     confettiBurst();
//     await sleep(500);
//     showScreen("celebration-screen");
//     await sleep(100);
//     startStars(75);
//     releaseBalloons(24);
//     releaseHearts(30);
//   }
// });

cakeButton.addEventListener("click", async () => {

    const state = cakeButton.dataset.state || "decorate";

    if (state === "decorate") {

        cakeButton.disabled = true;
        cakeButton.textContent = "Decorating... ✨";
        
        document.getElementById("cake-heading").textContent="✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦"
        document.getElementById("cake-heading").classList.add("sparkle-icon")
        document.getElementById("cake-title").textContent =
            "Your cake is ready! 🎂";

        cakeInstruction.textContent =
            "Adding a little birthday magic...";

        // Add cake decorations
        cake.classList.add("decorated");

        // Light 5 candles one by one
        lightCandlesOneByOne();

        // Wait until all candles have been lit
        await sleep(3500);

        cakeButton.disabled = false;
        cakeButton.dataset.state = "blow";
        cakeButton.textContent = "Blow the Candles 🕯️";
        cakeInstruction.textContent =
            "Make a wish... then blow out the candles!";

        return;
    }

    if (state === "blow") {

        cakeButton.disabled = true;
        cakeButton.textContent = "Blowing... 💨";
        cakeInstruction.textContent =
            "Make your wish... ✨";
        candleAudio.currentTime = 0;
        candleAudio.play().catch(() => {});

        cake.classList.add("blown");

        await sleep(750);

        cakeButton.textContent = "Celebrating... 🎉";

        confettiBurst();

        await sleep(500);

        showScreen("celebration-screen");

        await sleep(100);

        startStars(75);
        releaseBalloons(24);
        releaseHearts(30);
    }
});
