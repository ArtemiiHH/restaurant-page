import createHome from "./home";
import createAbout from "./about";
import createContact from "./contact";

function loadPage() {
  const content = document.querySelector("#content");

  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  const btnHome = document.querySelector(".tab-home");
  const btnAbout = document.querySelector(".tab-about");
  const btnContact = document.querySelector(".tab-contact");

  nav.append(btnHome, btnAbout, btnContact);
  header.appendChild(nav);
  content.appendChild(header);
  content.appendChild(createHome());

  btnHome.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(header);
    createHome();
  });

  btnAbout.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(header);
    createAbout();
  });

  btnContact.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(header);
    createContact();
  });
}

export default loadPage;
