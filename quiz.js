const containerTelaInicialFinal = document.querySelector('.container-quiz__tela-visivel');
const container4Telas = document.querySelector('.container-quiz__telas4');
const texto4Telas = document.querySelector('.telas4__texto');
const textoAutorVencedor = document.querySelector('.tela-visivel__texto');
const botaoDaTelaInicial = document.querySelector('.tela-visivel__botao');

const botao1 = document.querySelector('.container-telas4__botao1');
const botao2 = document.querySelector('.container-telas4__botao2');
const botao3 = document.querySelector('.container-telas4__botao3');
const botao4 = document.querySelector('.container-telas4__botao4');

const containerPerguntas = document.querySelector('.telas4__container-telas4');

const array = [];
let etapa = 0;

function avancarEtapa(botaoClicado) {
  const valor = botaoClicado?.value;
  if (!valor) return;

  // Etapa 1
  if (etapa === 0) {
    if (valor === 'botao1') array.push(1);
    else if (valor === 'botao2') array.push(3);
    else if (valor === 'botao3') array.push(2);
    else array.push(4);

    texto4Telas.textContent = 'Qual estilo artístico abaixo você prefere?';
    botao1.style.backgroundImage = "url('../images/expressionismo.Quiz.webp')";
    botao2.style.backgroundImage = "url('../images/impressionismo.Quiz.webp')";
    botao3.style.backgroundImage = "url('../images/renascimento.Quiz.jpg')";
    botao4.style.backgroundImage = "url('../images/romantismo.Quiz.jpg')";

    botao2.classList.add('imagem-unica');
    botao3.classList.add('imagem-unica');
    botao4.classList.add('imagem-unica');
  }

  // Etapa 2
  else if (etapa === 1) {
    if (valor === 'botao1') array.push(3);
    else if (valor === 'botao2') array.push(2);
    else if (valor === 'botao3') array.push(4);
    else array.push(5);

    document.querySelectorAll('.texto-quiz-fase3').forEach(el => el.style.display = 'flex');

    texto4Telas.textContent = 'Qual estilo de obra prefere?';
    botao1.style.backgroundImage = "url('../images/quiz.Monet.jpg')";
    botao2.style.backgroundImage = "url('../images/quiz.Eug.jpg')";
    botao3.style.backgroundImage = "url('../images/quiz.vangogh.jpg')";
    botao4.style.backgroundImage = "url('../images.Vinci/Leonardo_da_Vinci_-_Annunciazione.jpg')";

    botao2.classList.remove('imagem-unica');
    botao3.classList.remove('imagem-unica');
    botao4.classList.remove('imagem-unica');
  }

  // Etapa 3
  else if (etapa === 2) {
    if (valor === 'botao1') array.push(2);
    else if (valor === 'botao2') array.push(5);
    else if (valor === 'botao3') array.push(1);
    else array.push(4);

    document.querySelectorAll('.texto-quiz-fase3').forEach(el => el.style.display = 'none');

    texto4Telas.textContent = 'A obra da Monalisa é a obra de arte mais conhecida da história. Se tivesse que escolher outra pra ser a mais famosa, qual dessas escolheria?';
    botao1.style.backgroundImage = "url('../images.Vinci/Leonardo_da_Vinci-Lady_with-an-Ermine.jpg')";
    botao2.style.backgroundImage = "url('../images.edvard/lossy-page-Edvard-Munch-The-Family-Thielska.jpg')";
    botao3.style.backgroundImage = "url('../images/eugene.quiz4.JPG')";
    botao4.style.backgroundImage = "url('../images-Gogh/Vincent-van-Gogh-Self-Portrait.jpg')";

    botao1.classList.add('imagem-unica');
    botao2.classList.add('imagem-unica');
    botao3.classList.add('imagem-unica');
    botao4.classList.add('imagem-unica');
  }

  // Etapa 4
  else if (etapa === 3) {
    if (valor === 'botao1') array.push(4);
    else if (valor === 'botao2') array.push(3);
    else if (valor === 'botao3') array.push(5);
    else array.push(1);

    texto4Telas.textContent = 'Escolha com base no melhor cenário de fundo';
    botao1.style.backgroundImage = "url('../images.edvard/Edvard-Munch-Anxiety.jpg')";
    botao2.style.backgroundImage = "url('../images.Monet/Monet.obra.Garden-at-Sainte-Adresse-1867.jpg')";
    botao3.style.backgroundImage = "url('../images-Gogh/Farmhouse-in-Provence-1888-Van-Gogh.jpg')";
    botao4.style.backgroundImage = "url('../images/eugene.quiz.5.jpg')";
  }
   // Etapa 5
  else if (etapa === 4) {
    if (valor === 'botao1') array.push(3);
    else if (valor === 'botao2') array.push(2);
    else if (valor === 'botao3') array.push(1);
    else array.push(5); 
   
    // TELA AUTOR ESCOLHIDO/GANHADOR

    containerPerguntas.style.display = 'none';
    botaoDaTelaInicial.classList.add('hidden');
    container4Telas.classList.add('hidden');
    containerTelaInicialFinal.classList.remove('hidden');
    // Pegando o autor que mais apareceu
    function autorMaisFrequente(array) {
        const contagem = {};
      
        // Conta a frequência de cada valor
        array.forEach(valor => {
          contagem[valor] = (contagem[valor] || 0) + 1;
        });
      
        let maisFrequente = []; // array com os mais votados
        let maiorContagem = 0;
      
        for (let valor in contagem) {
          if (contagem[valor] > maiorContagem) {
            maiorContagem = contagem[valor];
            maisFrequente = [valor]; // reinicia com o novo mais frequente
          } else if (contagem[valor] === maiorContagem) {
            maisFrequente.push(valor); // empate, adiciona ao array
          }
        }
      
        // Verifica se houve empate
         if (maisFrequente.length > 1) {
             return 'empate';
         }
        else {
        const autores = {
            '1': 'Vincent Van Gogh',
            '2': 'Claude Monet',
            '3': 'Edvard Munch',
            '4': 'Leonardo da Vinci',
            '5': 'Eugene Delacroix',
          };
          return autores[maisFrequente[0]];
        }
      }
    // Pegando o background do autor escolhido e salvando no localstorage
    function autorEscolhidosalvar() {
        const autor = autorMaisFrequente(array);
        localStorage.setItem('autorEscolhido', autor);
        const autorSalvo = localStorage.getItem('autorEscolhido');
    
      if (autorSalvo) {
        // Esconde telas intermediárias
        container4Telas.classList.add('hidden');
        containerPerguntas.style.display = 'none';
        botaoDaTelaInicial.classList.add('hidden');

        // Mostra tela final
        containerTelaInicialFinal.classList.remove('hidden');
        textoAutorVencedor.textContent = 'O autor que você mais se identifica é ' + autorSalvo + '!';
    
          // Aplica o background do autor
          function backgroundDoAutorEscolhido () {
            if (autorSalvo === 'Vincent Van Gogh') {
              containerTelaInicialFinal.style.backgroundImage = "url('../images-Gogh/Vincent-van-Gogh-Self-Portrait.jpg')";
              } else if (autorSalvo === 'Claude Monet') {
               containerTelaInicialFinal.style.backgroundImage = "url('../images.Monet/Monet.obra.Self-Portrait-1917.jpg')";
              } else if (autorSalvo === 'Edvard Munch') {
               containerTelaInicialFinal.style.backgroundImage = "url('../images.edvard/Edvard-Munch-Self-Portrait.jpg')";
              } else if (autorSalvo === 'Leonardo da Vinci') {
               containerTelaInicialFinal.style.backgroundImage = "url('../images.Vinci/RETRATOVINCI.jpg')";
              } else if (autorSalvo === 'Eugene Delacroix') {
               containerTelaInicialFinal.style.backgroundImage = "url('../images.edvard/Edvard-Munch-Self-Portrait.jpg')";
              } else {
                 containerTelaInicialFinal.style.backgroundImage = "url('../images.Vinci/Leonardo_da_Vinci_-_Annunciazione.jpg')";
                 textoAutorVencedor.textContent = 'Parece que você tem preferências diversificadas quanto à arte! Nenhum autor se sobressaiu nas suas escolhas';
              }
          }
          // Botao de Refazer o Quiz
            const botaoRefazer = document.createElement('button');
            botaoRefazer.classList.add('refazer-quiz');
            botaoRefazer.textContent = 'Refazer Quiz';

            containerTelaInicialFinal.appendChild(botaoRefazer);

            botaoRefazer.addEventListener('click', () => {
            localStorage.removeItem('autorEscolhido');
            window.location.reload();
            });

     backgroundDoAutorEscolhido();
     }
    }
    autorEscolhidosalvar()
}
  etapa++;
}
// Botao pra começar
function botaoStart() {
  const botaoQuiz = document.querySelector('.tela-visivel__botao');
  botaoQuiz.addEventListener('click', () => {
    containerTelaInicialFinal.classList.add('hidden');
    container4Telas.style.display = 'flex';
  });
  containerPerguntas.addEventListener('click', (e) => {
    const botaoClicado = e.target.closest('button');
    if (!botaoClicado) return;
    avancarEtapa(botaoClicado);
  });
}
window.addEventListener('load', botaoStart);