//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector("input").value;
    if (nome == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        mostrarAmigos();
    }
    console.log(amigos);
    limparCampo();
}

function limparCampo() {
    let nome = document.querySelector("input");
    nome.value = "";
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.append(item);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}