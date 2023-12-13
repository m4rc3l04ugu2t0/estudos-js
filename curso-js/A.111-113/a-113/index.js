function jsonParaArrayDeArrays(json) {
  return json.map((objeto) => Object.values(objeto));
}

const criarTabela = (json) => {
  // Textos para os rótulos e dados
  var rotulos = [
    "Nome",
    "Email",
    "Salario",
    "Estado",
    "Impresa",
    "Idade",
    "Sexo",
    "CPF",
  ];

  var dados = jsonParaArrayDeArrays(json);

  // Chamar a função para criar a tabela dinamicamente
  var tabelaHTML = criarTabelaDinamica(rotulos, dados);

  // Adicionar tabela ao contêiner
  var tabelaContainer = document.getElementById("tabelaContainer");
  tabelaContainer.innerHTML = "";
  tabelaContainer.appendChild(tabelaHTML);
};

function criarTabelaDinamica(rotulos, dados) {
  // Criar tabela
  var tabela = document.createElement("table");

  // Adicionar cabeçalho
  var cabecalho = tabela.createTHead();
  var row = cabecalho.insertRow();
  for (var i = 0; i < rotulos.length; i++) {
    var th = document.createElement("th");
    th.textContent = rotulos[i];
    row.appendChild(th);
  }

  // Adicionar dados
  var corpoTabela = tabela.createTBody();
  for (var i = 0; i < dados.length; i++) {
    var row = corpoTabela.insertRow();
    for (var j = 0; j < dados[i].length; j++) {
      var cell = row.insertCell();
      cell.textContent = dados[i][j];
    }
  }

  return tabela;
}

const loadPeople = (json) => {
  const result = document.querySelector("#result");
};

axios("pessoas.json").then((response) => criarTabela(response.data));
