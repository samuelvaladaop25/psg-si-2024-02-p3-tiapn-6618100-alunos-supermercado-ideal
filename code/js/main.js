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