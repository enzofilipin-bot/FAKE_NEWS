/* RESET */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

html{
    scroll-behavior:smooth;
}

body{
    background:#f5f7fa;
    color:#222;
    line-height:1.8;
}

/* HEADER */
header{
    background:linear-gradient(135deg,#0f172a,#1e293b,#334155);
    color:white;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:40px;
}

.hero{
    max-width:1000px;
}

.hero h1{
    font-size:4rem;
    margin-bottom:20px;
}

.hero p{
    font-size:1.3rem;
    margin-bottom:30px;
}

.btn{
    display:inline-block;
    background:#ef4444;
    color:white;
    padding:15px 35px;
    border-radius:30px;
    text-decoration:none;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    background:#dc2626;
    transform:translateY(-3px);
}

/* NAV */
nav{
    background:#111827;
    position:sticky;
    top:0;
    z-index:1000;
}

nav ul{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    list-style:none;
}

nav ul li a{
    display:block;
    padding:18px;
    color:white;
    text-decoration:none;
    transition:.3s;
}

nav ul li a:hover{
    background:#ef4444;
}

/* SECTIONS */
section{
    padding:80px 10%;
}

section h2{
    text-align:center;
    font-size:2.5rem;
    margin-bottom:40px;
    color:#0f172a;
}

/* CARDS */
.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:25px;
}

.card{
    background:white;
    padding:25px;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.card:hover{
    transform:translateY(-8px);
}

/* TIMELINE */
.timeline-item{
    background:white;
    padding:25px;
    border-left:6px solid #ef4444;
    margin-bottom:20px;
    border-radius:10px;
    box-shadow:0 5px 10px rgba(0,0,0,.05);
}

/* GALERIA */
.image-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:15px;
}

.image-grid img{
    width:100%;
    height:220px;
    object-fit:cover;
    border-radius:15px;
    transition:.3s;
}

.image-grid img:hover{
    transform:scale(1.05);
}

/* BANNER */
.banner{
    background:linear-gradient(135deg,#ef4444,#b91c1c);
    color:white;
    text-align:center;
    padding:60px;
}

.banner h2{
    color:white;
}

/* STATS */
.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    gap:25px;
}

.stat{
    background:white;
    padding:30px;
    text-align:center;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
}

/* QUIZ */
#quiz{
    background:#eef2ff;
}

.quiz-box{
    max-width:900px;
    margin:auto;
    background:white;
    padding:40px;
    border-radius:20px;
    box-shadow:0 10px 30px rgba(0,0,0,.15);
}

#question{
    font-size:1.4rem;
    margin-bottom:20px;
}

.answer-btn{
    display:block;
    width:100%;
    margin:10px 0;
    padding:15px;
    border:none;
    border-radius:10px;
    cursor:pointer;
    background:#e5e7eb;
    transition:.3s;
    font-size:16px;
}

.answer-btn:hover{
    background:#dbeafe;
}

.correct{
    background:#22c55e !important;
    color:white;
}

.wrong{
    background:#ef4444 !important;
    color:white;
}

/* PROGRESS BAR */
.progress{
    width:100%;
    height:15px;
    background:#ddd;
    border-radius:20px;
    overflow:hidden;
    margin-bottom:20px;
}

#progressBar{
    height:100%;
    width:0%;
    background:linear-gradient(90deg,#22c55e,#16a34a);
    transition:.5s;
}

/* BUTTON NEXT */
#nextBtn{
    margin-top:20px;
    padding:15px 25px;
    background:#2563eb;
    color:white;
    border:none;
    border-radius:10px;
    cursor:pointer;
}

/* SCORE */
#scoreText{
    margin-top:15px;
    font-size:18px;
    font-weight:bold;
}

/* FOOTER */
footer{
    background:#111827;
    color:white;
    text-align:center;
    padding:40px;
}

/* ANIMATION SCROLL */
.reveal{
    opacity:0;
    transform:translateY(40px);
    transition:1s;
}

.reveal.active{
    opacity:1;
    transform:translateY(0);
}

/* RESPONSIVO */
@media(max-width:768px){
.hero h1{font-size:2.5rem;}
.hero p{font-size:1rem;}
section{padding:60px 6%;}
}
