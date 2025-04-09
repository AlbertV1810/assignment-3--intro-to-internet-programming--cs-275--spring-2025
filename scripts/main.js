const modalTrigger = document.querySelector('#js-triggers li a[href="#"]:nth-child(2)');
const modalPanel = document.querySelector('.modal-panel');

modalTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  modalPanel.style.display = 'block';
});

modalPanel.addEventListener('click', (e) => {
  if (e.target === modalPanel) {
    modalPanel.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalPanel.style.display = 'none';
  }
});
