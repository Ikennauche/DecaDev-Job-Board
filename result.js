let DATABASE_URI = 'http://localhost:3000/contacts';
let EDIT_CONTACT;

let form = document.querySelector('form');
let submitNewContact = document.querySelector('#submit-new-contact');
let submitEditedContact = document.querySelector('#submit-edited-contact');
submitEditedContact.style.display = 'hidden';

// get data from our backend
let getContact = async () => {
  let response = await fetch(DATABASE_URI);
  let contacts = await response.json();
  populateContacts(contacts);

  // get button actions from page and register event listeners
  let editContacts = document.querySelectorAll('#edit');

  let deleteContacts = document.querySelectorAll('#delete');

  // register button actions
  editContacts.forEach(button =>
    button.addEventListener('click', ({ path }) => {
      submitNewContact.style.display = 'none';
      submitEditedContact.style.display = 'unset';

      let contact = JSON.parse(path[2].dataset.contact);
      for (let key in form.elements) {
        let inputElement = form.elements[key];
        inputElement.value = contact[inputElement.name];
      }

      EDIT_CONTACT = contact;
    })
  );

  deleteContacts.forEach(button =>
    button.addEventListener('click', async ({ path }) => {
      let contact = path[2];
      let { id } = JSON.parse(path[2].dataset.contact);
      contact.remove();

      await fetch(`${DATABASE_URI}/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
    })
  );
};

// get data and populate our page with data
let populateContacts = contacts => {
  let formatedContacts = contacts.map(formatContact);
  let displayContacts = document.querySelector('.display-contacts');

  displayContacts.innerHTML += formatedContacts.join('');
};

// get single contact data and formate it
let formatContact = contact => {
  let { title, description, location } = contact;
  return `
  <div class='contact' data-contact=${JSON.stringify(contact)}>
  <div class="results__display-wrapper">
      <div> Job Title: ${title} </div>
      <div> Job Description: ${description}</div>
      <div> Job Location: ${location}</div>
  </div>
      <div class='edit-contact'>
  
            <button class="contact-form__button" id='apply' onclick="location.href='./apply.html'" value="Signup" >Apply Now</button>
            
      </div>
  </div>
  `;
};

submitNewContact.addEventListener('click', async () => {
  event.preventDefault();
  let contact = {};

  for (let key in form.elements) {
    if (form.elements.hasOwnProperty(key)) {
      let inputElement = form.elements[key];
      if (inputElement['name'] && inputElement.value) {
        contact[inputElement['name']] = inputElement.value;
      }
    }
  }

  if (!Object.values(contact).length) return;
console.log("contact", contact)
  let response = await fetch(DATABASE_URI, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...contact })
  });

  await response.json();
});

submitEditedContact.addEventListener('click', async () => {
  event.preventDefault();
  submitNewContact.style.display = 'unset';

  let contact = {};

  for (let key in form.elements) {
    if (form.elements.hasOwnProperty(key)) {
      let inputElement = form.elements[key];
      if (inputElement['name'] && inputElement.value) {
        contact[inputElement['name']] = inputElement.value;
      }
    }
  }

  if (!Object.values(contact).length) return;

  let response = await fetch(`${DATABASE_URI}/${EDIT_CONTACT.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...contact })
  });

  await response.json();
});

$(document).ready(getContact);
