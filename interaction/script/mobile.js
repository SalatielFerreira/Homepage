function mostrarImagem(src) {
    document.getElementById("imagemMaior").src = src;
}

// Elementos do DOM
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

// Abrir o modal
openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

// Fechar o modal
closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

// Fechar clicando fora do modal
window.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
