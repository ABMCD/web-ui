document.getElementById("formulario").addEventListener("submit", function () {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem-texto").value;

  const link = `mailto:associacaocaixadagua1997@gmail.com?subject=Mensagem de ${encodeURIComponent(
    nome
  )}.&body=${encodeURIComponent(mensagem)}`;

  window.location.href = link;
});
