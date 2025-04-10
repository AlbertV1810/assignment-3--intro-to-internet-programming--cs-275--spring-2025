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

const showMenuButton = document.querySelector('#js-triggers li:nth-child(1) a');
const dropdownMenu = document.querySelector('.dropdown-menu');
const sideTray = document.querySelector('.side-tray');

const showMenu = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth > 736) {
    dropdownMenu.style.display = `block`;
    sideTray.style.display = `none`;
  } else {
    sideTray.style.display = `block`;
    dropdownMenu.style.display = `none`;
  }
};

const hideMenu = () => {
  dropdownMenu.style.display = `none`;
  sideTray.style.display = `none`;
};

showMenuButton.addEventListener('click', (event) => {
  event.preventDefault();
  showMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 736) {
    dropdownMenu.style.display = `none`;
  } else {
    sideTray.style.display = `none`;
  }
});
