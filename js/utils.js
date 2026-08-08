function qs(s, p = document) {
  return p.querySelector(s);
}
function qsa(s, p = document) {
  return [...p.querySelectorAll(s)];
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function random(min, max) {
  return Math.random() * (max - min) + min;
}
function randomInt(min, max) {
  return Math.floor(random(min, max + 1));
}
function createElement(tag, cls = "") {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}
function showScreen(id) {
  qsa(".screen").forEach((s) => s.classList.remove("active"));
  qs("#" + id).classList.add("active");
}
