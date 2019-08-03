document.addEventListener('DOMContentLoaded', () => {
  const newCelebForm = document.querySelector('#new-celeb-form');
  newCelebForm.addEventListener('submit', handleNewCelebFormSubmit);
});

const handleNewCelebFormSubmit = function (event) {
  event.preventDefault();

  const celebListItem = createCelebListItem(event.target);
  const celebList = document.querySelector('#celeb-list');
  celebList.appendChild(celebListItem);

  event.target.reset();
}

const createCelebListItem = function (form) {
  const celebListItem = document.createElement('li');
  celebListItem.classList.add('celebrity');

  const firstName = document.createElement('h2');
  firstName.textContent = form.firstName.value;
  celebListItem.appendChild(firstName);

  const lastName = document.createElement('h2');
  lastName.textContent = form.lastName.value;
  celebListItem.appendChild(lastName);

  const occupation = document.createElement('h3');
  occupation.textContent = form.occupation.value;
  celebListItem.appendChild(occupation);

  const nationality = document.createElement('p');
  nationality.textContent = form.nationality.value;
  celebListItem.appendChild(nationality);

  return readingListItem;
}
