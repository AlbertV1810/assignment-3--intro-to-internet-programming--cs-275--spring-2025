const showModalButton = document.querySelector('#js-triggers .show-modal');
const modal = document.querySelector('.modal');
const modalBackground = document.querySelector('.modal-background');

const showModal = () => {
  modal.style.display = `block`;
  modalBackground.style.display = `block`;
};

const hideModal = () => {
  modal.style.display = `none`;
  modalBackground.style.display = `none`;
};

showModalButton.addEventListener('click', showModal);
modalBackground.addEventListener('click', hideModal);
document.addEventListener('keydown', (event) => {
  if (event.key === `Escape`) hideModal();
});
