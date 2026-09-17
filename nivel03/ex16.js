// 🔴 NÍVEL 3 — JUNTANDO TUDO
// 16. Produto com desconto

const produto = {
    nome: 'Headset',
    preco: 200,
    desconto: 20,
};

const calculoPreco = ({ preco, desconto }) => {
    return preco - desconto;
}

console.log(`O ${produto.nome} custava R$ 200 e agora custa R$ ${calculoPreco(produto)}.`);
