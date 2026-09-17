// 🔴 NÍVEL 3 — JUNTANDO TUDO
// 19. Cadastro de jogo

const jogo = {
    titulo: 'Minecraft',
    genero: 'SandBox',
    preco: 99,
};

const exibirJogo = ({ titulo, genero, preco }) => {
    return `${titulo} é um jogo do gênero ${genero} e custa R$ ${preco}.`;
};

console.log(exibirJogo(jogo));
