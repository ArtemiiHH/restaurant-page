// Import Home Banner image
import homeImage from "../images/shawarma.jpg";

// Create homepage function
function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  // Title
  const heading = document.createElement('h1');
  heading.classList.add('home-title');
  heading.textContent = 'Welcome to the best Shawarma in the Mediterranean!';

  // Banner image
  const img = document.createElement('img');
  img.classList.add('home-img');
  img.src = homeImage;
  img.alt = 'A tasty, spicy shawarma with chicken, tomato and letuce.';

  // Description paragraph
  const paragraph = document.createElement('p');
  paragraph.textContent = 'The best shawarma in the Mediterranean is found here - tender meat roasted to perfection, wrapped in warm pita with garlic sauce and pickles, delivering pure, flavorful bliss.';

  // Append items
  home.append(heading, img, paragraph);
  content.appendChild(home);
  return home;
};

// Export function
export default createHome;