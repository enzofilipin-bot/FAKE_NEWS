
/* =========================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealElements(){
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visible = 100;

        if(elementTop < windowHeight - visible){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
revealElements();


/* =========================
        QUIZ DATA
========================= */

const quizData = [
{
question:"O que é Fake News?",
answers:[
"Informação falsa divulgada como verdadeira",
"Notícia científica",
"Relatório oficial"
],
correct:0
},
{
question:"Qual a primeira atitude antes de compartilhar uma notícia?",
answers:[
"Verificar a fonte",
"Compartilhar imediatamente",
"Acreditar no título"
],
correct:0
},
{
question:"Fotos podem ser manipuladas?",
answers:[
"Sim",
"Não",
"Sempre verdadeiras"
],
correct:0
},
{
question:"Fake News podem afetar eleições?",
answers:[
"Sim",
"Não",
"Nunca"
],
correct:0
},
{
question:"Uma fonte confiável geralmente tem:",
answers:[
"Autoria e referências",
"Anonimato total",
"Sem informações"
],
correct:0
},
{
question:"Notícias antigas podem ser usadas como se fossem atuais?",
answers:[
"Sim",
"Não",
"Nunca"
],
correct:0
},
{
question:"O que é mais seguro fazer antes de compartilhar?",
answers:[
"Checar outras fontes",
"Compartilhar rápido",
"Ignorar a verificação"
],
correct:0
},
{
question:"Fake News podem causar:",
answers:[
"Desinformação e prejuízos sociais",
"Nada",
"Apenas entretenimento"
],
correct:0
},
{
question:"Discursos de ódio devem ser:",
answers:[
"Denunciados",
"Incentivados",
"Ignorados sempre"
],
correct:0
},
{
question:"Qual atitude ajuda a combater Fake News?",
answers:[
"Educação digital",
"Espalhar boatos",
"Compartilhar sem ler"
],
correct:0
},
{
question:"Vídeos na internet podem ser editados?",
answers:[
"Sim",
"Não",
"Nunca"
],
correct:0
},
{
question:"Qual é o maior risco das Fake News?",
answers:[
"Manipulação da opinião pública",
"Entretenimento",
"Nenhum risco"
],
correct:0
},
{
question:"Uma notícia confiável deve ter:",
answers:[
"Evidências verificáveis",
"Opiniões sem base",
"Apenas títulos chamativos"
],
correct:0
},
{
question:"Compartilhar sem verificar pode causar:",
answers:[
"Propagação de mentiras",
"Nenhum problema",
"Informação correta sempre"
],
correct:0
},
{
question:"O que é mais confiável?",
answers:[
"Jornal reconhecido",
"Mensagem de grupo",
"Perfil anônimo"
],
correct:0
},
{
question:"Fake News se espalham principalmente por:",
answers:[
"Redes sociais",
"Livros científicos",
"Jornais oficiais"
],
correct:0
},
{
question:"O que ajuda a identificar Fake News?",
answers:[
"Comparar fontes",
"Acreditar em tudo",
"Ignorar detalhes"
],
correct:0
},
{
question:"Uma emoção forte em uma notícia pode indicar:",
answers:[
"Manipulação",
"Verdade absoluta",
"Neutralidade"
],
correct:0
},
{
question:"Antes de compartilhar devemos:",
answers:[
"Pausar e verificar",
"Enviar rápido",
"Ignorar dúvida"
],
correct:0
},
{
question:"Fake News podem ser perigosas porque:",
answers:[
"Influenciam decisões importantes",
"São engraçadas",
"Não têm impacto"
],
correct:0
}
];


/* =========================
        VARIÁVEIS
========================= */

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreText = document.getElementById("scoreText");
const progressBar = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");


/* =========================
     CARREGAR PERGUNTA
========================= */

function loadQuestion(){

if(!questionEl) return;

const q = quizData[currentQuestion];

questionEl.innerText = q.question;
answersEl.innerHTML = "";

/* criar botões */
q.answers.forEach((answer, index) => {

const btn = document.createElement("button");
btn.classList.add("answer-btn");
btn.innerText = answer;

btn.addEventListener("click", () => checkAnswer(index));

answersEl.appendChild(btn);

});

/* atualizar barra */
progressBar.style.width =
(currentQuestion / quizData.length) * 100 + "%";

}


/* =========================
      VERIFICAR RESPOSTA
========================= */

function checkAnswer(index){

const buttons = document.querySelectorAll(".answer-btn");

buttons.forEach(b => b.disabled = true);

const correctIndex = quizData[currentQuestion].correct;

if(index === correctIndex){

buttons[index].classList.add("correct");
score++;

}else{

buttons[index].classList.add("wrong");
buttons[correctIndex].classList.add("correct");

}

scoreText.innerText = "Pontuação: " + score;

}


/* =========================
     PRÓXIMA PERGUNTA
========================= */

if(nextBtn){

nextBtn.addEventListener("click", () => {

currentQuestion++;

if(currentQuestion < quizData.length){

loadQuestion();

}else{

showResult();

}

});

}


/* =========================
       RESULTADO FINAL
========================= */

function showResult(){

document.querySelector(".quiz-box").innerHTML = `

<h2>🏆 Quiz Finalizado</h2>

<p>Você acertou ${score} de ${quizData.length}</p>

<h3>
${getLevel()}
</h3>

<p>
Parabéns por completar o quiz sobre Fake News!
</p>

`;

}


/* =========================
        NÍVEL DO JOGADOR
========================= */

function getLevel(){

if(score <= 5) return "🥉 Iniciante";
if(score <= 12) return "🥈 Investigador";
if(score <= 17) return "🥇 Especialista";

return "🏆 Caçador de Fake News";
}


/* =========================
     INICIAR QUIZ
========================= */

loadQuestion();
