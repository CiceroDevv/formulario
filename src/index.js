const nome = document.querySelector("#name");
const sobrenome = document.querySelector("#sobre_nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const button = document.querySelector("#button_submit");
const form = document.querySelector("#form_content");

button.addEventListener("click", function (e) {
  // PREVENTE DEFOULT ()
  e.preventDefault();
  nomecheck();
  sobreNomecheck();
  emailCheck();
  senhaCheck();
});
function nomecheck() {
  const p = document.querySelector(".nome-texto");
  const valorNome = nome.value;
  if (valorNome == "") {
    nome.classList.add("erro");
    p.classList.remove("hidden");
    p.innerText = "Campo Nome não pode ficar vazil  ! ! !";
  }
}
nome.addEventListener("keyup", () => {
  const valorNome = nome.value;
  const p = document.querySelector(".nome-texto");
  if (valorNome.length <= 3) {
    nome.classList.add("erro");
    p.classList.remove("hidden");
    p.innerText = "Esse nome e invalido!!!";
  } else if (valorNome.length >= 3) {
    p.classList.add("hidden");
    nome.classList.remove("erro");
    nome.classList.add("certo");
  }
});
function sobreNomecheck() {
  const p = document.querySelector(".sobrenome-texto");
  const valorSobreNome = sobrenome.value;
  if (valorSobreNome == "") {
    sobrenome.classList.add("erro");
    p.classList.remove("hidden");
    p.innerText = "Campo Sobre-Nome não pode ficar vazil ! ! !";
  }
}
sobrenome.addEventListener("keyup", () => {
  const valorSobrenome = sobrenome.value;
  const p = document.querySelector(".sobrenome-texto");
  if (valorSobrenome.length <= 3) {
    p.classList.remove("hidden");
    p.innerText = "Esse Sobre-Nome e invalido!!!";
    sobrenome.classList.add("erro");
    // Sobrenome.classList.remove("certo");
  } else if (valorSobrenome.length >= 3) {
    p.classList.add("hidden");
    sobrenome.classList.remove("erro");
    sobrenome.classList.add("certo");
  }
});

function emailCheck() {
  const valorEmail = email.value;
  const p = document.querySelector(".email-texto");
  if (valorEmail == "") {
    email.classList.add("erro");
    p.classList.remove("hidden");
    p.innerText = "Campo E-mail não pode ficar vazil ! ! !";
  }
}
email.addEventListener("keyup", () => {
  const valorEmail = email.value;
  const p = document.querySelector(".email-texto");
  if (valorEmail.length <= 3) {
    p.classList.remove("hidden");
    email.classList.add("erro");
    p.innerText = "Esse Sobre-Nome e invalido ! ! !";
    // email.classList.remove("certo");
  } else if (valorEmail.length >= 3) {
    p.classList.add("hidden");
    email.classList.remove("erro");
    email.classList.add("certo");
  }
});

function senhaCheck() {
  const valorsenha = senha.value;
  const p = document.querySelector(".senha-texto");
  validaSenha(senha.value, 8);
  if (valorsenha == "" || !validaSenha(valorsenha, 8)) {
    senha.classList.add("erro");
    p.classList.remove("hidden");
    p.innerText = "campo Senha não pode ficar vazil ! ! !";
  } else {
    senha.classList.remove("erro");
    senha.classList.add("certo");
  }
}
senha.addEventListener("keyup", () => {
  const valorSenha = senha.value;
  const p = document.querySelector(".senha-texto");
  if (valorSenha.length <= 7) {
    p.classList.remove("hidden");
    senha.classList.add("erro");
    p.innerText = "Senha deve ter no minimo 8 digitos ! ! !";
    // email.classList.remove("certo");
  } else if (valorSenha.length >= 8) {
    p.classList.add("hidden");
    senha.classList.remove("erro");
    senha.classList.add("certo");
  }
});
function validaSenha(senha, minimoSenha) {
  if (senha.length >= minimoSenha) {
    return true;
  } else {
    return false;
  }
}
