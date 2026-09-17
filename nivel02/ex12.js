// 🟡 NÍVEL 2 — DESESTRUTURAÇÃO
// 12. Produto dentro de uma função

const produto = {
    nome: 'Mouse',
    preco: 80,
};

const mostrarProduto = (nome, preco) => {
    return console.log(`Produto: ${nome} - Preço: R$ ${preco}`);
}
mostrarProduto(produto.nome, produto.preco);
