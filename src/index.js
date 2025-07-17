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
    e.preventDefault();
    alert("Fromulário foi enviado");
  } else {
    e.preventDefault();
  }
});

function nomeCheck() {
  const valorNome = nome.value;

  if (valorNome ==="" || valornome.length <=3) {
    nome.classList.add("erro");
    nome.focus()
  } else {
    nome.classList.add("certo")
  }
}

function sobreNomeCheck() {
  const valorSobreNome = sobrenome.value;

  if (valorSobreNome==="" || valorSbreNome.length <=3) {
    sobrenome.focus()
    sobrenome.classList.add("erro");
  } else {
    sobrenome.classList.add("certo");
  }
}
function emailCheck() {
  const valorEmail = email.value;

  if (valorEmail == "" || valorEmail.length <=3 ) {
    email.classList.add("erro");
    email.focus();
  } else {
    email.classList.add("certo");
  }
}

function senhaCheck() {
  const valorsenha = senha.value;

  if (valorsenha == "" || !validaSenha(valorsenha, 8)) {
    senha.classList.add("erro");
    senha.classList.remove("senha");
    senha.classList.focus()
  } else {
    senha.classList.add("certo");
  }
}
function validaSenha(senha, minimoSenha) {
  if (senha.length >= minimoSenha) {
    return true;
  } else {
    return false;
  }
}
