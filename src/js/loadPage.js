import createHome from "./home";
import createAbout from "./about";
import createContact from "./contact";

function loadPage() {
  const content = document.querySelector('#content');

  const btnHome = document.querySelector('.tab-home');
  const btnAbout = document.querySelector('.tab-about');
  const btnContact = document.querySelector('.tab-contact');

  btnHome.addEventListener('click', () => {
    createHome();
  });

  btnAbout.addEventListener('click', () => {
    createAbout();
  });

  btnContact.addEventListener('click', () => {
    createContact();
  });
};

export default loadPage;