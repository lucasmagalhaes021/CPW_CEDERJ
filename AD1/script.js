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

function buscaDados(param) {
    const planos = {
        'Academia': {
            titulo: "Academia",
            descricao: "Musculação",
            valorAnual: "180",
            valorSemestral: "220",
            valorMensal: "260",
            imgSource: 'Academia.png'
        },
        'Natacao': {
            titulo: "Natação",
            descricao: "Natação",
            valorAnual: "300",
            valorSemestral: "340",
            valorMensal: "440",
            imgSource: 'Natacao.png'
        },
        'Combo': {
            titulo: "Combo",
            descricao: "Musculação + Natação",
            valorAnual: "330",
            valorSemestral: "390",
            valorMensal: "440",
            imgSource: 'Combo.png'
        }
    };

    return planos[param] || null; // Retorna null se o plano não for encontrado
}

function MudaJanela(param) {
    const plano = buscaDados(param);

    switch (param) {
        case 'Academia':
        case 'Natacao':
        case 'Combo':
            if (plano) {
                const { titulo, descricao, valorAnual, valorSemestral, valorMensal, imgSource } = plano;
                const url = `Janela.html?titulo=${encodeURIComponent(titulo)}&descricao=${encodeURIComponent(descricao)}&valorAnual=${encodeURIComponent(valorAnual)}&valorSemestral=${encodeURIComponent(valorSemestral)}&valorMensal=${encodeURIComponent(valorMensal)}&imgSource=${encodeURIComponent(imgSource)}`;
                // Redirecionando para a nova URL
                location.href = url;
            }
            break;
        case 'Planos':
            location.href = 'Planos.html';
            break;
        default:
            console.warn("Parâmetro inválido:", param);
    }
}