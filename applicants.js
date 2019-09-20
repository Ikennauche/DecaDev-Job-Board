const DATABASE_URI_A = 'http://localhost:3000/applicants';

const form2 = document.querySelector('form');
const submitNewApplicant = document.querySelector('#applicants');
function myFunction2() {
submitNewApplicant.addEventListener('click', async (event) => {
  event.preventDefault();
  const applicants = {};

  for (const key in form2.elements) {
    if (form2.elements.hasOwnProperty(key)) {
      const inputElement = form2.elements[key];
      if (inputElement['name'] && inputElement.value) {
        applicants[inputElement['name']] = inputElement.value;
      }
    }
  }
console.log (applicants);
  if (!Object.values(applicants).length) return;

  await fetch(DATABASE_URI_A, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...applicants })
  });

});
}
$(document).ready(getApplicants);
