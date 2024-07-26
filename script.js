const caixaPrincipal = document.querySelector('caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas'); 
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Em que lugar teve origem a palavra música?",
    alternativas: [
      {
         texto: "China",
         afirmação: "Afirmação da alternativa 1"
      },
      {
        texto: "Grécia",
        afirmação: "Afirmação da alternativa 2"
      },
      {
        texto: "Brasil",
        afirmação: "Afirmação da alternativa 3"
      },
      {
        texto: "ìndia",
        afirmação: "Afirmação da alternativa 4"
      },


       ]
    },

    {
       enunciado: "O teatro é uma linguagem de que arte?",
    alternativas: [
    {
      texto: "Artes literárias",
      afirmação: "Afirmação da alternativa 1"
    },
    {
      texto: "Artes cênicas",
      afirmação: "Afirmação da alternativa 2"
    },
    {
      texto: "Artes visuais",
      afirmação: "Afirmação da alternativa 3"
    },
    {
      texto: "Artes musicais",
      afirmação: "Afirmação da alternativa4 "
    },

     ]

   },

   {
    enunciado: "Qual é um dos elementos que compoẽm a dança?",
    alternativas: [
    {
      texto: "Contrapeso",
      afirmação: "Afirmação da alternativa 1"
    },
    {
      texto: "Espaço",
      afirmação: "Afirmação da alternativa 2"
    },
    {
      texto: "Ordem",
      afirmação: "Afirmação da alternativa 3"
    },
    {
      texto: "Transferência",
      afirmação: "Afirmação da alternativa 4"
    },

     ]
    },
    ];

    let atual = 0;
    let perguntaAtual;

    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
          mostraAlternativas();
        }
        mostraPergunta();
        function mostraAlternativas() {
            for(const alternativa of perguntaAtual.alternativas){
               const botaoAlternativas = document.createElement ("button");
               botaoAlternativas.textContent = alternativa.texto;
               botaoAlternativas.addEventListener("click", 
               function () {
                  atual++;
                  mostraPergunta();
              });
               caixaAlternativas.appendChild(botaoAlternativas);
            }
        }
          