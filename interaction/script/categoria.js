const prevBtn = document.getElementById('prevBtn'); 
    const nextBtn = document.getElementById('nextBtn');
    const pageButtons = document.querySelectorAll('.page-btn');
    let currentPage = 1;
    const totalPages = 7;

    // Função para atualizar o estado dos botões
    function updatePagination() {
      // Atualiza a classe 'active'
      pageButtons.forEach((btn, index) => {
        if (index + 1 === currentPage) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Ativa/desativa os botões Previous e Next
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
    }

    // Eventos para botões numéricos
    pageButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        currentPage = index + 1;
        updatePagination();
      });
    });

    // Evento para botão Previous
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });

    // Evento para botão Next
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });


    const minSlider = document.getElementById('min');
    const maxSlider = document.getElementById('max');
    const rangeTrack = document.getElementById('range-track');
    const minValueLabel = document.getElementById('min-value');
    const maxValueLabel = document.getElementById('max-value');
    const minGap = 60;
    const sliderContainer = document.querySelector('.slider-container');

    function updateRange() {
      let minVal = parseInt(minSlider.value);
      let maxVal = parseInt(maxSlider.value);

      if (maxVal - minVal < minGap) {
        if (event.target.id === "min") {
          minSlider.value = maxVal - minGap;
          minVal = maxVal - minGap;
        } else {
          maxSlider.value = minVal + minGap;
          maxVal = minVal + minGap;
        }
      }

      const percentMin = (minVal / 500) * 100;
      const percentMax = (maxVal / 500) * 100;

      // Atualiza barra azul entre os pontos
      rangeTrack.style.left = percentMin + "%";
      rangeTrack.style.width = (percentMax - percentMin) + "%";

      // Atualiza os valores flutuantes
      minValueLabel.innerText = "$" + minVal;
      maxValueLabel.innerText = "$" + maxVal;

      const containerWidth = sliderContainer.offsetWidth;
      minValueLabel.style.left = (containerWidth * percentMin / 100) + "px";
      maxValueLabel.style.left = (containerWidth * percentMax / 100) + "px";
    }

    // Eventos dos sliders
    minSlider.addEventListener('input', updateRange);
    maxSlider.addEventListener('input', updateRange);

    // Inicialização
    updateRange();

    