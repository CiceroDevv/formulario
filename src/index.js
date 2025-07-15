const nome = document.querySelector("#name");
const sobrenome = document.querySelector("#sobre_nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const button = document.querySelector("#button_submit");
const form = document.querySelector("#form_content");

button.addEventListener("click", function (e) {
  // PREVENTE DEFOULT ()
  nomeCheck();
  sobreNomeCheck();
  emailCheck();
  senhaCheck();
  var valorNome = nome.value;
  var valorEmail = email.value;
  var valorSenha = senha.value;

  if (valorNome == "") {
    valorNome = false;
  } else {
    valorNome = true;
  }

  if (valorEmail == "") {
    valorEmail = false;
  } else {
    valorEmail = true;
  }

  if (valorSenha == "") {
    valorSenha = false;
  } else {
    valorSenha = true;
  }

  if (valorNome == true && valorEmail == true && valorSenha == true) {
    alert("Fromulário foiv enviado");
  } else {
    e.preventDefault();
  }
});

function nomeCheck() {
  const valorNome = nome.value;

  if (valorNome) {
    nome.classList.remove("erro");
    nome.classList.add("certo");
  } else {
    nome.classList.add("erro");
    nome.classList.remove("name");
    nome.focus();
  }
}

function sobreNomeCheck() {
  const valorSobreNome = sobrenome.value;

  if (valorSobreNome) {
    sobrenome.classList.add("certo");
    sobrenome.classList.remove("erro");
  } else {
    sobrenome.classList.add("erro");
    sobrenome.classList.remove("name");
    sobrenome.focus();
  }
}
function emailCheck() {
  const valorEmail = email.value;

  if (valorEmail === " ") {
    email.classList.remove("erro");
    email.classList.add("certo");
    email.focus();
  } else {
    email.classList.add("erro");
    email.classList.remove("sobre_email");
    email.focus();
  }
}

function senhaCheck() {
  const valorsenha = senha.value;
  validaSenha(senha.value, 8);
  if (valorsenha == "" || !validaSenha(valorsenha, 8)) {
    senha.classList.add("erro");
    senha.classList.remove("senha");
  } else {
    senha.classList.remove("erro");
    senha.classList.add("certo");
    senha.classList.remove("senha");
    senha.focus();
  }
}
function validaSenha(senha, minimoSenha) {
  if (senha.length >= minimoSenha) {
    return true;
  } else {
    return false;
  }
}
