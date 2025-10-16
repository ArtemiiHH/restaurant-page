import createHome from "./home";
import createAbout from "./about";
import createContact from "./contact";

function loadPage() {
  const content = document.querySelector("#content");

  const btnHome = document.querySelector(".tab-home");
  const btnAbout = document.querySelector(".tab-about");
  const btnContact = document.querySelector(".tab-contact");

  content.innerHTML = '';
  content.appendChild(createHome());

  btnHome.addEventListener("click", () => {
    content.innerHTML = "";
    createHome();
  });

  btnAbout.addEventListener("click", () => {
    content.innerHTML = "";
    createAbout();
  });

  btnContact.addEventListener("click", () => {
    content.innerHTML = "";
    createContact();
  });
}

export default loadPage;
