// Create about function
function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const heading = document.createElement('h2');
  heading.classList.add('contact-title');
  heading.textContent = 'Contact us';

  const paragraph = document.createElement('p');
  paragraph.innerHTML = "Number: +357 99080877 <br> Email: example@gmail.com <br> Address: Random Street 23, 7658";

  contact.append(heading, paragraph);
  content.appendChild(contact);
  return contact;
};

// Export function
export default createContact;