const showModalButton = document.querySelector('#js-triggers li:nth-child(2) a');
const modalPanel = document.querySelector('.modal-panel');
const modalContentPane = document.querySelector('.modal-content-pane');

const showModal = () => {
  modalPanel.style.display = `block`;
};

const hideModal = (event) => {
  if (event.target === modalPanel || event.key === `Escape`) {
    modalPanel.style.display = `none`;
  }
};

showModalButton.addEventListener('click', (event) => {
  event.preventDefault();
  showModal();
});
modalPanel.addEventListener('click', hideModal);
document.addEventListener('keydown', hideModal);
