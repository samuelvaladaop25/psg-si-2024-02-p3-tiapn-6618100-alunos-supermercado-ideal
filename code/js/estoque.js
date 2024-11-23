async function carregarProdutos() {
    try {
        const response = await fetch('http://localhost:3000/api/produtos');
        
        if (!response.ok) {
            throw new Error('Erro ao carregar os produtos');
        }

        const produtos = await response.json();

        const tabelaProdutos = document.querySelector('#tabela-produtos tbody');
        
        tabelaProdutos.innerHTML = '';

        produtos.forEach(produto => {
            const tr = document.createElement('tr');
            
            tr.innerHTML = `
                <td>${produto.ID}</td>
                <td>${produto.Nome}</td>
                <td>${produto.Descricao || 'N/A'}</td>
                <td>R$ ${produto.Preco.toFixed(2)}</td>
                <td>${produto.Quant_Atual}</td>
            `;
            
            tabelaProdutos.appendChild(tr);
        });
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}

window.onload = carregarProdutos;