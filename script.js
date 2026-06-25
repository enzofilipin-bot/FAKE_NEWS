document.addEventListener("DOMContentLoaded", () => {

const quizData = [
{
question:"O que é Fake News?",
answers:[
"Informação falsa",
"Notícia científica",
"Livro"
],
correct:0
},
{
question:"Você deve verificar fontes?",
answers:["Sim","Não","Nunca"],
correct:0
},
{
question:"Imagens podem ser falsas?",
answers:["Sim","Não","Sempre verdadeiras"],
correct:0
},
{
question:"Fake News se espalham rápido?",
answers:["Sim","Não","Nunca"],
correct:0
},
{
question:"Melhor atitude online?",
answers:["Checar informações","Compartilhar rápido","Ignorar"],
correct:0
}
];

let current = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const progress = document.getElementById("progressBar");
const scoreText = document.getElementById("scoreText");

function load(){

const q = quizData[current];

question.textContent = q.question;
answers.innerHTML = "";

q.answers.forEach((a,i)=>{

const btn = document.createElement("button");
btn.classList.add("answer-btn");
btn.textContent = a;

btn.onclick = () => {

if(i === q.correct){
btn.style.background = "green";
score++;
}else{
btn.style.background = "red";
}

setTimeout(()=>{

current++;

if(current < quizData.length){
load();
}else{
answers.innerHTML =
`<h2>Missão concluída</h2><p>Score: ${score}/${quizData.length}</p>`;
}

},600);

};

answers.appendChild(btn);

});

progress.style.width = (current/quizData.length)*100 + "%";
}

load();

});
