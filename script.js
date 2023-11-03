const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mousemove", (event) => {
  const rect = btnEl.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
