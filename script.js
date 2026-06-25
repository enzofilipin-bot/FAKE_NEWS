document.addEventListener("DOMContentLoaded", () => {

/* =========================
   SCROLL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

function reveal(){
reveals.forEach(el=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", reveal);
reveal();


/* =========================
        QUIZ
========================= */

const quizData = [
{
q:"O que são Fake News?",
a:["Informações falsas","Notícias científicas","Livros"],
c:0
},
{
q:"Qual atitude correta?",
a:["Verificar fonte","Compartilhar rápido","Ignorar tudo"],
c:0
},
{
q:"Imagens podem ser manipuladas?",
a:["Sim","Não","Nunca"],
c:0
},
{
q:"Fake News causam impacto?",
a:["Sim","Não","Nenhum"],
c:0
},
{
q:"O melhor comportamento online é:",
a:["Checar antes de compartilhar","Enviar sem ler","Acreditar em tudo"],
c:0
}
];

let i = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const progress = document.getElementById("progressBar");
const scoreText = document.getElementById("scoreText");

function load(){

const data = quizData[i];

question.textContent = data.q;
answers.innerHTML = "";

data.a.forEach((text,index)=>{

const btn = document.createElement("button");
btn.classList.add("answer-btn");
btn.textContent = text;

btn.onclick = () => {

const all = document.querySelectorAll(".answer-btn");
all.forEach(b=>b.disabled=true);

if(index === data.c){
btn.classList.add("correct");
score++;
}else{
btn.classList.add("wrong");
all[data.c].classList.add("correct");
}

scoreText.textContent = "Pontuação: " + score;

setTimeout(()=>{
i++;
if(i < quizData.length){
load();
}else{
answers.innerHTML = `
<h2>Missão concluída</h2>
<p>Você acertou ${score} de ${quizData.length}</p>
`;
}
},700);

};

answers.appendChild(btn);

});

progress.style.width = (i/quizData.length)*100 + "%";

}

load();

});
