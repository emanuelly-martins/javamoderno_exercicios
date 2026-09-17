// 🔴 NÍVEL 3 — JUNTANDO TUDO
// 20. Pedido de uma loja

const pedido = {
    produto: 'Teclado Mecânico',
    preco: 250,
    quantidade: 2,
};

const calcularTotal = ({ produto, preco, quantidade }) => {
    return quantidade * preco;
};
const { produto, preco, quantidade } = pedido;

console.log(`Produto: ${produto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor unitário: ${preco}`);
console.log(`Total: R$ ${calcularTotal(pedido)}`);
