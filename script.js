document.addEventListener("DOMContentLoaded", () => {

const quizData = [
{
question:"O que são Fake News?",
answers:[
"Informações falsas",
"Jornal científico",
"Relatório oficial"
],
correct:0
},
{
question:"Devemos verificar fontes?",
answers:[
"Sim",
"Não",
"Nunca"
],
correct:0
},
{
question:"Imagens podem ser manipuladas?",
answers:[
"Sim",
"Não",
"Sempre verdadeiras"
],
correct:0
},
{
question:"Fake News causam impacto social?",
answers:[
"Sim",
"Não",
"Nenhum impacto"
],
correct:0
},
{
question:"Melhor atitude online?",
answers:[
"Checar informações",
"Compartilhar rápido",
"Acreditar em tudo"
],
correct:0
}
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreText = document.getElementById("scoreText");
const progressBar = document.getElementById("progressBar");

function loadQuestion(){

const q = quizData[current];

questionEl.textContent = q.question;
answersEl.innerHTML = "";

q.answers.forEach((a, i) => {

const btn = document.createElement("button");
btn.classList.add("answer-btn");
btn.textContent = a;

btn.onclick = () => checkAnswer(i);

answersEl.appendChild(btn);

});

progressBar.style.width = (current / quizData.length) * 100 + "%";
}

function checkAnswer(i){

const buttons = document.querySelectorAll(".answer-btn");
buttons.forEach(b => b.disabled = true);

const correct = quizData[current].correct;

if(i === correct){
buttons[i].classList.add("correct");
score++;
}else{
buttons[i].classList.add("wrong");
buttons[correct].classList.add("correct");
}

scoreText.textContent = "Pontuação: " + score;

setTimeout(() => {
current++;

if(current < quizData.length){
loadQuestion();
}else{
showResult();
}
}, 800);

}

function showResult(){
document.querySelector(".quiz-box").innerHTML = `
<h2>Quiz Finalizado</h2>
<p>Você acertou ${score} de ${quizData.length}</p>
<h3>${getLevel()}</h3>
`;
}

function getLevel(){
if(score <= 2) return "Iniciante";
if(score <= 4) return "Intermediário";
return "Avançado";
}

loadQuestion();

});
