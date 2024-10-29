// script.js
function validarTelefone(event) {
  const { target: input } = event;
  const valor = input.value;
  const isCelular = input.id === "cel";

  // Verificar se todos os caracteres são numéricos
  if (!/^\d+$/.test(valor)) {
    alert("O campo deve conter apenas dígitos.");
    return;
  }

  // Verificar a quantidade de dígitos: 8 para telefone fixo, 9 para celular
  const digitosEsperados = isCelular ? 9 : 8;
  if (valor.length !== digitosEsperados) {
    const tipo = isCelular ? "celular" : "telefone";
    alert(`O ${tipo} deve conter exatamente ${digitosEsperados} dígitos.`);
  }
}

function buscaDados(param) {
  const planos = {
    Academia: {
      titulo: "Academia",
      descricao: "Musculação",
      valorAnual: "180",
      valorSemestral: "220",
      valorMensal: "260",
      imgSource: "Academia.png",
    },
    Natacao: {
      titulo: "Natação",
      descricao: "Natação",
      valorAnual: "300",
      valorSemestral: "340",
      valorMensal: "440",
      imgSource: "Natacao.png",
    },
    Combo: {
      titulo: "Combo",
      descricao: "Musculação + Natação",
      valorAnual: "330",
      valorSemestral: "390",
      valorMensal: "440",
      imgSource: "Combo.png",
    },
  };
  return planos[param] || null;
}

function MudaJanela(param) {
  const plano = buscaDados(param);

  if (plano) {
    const queryParams = new URLSearchParams(plano).toString();
    location.href = `Janela.html?${queryParams}`;
  } else if (param === "Planos") {
    location.href = "Planos.html";
  } else {
    console.warn("Parâmetro inválido:", param);
  }
}

function calcularValor() {
  const valoresMensais = {
    academia: 180,
    natacao: 200,
    combo: 440,
  };
  const valorMatricula = 80;

  const atividade = document.getElementById("atividade").value;
  const plano = document.getElementById("plano").value;
  const matriculado = document.getElementById("matriculado").checked;
  const numMat = document.getElementById("numMat").value;

  if (!atividade) {
    alert("É necessário selecionar uma atividade!");
    return;
  }
  if (!plano) {
    alert("É necessário selecionar um plano!");
    return;
  }

  const valorMensal = valoresMensais[atividade];
  const duracoes = { mensal: 1, semestral: 6, anual: 12 };
  let valorTotal = valorMensal * (duracoes[plano] || 0);

  if (!matriculado || !numMat) {
    valorTotal += valorMatricula;
  }

  document.getElementById("TxtTotal").value = valorTotal.toFixed(0);
}

function mostrarEquipamento(index) {
  const equipamentos = [
    {
      nome: "Cadeira Extensora",
      img: "files/CadeiraExtensora.png",
      desc: "O principal movimento articular realizado na cadeira extensora é a extensão de joelho, portanto o quadríceps (vasto lateral, vasto medial, vasto intermédio e reto femoral) são os principais músculos trabalhados durante o exercício.",
      fonte:
        "https://treinomestre.com.br/cadeira-extensora-como-potencializar-os-resultados-4-dicas-importantes/",
    },
    {
      nome: "Supino Vertical",
      img: "files/SupinoVertical.png",
      desc: "O supino vertical é um exercício popular e eficaz para desenvolver força, tamanho e definição nos músculos da parte superior do corpo.",
      fonte:
        "https://www.academiacentralfitness.com.br/post/supino-m%C3%A1quina-como-fazer-benef%C3%ADcios-e-varia%C3%A7%C3%B5es",
    },
    {
      nome: "Remada Baixa",
      img: "files/RemadaBaixa.png",
      desc: "A Remada Baixa é um exercício de máquina para costas feito sentado no banco usando a barra triângulo.",
      fonte: "https://www.hipertrofia.org/blog/2018/03/24/remada-baixa/",
    },
  ];

  const equipamento = equipamentos[index];
  if (!equipamento) return;

  document.getElementById("imgEquipamento").src = equipamento.img;
  document.getElementById("descricaoEquipamento").textContent = equipamento.desc;
  document.getElementById("tituloEquipamento").textContent = equipamento.nome;
  const fonteElement = document.getElementById("fonteEquipamento");
  fonteElement.href = equipamento.fonte;
  fonteElement.textContent = "[Fonte]";
}
