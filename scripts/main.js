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
//
const showMenuButton = document.querySelector('#js-triggers li:nth-child(1) a');
const navMenu = document.querySelector('nav');

const showMenu = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth > 736) {
    navMenu.style.display = `block`;
  } else {
    navMenu.style.display = `block`;
    navMenu.classList.add('side-tray');
  }
};


const hideMenu = () => {
  navMenu.style.display = `none`;
  navMenu.classList.remove('side-tray');
};

showMenuButton.addEventListener('click', (event) => {
  event.preventDefault();
  const isVisible = navMenu.style.display === `block`;
  if (isVisible) {
    hideMenu();
  } else {
    showMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 736) {
    navMenu.style.display = `none`;
    navMenu.classList.remove('side-tray');
  } else {
    navMenu.style.display = `none`;
  }
});
