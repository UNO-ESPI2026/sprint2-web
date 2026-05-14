// alert de bem-vindo
alert("Bem-vindo ao site!");

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

let emailUsuario = "";
let senhaLogin = "";
let jaCriou = false;

function criarUsuario(){

    if(jaCriou){
        return;
    }

    do {
    emailUsuario = prompt("Informe seu email:");
    if(!validarEmail(emailUsuario)){
        //manda o usuário digitar um email válido
        alert("Digite um email válido!");
    }
} while(!validarEmail(emailUsuario));
    senhaLogin = prompt("Crie uma senha:");

    if(senhaLogin){
        jaCriou = true;
        // avisa ao usuário que o usuário foi criado com sucesso
        alert("Usuário criado com sucesso!");
    } else {
        // avisa quando acontece um erro na digitação
        alert("Preencha corretamente!");
    }
}
criarUsuario();

function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var mensagem = document.getElementById('mensagem');

    if(email == "" || senha == ""){
        mensagem.innerText = "Preencha todos os campos!";
        return;
    }
    if(email == emailUsuario && senha == senhaLogin){
        mensagem.innerText = "";
        sessionStorage.setItem('logado', 'true');
        window.location.href = "./src/pages/home.html"
        //avisa que o login foi um sucesso
        alert('Sucesso!');
    } else{
        // avisa que o email ou a senha estão incorretos
        alert('Email ou senha incorretos');
    }
}