// script.js
function validarTelefone(event) {
  const input = event.target;
  const valor = input.value;
  const isCelular = input.id === "cel";

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

  return planos[param] || null; // Retorna null se o plano não for encontrado
}

function MudaJanela(param) {
  const plano = buscaDados(param);

  switch (param) {
    case "Academia":
    case "Natacao":
    case "Combo":
      if (plano) {
        const {
          titulo,
          descricao,
          valorAnual,
          valorSemestral,
          valorMensal,
          imgSource,
        } = plano;
        const url = `Janela.html?titulo=${encodeURIComponent(
          titulo
        )}&descricao=${encodeURIComponent(
          descricao
        )}&valorAnual=${encodeURIComponent(
          valorAnual
        )}&valorSemestral=${encodeURIComponent(
          valorSemestral
        )}&valorMensal=${encodeURIComponent(
          valorMensal
        )}&imgSource=${encodeURIComponent(imgSource)}`;
        // Redirecionando para a nova URL
        location.href = url;
      }
      break;
    case "Planos":
      location.href = "Planos.html";
      break;
    default:
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

  // Obter os elementos HTML
  const atividade = document.getElementById("atividade").value;
  const plano = document.getElementById("plano").value;
  const matriculado = document.getElementById("matriculado").checked;
  const numMat = document.getElementById("numMat").value;

  // Verificar se uma atividade e um plano foram selecionados
  if (!atividade) {
    alert("É necessesário selecionar uma atividade!");
    return;
  }
  if (!plano) {
    alert("é necessário selecionar um plano!");
    return;
  }

  // Obter o valor mensal da atividade
  let valorMensal = valoresMensais[atividade];
  let valorTotal;

  // Calcular o valor do plano com base na duração
  switch (plano) {
    case "mensal":
      valorTotal = valorMensal;
      break;
    case "semestral":
      valorTotal = valorMensal * 6;
      break;
    case "anual":
      valorTotal = valorMensal * 12;
      break;
    default:
      valorTotal = 0;
      break;
  }

  // Verificar se o usuário precisa pagar a taxa de matrícula
  if (!matriculado || !numMat) {
    valorTotal += valorMatricula;
  }

  // Exibir o valor total
  document.getElementById("TxtTotal").value = valorTotal.toFixed(0);
}

function validarTelefone(event) {
  const input = event.target;
  const valor = input.value;
  const isCelular = input.id === "cel";

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

function mostrarEquipamento(index) {
  const equipamentos = [
    {
      nome: "Cadeira Extensora", // Removemos as tags HTML do nome
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

  // Seleciona o elemento da imagem e o da descrição
  const imgElement = document.getElementById("imgEquipamento");
  const descElement = document.getElementById("descricaoEquipamento");
  const tituloElement = document.getElementById("tituloEquipamento");
  const fonteElement = document.getElementById("fonteEquipamento");

  // Atualiza a imagem
  imgElement.src = equipamentos[index].img;

  // Atualiza a descrição
  descElement.textContent = equipamentos[index].desc;

  // Atualiza o título
  tituloElement.textContent = equipamentos[index].nome;

  // Atualiza o link da fonte
  fonteElement.href = equipamentos[index].fonte;
  fonteElement.textContent = "[Fonte]"; // Define o texto do link da fonte
}
