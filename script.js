document.addEventListener("DOMContentLoaded", () => {

/* SCROLL ANIMATION */
const items = document.querySelectorAll(".reveal");

function show(){
items.forEach(el=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", show);
show();


/* QUIZ */
const quiz = [
{
q:"O que são Fake News?",
a:["Informações falsas","Notícias oficiais","Livros"],
c:0
},
{
q:"Qual atitude correta?",
a:["Verificar fonte","Compartilhar rápido","Ignorar tudo"],
c:0
},
{
q:"Imagens podem ser falsas?",
a:["Sim","Não","Nunca"],
c:0
},
{
q:"Fake News se espalham como?",
a:["Muito rápido","Devagar","Não espalham"],
c:0
},
{
q:"O que evita desinformação?",
a:["Checar antes de compartilhar","Acreditar em tudo","Ignorar fatos"],
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

const q = quiz[i];

question.textContent = q.q;
answers.innerHTML = "";

q.a.forEach((text,index)=>{

const btn = document.createElement("button");
btn.className = "answer-btn";
btn.textContent = text;

btn.onclick = () => {

const all = document.querySelectorAll(".answer-btn");
all.forEach(b=>b.disabled = true);

if(index === q.c){
btn.classList.add("correct");
score++;
}else{
btn.classList.add("wrong");
all[q.c].classList.add("correct");
}

setTimeout(()=>{
i++;
if(i < quiz.length){
load();
}else{
answers.innerHTML = `
<h2>Resultado final</h2>
<p>Você acertou ${score} de ${quiz.length}</p>
`;
}
},600);

};

answers.appendChild(btn);

});

progress.style.width = (i/quiz.length)*100 + "%";
}

load();

});
