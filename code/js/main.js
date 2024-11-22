async function carregarUsuarios() {
    try {
        const resposta = await fetch('users.json'); 
        const usuarios = await resposta.json(); 
        return usuarios; 
    } catch (erro) {
        console.error('Erro ao carregar usuários:', erro);
    }
}

async function verificarLogin(event) {
    event.preventDefault(); 

    const usuarioDigitado = document.getElementById("usuario-input").value;
    const senhaDigitada = document.getElementById("senha-input").value;
    const mensagemErro = document.getElementById("mensagem-erro");

    const usuarios = await carregarUsuarios();

    const usuarioValido = usuarios.find(user => user.usuario === usuarioDigitado && user.senha === senhaDigitada);

    if (usuarioValido) {
        mensagemErro.textContent = ""; 
        document.querySelector(".profile p").textContent = usuarioDigitado; 
        document.querySelector(".login-container").style.display = "none"; 
    } else {
        mensagemErro.textContent = "Usuário ou senha incorretos.";
    }
}

document.getElementById("login-form").addEventListener("submit", verificarLogin);

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('pt-BR');
    const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;

    // Aberto das 8h às 18h
    const hour = now.getHours();
    const statusElement = document.getElementById('status');
    const status = hour >= 8 && hour < 18 ? 'Aberto' : 'Fechado';
    
    statusElement.textContent = status;

    if (status === 'Aberto') {
        statusElement.classList.remove('fechado');
        statusElement.classList.add('aberto');
    } else {
        statusElement.classList.remove('aberto');
        statusElement.classList.add('fechado');
    }
}

setInterval(updateDateTime, 1000);
updateDateTime(); 