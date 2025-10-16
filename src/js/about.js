// Import About banner image
import aboutImage from "../images/shawarma-cook.jpg";

// Create about function
function createAbout() {
  const about = document.createElement('div');
  about.classList.add('about');

  const heading = document.createElement('h2');
  heading.classList.add('about-title');
  heading.textContent = 'About us';

  const img = document.createElement('img');
  img.classList.add('about-img');
  img.src = aboutImage;
  img.alt = 'A cook cutting vegetables for a crispy Shawarma.';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'At the heart of our kitchen, passion meets precision. Our chef transforms fresh, vibrant vegetables and carefully selected ingredients into a visually stunning and delicious shawarma. Every cut, every spice, every moment in the kitchen is dedicated to creating a culinary experience that\'s as beautiful as it is flavorful';

  about.append(heading, img, paragraph);
  content.appendChild(about);
  return about;
};

// Export function
export default createAbout;