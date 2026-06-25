document.addEventListener("DOMContentLoaded", () => {

/* ======================
   SCROLL ANIMATION
====================== */

const revealItems = document.querySelectorAll(".reveal");

function reveal(){
revealItems.forEach(el=>{
const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 80){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", reveal);
reveal();


/* ======================
        QUIZ
====================== */

const quiz = [
{
q:"O que são Fake News?",
a:["Informações falsas","Notícias científicas","Livros"],
c:0
},
{
q:"Qual é a melhor atitude online?",
a:["Checar fontes","Compartilhar rápido","Ignorar tudo"],
c:0
},
{
q:"Imagens podem ser manipuladas?",
a:["Sim","Não","Nunca"],
c:0
},
{
q:"Fake News se espalham rápido?",
a:["Sim","Não","Devagar"],
c:0
},
{
q:"O que evitar?",
a:["Compartilhar sem verificar","Ler notícias","Pesquisar"],
c:0
}
];

let i = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const progress = document.getElementById("progressBar");
const scoreText = document.getElementById("scoreText");

function loadQuestion(){

const q = quiz[i];

question.textContent = q.q;
answers.innerHTML = "";

q.a.forEach((text,index)=>{

const btn = document.createElement("button");
btn.className = "answer-btn";
btn.textContent = text;

btn.onclick = () => {

const all = document.querySelectorAll(".answer-btn");
all.forEach(b => b.disabled = true);

if(index === q.c){
btn.classList.add("correct");
score++;
}else{
btn.classList.add("wrong");
all[q.c].classList.add("correct");
}

scoreText.textContent = "Pontuação: " + score;

setTimeout(()=>{
i++;

if(i < quiz.length){
loadQuestion();
}else{
answers.innerHTML = `
<h2>Quiz finalizado</h2>
<p>Você acertou ${score} de ${quiz.length}</p>
`;
}

},600);

};

answers.appendChild(btn);

});

progress.style.width = (i/quiz.length)*100 + "%";
}

loadQuestion();

});
