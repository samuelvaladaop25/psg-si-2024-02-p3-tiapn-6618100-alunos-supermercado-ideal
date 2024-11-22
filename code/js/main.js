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