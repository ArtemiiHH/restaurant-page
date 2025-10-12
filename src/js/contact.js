// Create about function
function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const heading = document.createElement('h2');
  heading.classList.add('contact-title');
  heading.textContent = 'Contact us';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Number: \n+357 99080877\n Email: \nexample@gmail.com\n Address: \nRandom Street 23, 7658';

  contact.append(heading, paragraph);
  return contact;
};

// Export function
export default createContact;