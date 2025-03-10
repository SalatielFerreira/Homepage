
function mostrarImagem(src) {
    document.getElementById("imagemMaior").src = src;
}

const colorButtons = document.querySelectorAll('.color-btn');
const product = document.getElementById('product');

// Adiciona o evento de clique em cada botão
colorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove o "selected" de todos os botões
    colorButtons.forEach(b => b.classList.remove('selected'));

    // Adiciona o "selected" no botão clicado
    btn.classList.add('selected');

    // Altera a cor do produto
    const color = btn.getAttribute('data-color');
    product.style.backgroundColor = color;
  });
});

const sizeButtons = document.querySelectorAll('.size-btn');
const sizeDisplay = document.getElementById('selected-size');

// Evento de clique para selecionar o tamanho
sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove a seleção de todos os botões
    sizeButtons.forEach(b => b.classList.remove('selected'));

    // Adiciona a classe 'selected' ao botão clicado
    btn.classList.add('selected');

    // Atualiza o texto com o tamanho escolhido
    const size = btn.getAttribute('data-size');
    sizeDisplay.textContent = `Tamanho selecionado: ${size}`;
  });
});

const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const quantityDisplay = document.getElementById('quantity');
    const addBtn = document.getElementById('add-btn');

    let quantity = 1;

    decreaseBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });

    increaseBtn.addEventListener('click', () => {
      quantity++;
      quantityDisplay.textContent = quantity;
    });

    addBtn.addEventListener('click', () => {
      alert(`Você adicionou ${quantity} item(s)!`);
      // Aqui você pode adicionar a lógica de adicionar ao carrinho ou outro processo
    });