const formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  alert("Obrigada por entrar em contato!")
});
