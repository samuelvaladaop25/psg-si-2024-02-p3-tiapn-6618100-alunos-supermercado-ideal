// Dados de usuário fixos para o exemplo
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

// Função para verificar o login
function verificarLogin(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém os valores dos inputs
    const usuario = document.getElementById("usuario-input").value;
    const senha = document.getElementById("senha-input").value;
    const mensagemErro = document.getElementById("mensagem-erro"); // Referência à div de erro

    // Verifica se o usuário e senha estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Login bem-sucedido
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
        document.querySelector(".profile p").textContent = usuario; // Atualiza a div de perfil
        document.querySelector(".login-container").style.display = "none"; // Esconde o formulário de login
    } else {
        // Exibe mensagem de erro
        mensagemErro.textContent = "Usuário ou senha incorretos.";
    }
}

// Associa a função ao formulário
document.getElementById("login-form").addEventListener("submit", verificarLogin);

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('pt-BR');
    const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;

    // Exemplo de status: Aberto das 9h às 18h
    const hour = now.getHours();
    const status = hour >= 8 && hour < 21 ? 'Aberto' : 'Fechado';
    document.getElementById('status').textContent = status;
}

setInterval(updateDateTime, 1000); // Atualiza a cada 1 segundo
updateDateTime(); // Chamada inicial   