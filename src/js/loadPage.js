import createHome from "./home";
import createAbout from "./about";
import createContact from "./contact";

function loadPage() {
  // window.addEventListener("load", () => {
  //   createHome();
  // });

  document.querySelector('.tab-home').addEventListener('click', () => {
    createHome();
  });

  document.querySelector('.tab-about').addEventListener('click', () => {
    createAbout();
  });

  document.querySelector('.tab-contact').addEventListener('click', () => {
    createContact();
  });
};

export default loadPage;