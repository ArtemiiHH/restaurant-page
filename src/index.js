// This file works as a "barrel", so it acts as a single entry point for modules.

import "./styles.css";

import loadPage from "./js/loadPage";

window.addEventListener("load", () => {
  loadPage();
});