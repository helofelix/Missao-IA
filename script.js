const caixaPrincipal = document.querySelector('caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas'); 
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Em que lugar teve origem a palavra música?",
    alternativas: ["Grécia", "China e Ìndia","Brasil"],
    },
    {
    enunciado: "O teatro é uma linguagem de que arte?",
    alternativas: ["Artes literárias", "Artes cênicas","Artes visuais","Artes musicais"],
    },
    {
    enunciado: "Qual é um dos elementos que compoẽm a dança?",
    alternativas: ["Contrapeso", "Espaço","Ordem","Transferência"],
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
               botaoAlternativas.textContent = alternativa;
               caixaAlternativas.appendChild(botaoAlternativas);
            }
        }
          