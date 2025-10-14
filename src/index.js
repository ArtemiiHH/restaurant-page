// This file works as a "barrel", so it acts as a single entry point for modules.

import "./styles.css";
import loadPage from "./js/loadPage";

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

loadPage();