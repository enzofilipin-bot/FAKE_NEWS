function entrar() {
  document.getElementById("alertScreen").style.display = "none";
}

function verificar() {
  const texto = document.getElementById("inputNews").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  let pontos = 0;

  if (texto.includes("urgente")) pontos++;
  if (texto.includes("milagre")) pontos++;
  if (texto.includes("100% garantido")) pontos++;
  if (texto.includes("cura")) pontos++;
  if (texto.includes("compartilhe")) pontos++;

  if (texto.trim() === "") {
    resultado.innerHTML = "⚠️ Digite uma notícia.";
    resultado.style.color = "yellow";
    return;
  }

  if (pontos >= 2) {
    resultado.innerHTML = "💥 ALERTA MÁXIMO: POSSÍVEL FAKE NEWS DETECTADA!";
    resultado.style.color = "red";
  } 
  else if (pontos === 1) {
    resultado.innerHTML = "⚠️ Sinais suspeitos encontrados.";
    resultado.style.color = "orange";
  } 
  else {
    resultado.innerHTML = "✅ Nenhum sinal crítico detectado.";
    resultado.style.color = "lightgreen";
  }
}
