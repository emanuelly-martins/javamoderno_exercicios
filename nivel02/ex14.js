// 🟡 NÍVEL 2 — DESESTRUTURAÇÃO
// 14. Apresentando uma pessoa

const pessoa = {
    nome: 'Mariana',
    idade: 25,
    profissao: 'Desenvolvedora',
};

const apresentarPessoa = (nome, idade, profissão) => {
    return console.log(`${nome} tem ${idade} anos e trabalha como ${profissão}.`);
};
apresentarPessoa(pessoa.nome, pessoa.idade, pessoa.profissao);
