function validarCPF() {
    var cpf = document.getElementById("CPF").value;
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || !validarDigitosCPF(cpf)) {
        var cpfError = document.getElementById("cpfError");
        cpfError.textContent = "CPF inválido";
        return false;
    }

    return true;
}


function validarDigitosCPF(cpf) {
    var soma = 0;
    var resto;

    for (var i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function formatarCPF(input) {
    let cpf = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos do valor do campo CPF

    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11); // Limita o campo a 11 caracteres (CPF tem 11 dígitos)
    }

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Aplica a formatação do CPF (XXX.XXX.XXX-XX)

    input.value = cpf;
}


function validarFormulario(event) {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o formato do email

    var emailError = document.getElementById("emailError");
    var confirmEmailError = document.getElementById("confirmEmailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    emailError.textContent = "";
    confirmEmailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (!emailRegex.test(email)) {
        emailError.textContent = "Por favor, insira um email válido.";
        event.preventDefault(); // Impede o envio do formulário
        return false;
    }

    if (email !== confirmEmail) {
        confirmEmailError.textContent = "Os campos de email não são compatíveis.";
        event.preventDefault(); // Impede o envio do formulário
        return false;
    }

    if (password.length <= 3) {
        passwordError.textContent = "A senha deve ter pelo menos 4 caracteres.";
        event.preventDefault(); // Impede o envio do formulário
        return false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Os campos de senha não são compatíveis.";
        event.preventDefault(); // Impede o envio do formulário
        return false;
    }

    // O formulário é válido, você pode prosseguir com o envio dos dados ou outras ações necessárias
    // Aqui você pode adicionar o código para enviar os dados ou realizar outras ações desejadas

    return true;
}

document.querySelector(".form").addEventListener("submit", validarFormulario);







