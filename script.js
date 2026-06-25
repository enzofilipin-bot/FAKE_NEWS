document.addEventListener("DOMContentLoaded", () => {

/* =========================
        ANIMAÇÃO SCROLL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealElements(){
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
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
"Livro escolar"
],
correct:0
},
{
question:"Você deve verificar a fonte antes de compartilhar?",
answers:[
"Sim",
"Não",
"Apenas às vezes"
],
correct:0
},
{
question:"Imagens podem ser manipuladas?",
answers:[
"Sim",
"Não",
"Nunca"
],
correct:0
},
{
question:"Fake News podem causar problemas sociais?",
answers:[
"Sim",
"Não",
"Nenhum"
],
correct:0
},
{
question:"Qual é a melhor atitude?",
answers:[
"Verificar informações",
"Compartilhar rápido",
"Ignorar dúvidas"
],
correct:0
}
];


/* =========================
        ELEMENTOS
========================= */

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreText = document.getElementById("scoreText");
const progressBar = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");


/* =========================
        VARIÁVEIS
========================= */

let currentQuestion = 0;
let score = 0;


/* =========================
        CARREGAR QUESTÃO
========================= */

function loadQuestion(){

if(!questionEl || !answersEl) return;

const q = quizData[currentQuestion];

questionEl.innerText = q.question;
answersEl.innerHTML = "";

q.answers.forEach((answer, index) => {

const btn = document.createElement("button");
btn.classList.add("answer-btn");
btn.innerText = answer;

btn.onclick = () => checkAnswer(index);

answersEl.appendChild(btn);

});

/* barra de progresso */
if(progressBar){
progressBar.style.width =
(currentQuestion / quizData.length) * 100 + "%";
}

}


/* =========================
        VERIFICAR RESPOSTA
========================= */

function checkAnswer(index){

const buttons = document.querySelectorAll(".answer-btn");

buttons.forEach(b => b.disabled = true);

const correct = quizData[currentQuestion].correct;

if(index === correct){
buttons[index].classList.add("correct");
score++;
}else{
buttons[index].classList.add("wrong");
buttons[correct].classList.add("correct");
}

if(scoreText){
scoreText.innerText = "Pontuação: " + score;
}

}


/* =========================
        PRÓXIMA
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

const box = document.querySelector(".quiz-box");

if(!box) return;

box.innerHTML = `
<h2>🏆 Quiz Finalizado</h2>
<p>Você acertou ${score} de ${quizData.length}</p>
<h3>${getLevel()}</h3>
<p>Obrigado por participar!</p>
`;

}


/* =========================
        NÍVEL
========================= */

function getLevel(){

if(score <= 2) return "🥉 Iniciante";
if(score <= 4) return "🥈 Investigador";
return "🥇 Especialista";

}


/* =========================
        START
========================= */

loadQuestion();

});
