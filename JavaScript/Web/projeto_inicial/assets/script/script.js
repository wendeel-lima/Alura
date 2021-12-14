const criar = (evento) => {
  evento.preventDefault();
  const message = document.querySelector("[data-form-input]");
  const valor = message.value;
  console.log(valor);
};

const botao = document.querySelector("[data-form-button]");

botao.addEventListener("click", criar);
