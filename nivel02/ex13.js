// 🟡 NÍVEL 2 — DESESTRUTURAÇÃO
// 13. Desestruturação diretamente na função

const mostrarProduto = ({ nome, preco }) => {
    return `Produto: ${nome} - Preço: R$ ${preco}`;
};

console.log(mostrarProduto({ nome: 'Mouse', preco: '80' }));
