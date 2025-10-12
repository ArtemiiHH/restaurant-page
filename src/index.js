// This file works as a "barrel", so it acts as a single entry point for modules.

import "./styles.css";

import loadHome from "./js/home";

window.addEventListener("load", () => {
  loadHome();
});
