function darkmode() {
  const darkmodeBtn = document.querySelector('.darkmodebtn');
  const body = document.body;

  darkmodeBtn.addEventListener('click', () => {
    body.classList.toggle('darkmode');

  // Salva no localStorage o tema atual
  if (body.classList.contains('darkmode')) {
    localStorage.setItem('tema', 'dark');
  } else {
    localStorage.setItem('tema', 'light');
  }
  });
}

  // Recupera o tema salvo ao carregar a página
window.addEventListener('load', () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'dark') {
    document.body.classList.add('darkmode');
  }
});

window.addEventListener('load', darkmode);


//----------------------------------------------------------------------------------------------------------
function cardAmpliado() {
    const botoesLerMais = document.querySelectorAll('.button-ler-mais');
    
    botoesLerMais.forEach(botao => {
      botao.addEventListener('click', () => {
        // Pega o card relacionado ao botão clicado
        const card = botao.closest('.secao-sobre');
  
        // Elemento que deve desaparecer
        const textoCard = card.querySelector('.secao-sobre__card');
        // Elemento que deve aparecer
        const afterLerMais = card.querySelector('.after-ler-mais');
  
        // Remove o textoCard (esconde)
        if (textoCard) {
          textoCard.classList.add('hidden'); // você pode criar no CSS: .hidden { display: none; }
        }
  
        // Adiciona a classe para mostrar after-ler-mais
        if (afterLerMais) {
          afterLerMais.classList.remove('hidden');
        }
      });
    });
  };
  // Inicia a função quando a página carrega
  window.addEventListener('load', cardAmpliado);
 
  
//-----------------------------------------------------------------------------------------------------------

    function botaoDoX() {
    const afterSecao = document.querySelector(".after-ler-mais");
    const afterImg = document.getElementById("after-img");
    const afterTexto = document.getElementById("after-texto");
    const afterBtn = document.getElementById("after-btn");

    // Seleciona todos os botões "ler mais"
    const botoesLerMais = document.querySelectorAll(".button-ler-mais");
  
    // Para cada botão
    botoesLerMais.forEach(botao => {
      botao.addEventListener("click", () => {
        // Seleciona o card correspondente
        const card = botao.closest(".secao-sobre__card");
        const texto = card.querySelector(".secao-texto-card__texto").innerText;
        const imagem = card.querySelector(".card__card-autor").src;
  
        // Atualiza o conteúdo da afterSecao
        afterImg.src = imagem;
        afterTexto.innerText = texto;
  
        // Mostra a afterSecao
        afterSecao.style.display = "flex";
      });
    });
  
    // Fecha o afterSecao ao clicar no botão "X"
    afterBtn.addEventListener("click", () => {
      afterSecao.style.display = "none";
      afterImg.src = "";
      afterTexto.innerText = "";

      const cards = document.querySelectorAll(".secao-sobre__card.hidden");
      cards.forEach(card => {
      card.classList.remove("hidden");
    });
    });
    }
   window.addEventListener('load', botaoDoX);
//----------------------------------------------------------------------------------------------------------

function botaoSelecionar() {

    const botaoDeSelecionar = document.getElementById('select-artist__button');

    botaoDeSelecionar.addEventListener('click', () => {

        const artistaSelecionado = document.getElementById('artist-selected').value;
        const todosOsArtistas = document.querySelectorAll('.secao-galeria div');
    
       if (artistaSelecionado == 'Todos') {
           todosOsArtistas.forEach(img => {img.classList.remove('hidden')});

       } else {
           todosOsArtistas.forEach(img => img.classList.add('hidden'));
           const artistas = {
               'Vincent Van Gogh' : '.gogh',
               'Edvard Munch' : '.ed',
               'Claude Monet' : '.monet',
               'Leonardo da Vinci' : '.vinci',
               'Eugene Delacroix' : '.eugene'
           } 
           const artistaMostrar = artistas[artistaSelecionado];
           if (artistaMostrar) {
            document.querySelectorAll(artistaMostrar).forEach(img => {img.classList.remove('hidden');
            });
           }
       }
    });
}
window.addEventListener('load', botaoSelecionar);
// ---------------------------------------------------------------------------------------------------------

// GALERIA ONCLICK IMAGENS

const imgClicada = document.querySelectorAll('.secao-galeria img');
const fullscreenImg = document.querySelector('.fullscreenImg');
const fullscreen = document.querySelector('.fullscreen');
const fullscreenX = document.querySelector('.fullscreenX');

function obraClicada() {

     imgClicada.forEach(img => {img.addEventListener('click', (e) => {
      if (e.target.classList.contains('coracao-png')) {
        // Se clicou no botão do coração, sai fora
        return;
      }
      fullscreenImg.src = img.src;
      fullscreen.style.display = 'flex';
     });
    });
  }
fullscreenX.addEventListener ('click', () => {
  fullscreen.style.display = 'none';
  fullscreenImg.src = '';
});

window.addEventListener('load', obraClicada);
//-----------------------------------------------------------------------------------------------------------

// ONCLICK NO CORACAO 

const coracoes = document.querySelectorAll('.coracao-png');

function atualizarCoracoesFavoritos() {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  coracoes.forEach(coracao => {
    // Acha a imagem associada a esse coração
    const imagemObra = coracao.closest('.secao-galeria__obras').querySelector('img');

    if (favoritos.includes(imagemObra.src)) {
      coracao.src = '../coracaoVermelho.png';
    } else {
      coracao.src = '../coracao.png';
    }
  });
}

function coracaoClick() {
  coracoes.forEach(coracao => {
    coracao.addEventListener('click', () => {
      const imagemObra = coracao.closest('.secao-galeria__obras').querySelector('img');
      let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

      if (coracao.src.endsWith('coracao.png')) {
        coracao.src = '../coracaoVermelho.png';
        favoritos.push(imagemObra.src);
      } else {
        coracao.src = '../coracao.png';
        favoritos = favoritos.filter(src => src !== imagemObra.src);
      }
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    });
  });
}

window.addEventListener('load', () => {
  atualizarCoracoesFavoritos();
  coracaoClick();
});