/*
Gerador de Senhas: Solicite os dados ao usuário e use random para criar senhas seguras.
*/

// Importando biblioteca time (função para simular o time.sleep)
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

document.getElementById("btnGerar").addEventListener("click", async function() {
    
    // Capturando os valores dos inputs da tela
    let respostas = [
        document.getElementById("nome").value,
        document.getElementById("numero").value,
        document.getElementById("animal").value,
        document.getElementById("data").value,
        document.getElementById("caractere").value
    ];

    let statusDiv = document.getElementById("status");
    let resultadoDiv = document.getElementById("resultado");

    // Limpa resultados anteriores
    resultadoDiv.innerText = "";

    // Validação simples: verifica se algum campo ficou vazio
    if (respostas.some(r => r.trim() === "")) {
        statusDiv.innerText = "Por favor, preencha todos os campos!";
        return;
    }

    // output para o usuario com simulação do time.sleep
    statusDiv.innerText = "Coletando dados...";
    await sleep(900);
    
    statusDiv.innerText = "Preparando senha...";
    await sleep(900);

    // transforma tudo em strings
    let mistura = respostas.map(item => String(item)).join("");

    // Gera a chave com os caracteres da lista respostas
    let chave = [];
    for (let i = 0; i < 8; i++) {
        let indiceAleatorio = Math.floor(Math.random() * mistura.length);
        chave.push(mistura[indiceAleatorio]);
    }

    // Jutando a lista com a chave para criar uma chave final
    let chave_final = chave.join("");

    // Exibe o resultado final na tela
    statusDiv.innerText = "";
    resultadoDiv.innerText = `Sua chave é: ${chave_final}`;
});