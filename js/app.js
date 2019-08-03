document.addEventListener('DOMContentLoaded', () => {
  const newCelebForm = document.querySelector('#new-celeb-form');
  newCelebForm.addEventListener('submit', handleNewCelebFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

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

  const firstName = document.createElement('h3');
  firstName.textContent = event.target.first_name.value
  celebListItem.appendChild(firstName);

  const lastName = document.createElement('h3');
  lastName.textContent = event.target.last_name.value;
  celebListItem.appendChild(lastName);

  const occupation = document.createElement('p');
  occupation.textContent = event.target.occupation.value;
  celebListItem.appendChild(occupation);

  const nationality = document.createElement('p');
  nationality.textContent = event.target.nationality.value;
  celebListItem.appendChild(nationality);

  return celebListItem;
}

const handleDeleteAllClick = function (event) {
  const celebList = document.querySelector('#celeb-list');
  celebList.innerHTML = '';
}
