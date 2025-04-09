const showModalButton = document.querySelector('#js-triggers a[href="#"]'); // "Show Modal" link
const modalPanel = document.querySelector('.modal-panel'); // Modal background layer
const modalContentPane = document.querySelector('.modal-content-pane'); // Modal content container

const showModal = () => {
  modalPanel.style.display = `block`;
  console.log('Modal should be visible now');
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
