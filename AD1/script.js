// script.js
function validarTelefone(event) {
    const input = event.target;
    const valor = input.value;
    const isCelular = input.id === 'cel';

    // Verificar se todos os caracteres são numéricos
    if (!/^\d+$/.test(valor)) {
        alert("O campo deve conter apenas dígitos.");
        return;
    }

    // Verificar a quantidade de dígitos: 8 para telefone fixo, 9 para celular
    if ((isCelular && valor.length !== 9) || (!isCelular && valor.length !== 8)) {
        const tipo = isCelular ? "celular" : "telefone";
        alert(`O ${tipo} deve conter exatamente ${isCelular ? 9 : 8} dígitos.`);
    }
}
