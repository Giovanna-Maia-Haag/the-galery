window.addEventListener('load', () => {
    const favoritosContainer = document.querySelector('.container-obras-favoritas');
  
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  
    favoritos.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'obra favorita';
      img.classList.add('container-obras-favoritas__obra');
  
      // Adiciona o evento de clique diretamente na imagem criada
      img.addEventListener('click', () => {
        fullscreenImg.src = img.src;
        fullscreen.style.display = 'flex';
      });
      
      favoritosContainer.appendChild(img);
    });
  
    const fullscreenImg = document.querySelector('.fullscreenImg');
    const fullscreen = document.querySelector('.fullscreen');
  });