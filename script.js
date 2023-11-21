function validaFormulario() {
    
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;

    console.log(senha)

    // validação de campos vazios
    if(nome === '' || email === '' || senha === ''){
        alert("Por favor, preencha os campos vazios!")
        return
    }

    // Validação do campo do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Digite um e-mail válido!")
        return
    }

    // verificar tamanho da senha
    if(senha.length < 8 ){
        alert("A senha nao pode ser menor que '8' caracteres")
        return
    }
    
    alert("Cadastro foi realizado com sucesso!")
}

function darkMode () {
    const pagina = document.body
    
    pagina.classList.toggle("dark-mode")

    const botao = document.querySelector("D")

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode == true) {
        D.textContent = "Modo Claro"
    }else{
        D.textContent = "Modo Escuro"
    }


}











