alert("Bem-vindo ao site!");

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

let usuarioCriado = "";
let emailUsuario = "";
let senhaLogin = "";
let jaCriou = false;

function criarUsuario(){

    if(jaCriou){
        return;
    }

    usuarioCriado = prompt("Crie um nome de usuário:");
    do {
    emailUsuario = prompt("Informe seu email:");
    if(!validarEmail(emailUsuario)){
        alert("Digite um email válido!");
    }
} while(!validarEmail(emailUsuario));
    senhaLogin = prompt("Crie uma senha:");

    if(usuarioCriado && senhaLogin){
        jaCriou = true;
        alert("Usuário criado com sucesso!");
    } else {
        alert("Preencha corretamente!");
    }
}
criarUsuario();

function logar(){
    var login = document.getElementById('login').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(login == "" || email == "" || senha == ""){
        mensagem.innerText = "Preencha todos os campos!";
        return;
    }
    if(login == usuarioCriado && email == emailUsuario && senha == senhaLogin){
        alert('Sucesso!')
    } else{
        alert('Usuário, email ou senha incorretos');
    }
}