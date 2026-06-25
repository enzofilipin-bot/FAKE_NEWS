// Animação ao rolar a página

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);
revealElements();


// Botão modo escuro

const darkButton = document.createElement("button");

darkButton.innerHTML = "🌙";
darkButton.classList.add("dark-btn");

document.body.appendChild(darkButton);

darkButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkButton.innerHTML = "☀️";
    }else{
        darkButton.innerHTML = "🌙";
    }

});


// Contador animado

const stats = document.querySelectorAll(".stat h3");

stats.forEach(stat => {

    let start = 0;
    const end = 100;

    const counter = setInterval(() => {

        start++;

        if(start >= end){
            clearInterval(counter);
        }

    },20);

});


// Mensagem de conscientização

setTimeout(() => {

    alert(
        "Antes de compartilhar qualquer informação, verifique a fonte e confirme se ela é confiável."
    );

}, 3000);


// Botão voltar ao topo

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.classList.add("dark-btn");

topButton.style.bottom = "90px";
topButton.style.background = "#2563eb";

document.body.appendChild(topButton);

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
