// 🔴 NÍVEL 3 — JUNTANDO TUDO
// 18. Verificando idade

const verificarIdade = (idade) => {
    if (idade >= 18) {
        return `Maior de idade`;
    } else {
        return `Menor de idade`;
    }
};

console.log(verificarIdade(17));
