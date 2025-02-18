// script.js

// Função para manipular o clique no ícone do lupa mobile
document.querySelector('.icons p:nth-child(1)').addEventListener('click', function () {
    alert('Buscar Produto.');
});

// Função para manipular o clique no ícone do carrinho
document.querySelector('.icons span:nth-child(2)').addEventListener('click', function () {
    alert('Carrinho de compras clicado! Adicione produtos aqui.');
});

// Função para manipular o clique no ícone de notificações
document.querySelector('.icons span:nth-child(3)').addEventListener('click', function () {
    alert('Usuário clicado! Faça Login aqui.');
});

// Função para manipular a busca
document.querySelector('nav input[type="text"]').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value.trim();
        if (searchTerm) {
            alert(`Você buscou por: ${searchTerm}`);
            this.value = ''; // Limpa o campo de busca
        } else {
            alert('Por favor, insira um termo de busca.');
        }
    }
});

// Função para manipular o botão "Shop Now" na seção hero
document.querySelector('.hero-content button','.heromob-content button').addEventListener('click', function () {
    alert('Redirecionando para a página de produtos...');
    // Aqui você pode adicionar o redirecionamento para a página de produtos
});

// Função para manipular o botão "View All" na seção de novos produtos
document.querySelector('.new-arrivals button').addEventListener('click', function () {
    alert('Redirecionando para a página de todos os novos produtos...');
    // Aqui você pode adicionar o redirecionamento para a página de novos produtos
});

// Função para manipular o botão "View All" na seção de produtos mais vendidos
document.querySelector('.top-selling button').addEventListener('click', function () {
    alert('Redirecionando para a página de todos os produtos mais vendidos...');
    // Aqui você pode adicionar o redirecionamento para a página de produtos mais vendidos
});

// Função para manipular o botão de inscrição na newsletter
document.querySelector('.newsletter button').addEventListener('click', function () {
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const email = emailInput.value.trim();

    if (email && validateEmail(email)) {
        alert(`Obrigado por se inscrever! Um e-mail foi enviado para ${email}.`);
        emailInput.value = ''; // Limpa o campo de e-mail
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função para adicionar interatividade aos estilos de vestuário
document.querySelectorAll('.style-item').forEach(item => {
    item.addEventListener('click', function () {
        alert(`Você selecionou o estilo: ${this.textContent}`);
        // Aqui você pode adicionar a lógica para filtrar produtos por estilo
    });
});

// Função para exibir detalhes do produto ao clicar em um item
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', function () {
        const productName = this.querySelector('p').textContent;
        alert(`Você clicou no produto: ${productName}`);
        // Aqui você pode adicionar o redirecionamento para a página do produto
    });
});

function hideIcon() {
    document.getElementById("search-icon").style.opacity = "0";
}

function showIcon() {
    let input = document.querySelector(".search-container input");
    if (input.value === "") {
        document.getElementById("search-icon").style.opacity = "1";
    }
}

    document.addEventListener("DOMContentLoaded", function () {
        const carousels = document.querySelectorAll(".carousel-container");
    
        carousels.forEach((carouselContainer) => {
            const carousel = carouselContainer.querySelector(".carousel");
            let index = 0;
            const totalSlides = carousel.children.length;
    
            // Troca automática de slides
            function nextSlide() {
                index = (index + 1) % totalSlides;
                updateCarousel();
            }
    
            function updateCarousel() {
                const offset = -index * 100; // Move o carrossel
                carousel.style.transform = `translateX(${offset}%)`;
            }
    
            setInterval(nextSlide, 30000); // Muda de slide a cada 30 segundos
    
            // Implementação do toque (swipe) para mobile
            let startX = 0;
            let endX = 0;
    
            carouselContainer.addEventListener("touchstart", (e) => {
                startX = e.touches[0].clientX;
            });
    
            carouselContainer.addEventListener("touchend", (e) => {
                endX = e.changedTouches[0].clientX;
                if (startX > endX + 50) {
                    index = (index + 1) % totalSlides; // Próximo slide
                } else if (startX < endX - 50) {
                    index = (index - 1 + totalSlides) % totalSlides; // Slide anterior
                }
                updateCarousel();
            });
        });
    });
    
    // Função para manipular o botão "Shop Now" na seção hero
document.querySelector('.heromob-content button').addEventListener('click', function () {
    alert('Redirecionando para a página de produtos...');
    // Aqui você pode adicionar o redirecionamento para a página de produtos
});

// Função para manipular o botão "View All" na seção de novos produtos
document.querySelector('.new-arrivalsmob button').addEventListener('click', function () {
    alert('Redirecionando para a página de todos os novos produtos...');
    // Aqui você pode adicionar o redirecionamento para a página de novos produtos
});

// Função para manipular o botão "View All" na seção de produtos mais vendidos
document.querySelector('.top-sellingmob button').addEventListener('click', function () {
    alert('Redirecionando para a página de todos os produtos mais vendidos...');
    // Aqui você pode adicionar o redirecionamento para a página de produtos mais vendidos
});

let index = 0;
        const reviews = document.querySelector('.reviewsmob');
        const totalReviews = document.querySelectorAll('.reviewmob').length;
        
        document.getElementById('next').addEventListener('click', () => {
            index = (index + 1) % totalReviews;
            updateCarousel();
        });
        
        document.getElementById('prev').addEventListener('click', () => {
            index = (index - 1 + totalReviews) % totalReviews;
            updateCarousel();
        });
        
        function updateCarousel() {
            reviews.style.transform = `translateX(${-index * 100}%)`;
        }

        document.querySelector('.newslettermob button').addEventListener('click', function () {
            const emailInput = document.querySelector('.newslettermob input[type="email"]');
            const email = emailInput.value.trim();
        
            if (email && validateEmail(email)) {
                alert(`Obrigado por se inscrever! Um e-mail foi enviado para ${email}.`);
                emailInput.value = ''; // Limpa o campo de e-mail
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
