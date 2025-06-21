document.getElementById('passwordForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    const messageDiv = document.getElementById('message');
    const oldPasswordError = document.getElementById('oldPasswordError');
    const newPasswordError = document.getElementById('newPasswordError');
    const confirmNewPasswordError = document.getElementById('confirmNewPasswordError');
    const submitButton = document.getElementById('submitButton');

    // Limpa mensagens anteriores
    messageDiv.textContent = '';
    oldPasswordError.textContent = '';
    newPasswordError.textContent = '';
    confirmNewPasswordError.textContent = '';
    messageDiv.className = '';

    // Verifica se a nova senha é igual à senha antiga
    if (oldPassword === newPassword) {
    newPasswordError.textContent = 'A nova senha não pode ser igual à senha antiga!';
    return;
    }

    // Verifica se as senhas coincidem
    if (newPassword !== confirmNewPassword) {
    confirmNewPasswordError.textContent = 'As senhas não coincidem!';
    return;
    }

    // Requisitos da senha: mínimo de 8 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
    newPasswordError.textContent = 'A nova senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial!';
    return;
    }

    // Desabilita o botão para evitar múltiplos envios
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    try {
    const response = await fetch('https://formspree.io/f/xnqkjljy', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
        oldPassword,
        newPassword,
        confirmNewPassword
        })
    });

    if (response.ok) {
        messageDiv.textContent = 'Senha atualizada com sucesso!';
        messageDiv.className = 'success';
        document.getElementById('passwordForm').reset();
    } else {
        messageDiv.textContent = 'Erro ao atualizar a senha. Tente novamente.';
        messageDiv.className = 'errorMsg';
    }
    } catch (error) {
    messageDiv.textContent = 'Erro de conexão. Verifique sua internet.';
    messageDiv.className = 'errorMsg';
    console.error('Error:', error);
    } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Alterar Senha';
    }
});

// Validação em tempo real
const newPasswordInput = document.getElementById('newPassword');
const confirmNewPasswordInput = document.getElementById('confirmNewPassword');
const oldPasswordInput = document.getElementById('oldPassword');

newPasswordInput.addEventListener('input', function() {
    const newPasswordError = document.getElementById('newPasswordError');
    if (oldPasswordInput.value === newPasswordInput.value && newPasswordInput.value !== '') {
    newPasswordError.textContent = 'A nova senha não pode ser igual à senha antiga!';
    } else {
    newPasswordError.textContent = '';
    }
});

confirmNewPasswordInput.addEventListener('input', function() {
    const confirmNewPasswordError = document.getElementById('confirmNewPasswordError');
    if (newPasswordInput.value !== confirmNewPasswordInput.value && confirmNewPasswordInput.value !== '') {
    confirmNewPasswordError.textContent = 'As senhas não coincidem!';
    } else {
    confirmNewPasswordError.textContent = '';
    }
});





document.addEventListener('DOMContentLoaded', function() {
    // Seleciona elementos
    const logoUser = document.getElementById('logo-user');
    const modal = document.getElementById('userModal');
    const closeButton = document.querySelector('.close-button');
    const closeModalButton = document.getElementById('closeModal');
    const userName = document.getElementById('userName');
    const userCpf = document.getElementById('userCpf');
    const userEmail = document.getElementById('userEmail');

    // Dados fictícios do usuário (substitua pelos dados reais do seu sistema)
    const userData = {
        fullName: "Jaine Cristine Cassu Braz",
        cpf: "457.728.388-30",
        email: "jainecristine1@gmail.com"
    };

    // Função para abrir o modal
    function openModal() {
        userName.textContent = userData.fullName;
        userCpf.textContent = userData.cpf;
        userEmail.textContent = userData.email;
        modal.style.display = 'flex';
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Evento de clique na imagem do perfil
    logoUser.addEventListener('click', openModal);

    // Eventos para fechar o modal
    closeButton.addEventListener('click', closeModal);
    closeModalButton.addEventListener('click', closeModal);

    // Fechar o modal ao clicar fora do conteúdo
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const logoUser = document.getElementById('options');
    const userData = {
        message: "Para Abrir seus Leads altere sua senha por segurança."
    };
    
    // Adiciona um evento de clique à imagem
    logoUser.addEventListener('click', function() {
        const message = `Atenção! ${userData.message}`;
        alert(message);
    });
});