/* Feito na unha, sem framework para ajudar, se está roubando esse código faça um pix anônimo */

function clicouBranco() {
    alert("Seu voto será anulado se clicar em 'CONFIRMA'");
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    atualizaFoto();
}

function clicouCorrige() {
    let audio = document.getElementById("som-correcao");
    audio.play();
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    atualizaFoto(); // Atualiza a foto quando os campos são limpos
}

function clicouConfirma() {
    let valor1 = document.getElementById("campo1").value;
    let valor2 = document.getElementById("campo2").value;
    let candidato = (parseInt(valor1) * 10) + parseInt(valor2);

    if (valor1 === "" && valor2 === "") {
        if (confirm("Seu voto será anulado! Deseja continuar?")) {
            let votosBranco = parseInt(localStorage.getItem('branco')) || 0;
            localStorage.setItem('branco', votosBranco + 1);
        } else {
            return;
        }
    } else if (!isNaN(candidato)) {
        let votos = parseInt(localStorage.getItem(candidato)) || 0;
        localStorage.setItem(candidato, votos + 1);
    } else {
        alert("Voto inválido!");
        return;
    }

    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    limpaTela(); // Limpa a tela após a confirmação do voto

    let audio = document.getElementById("som-confirmacao");
    audio.play();
}

function clicou(valor) {
    let audio = document.getElementById("som-numeracao");
    audio.play();
    let valor1 = document.getElementById("campo1").value;
    let valor2 = document.getElementById("campo2").value;

    if (valor1 === "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 === "") {
        document.getElementById("campo2").value = valor;
        atualizaFoto(); // Atualiza a foto quando o segundo campo é preenchido
    }
}

function atualizaFoto() {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 === '0' && valor2 === '1') {
        document.getElementById('foto').innerHTML = "<img src='./imagens/matheus.jpeg' alt='Foto do Matheus'>";
        document.getElementById('nome').innerHTML = "Chapa Os Melhores";
    } else if (valor1 === '0' && valor2 === '2') {
        document.getElementById('foto').innerHTML = "<img src='./imagens/davi.jpg' alt='Foto do Davi'>";
        document.getElementById('nome').innerHTML = "Chapa dos Invencíveis";
    } else if (valor1 === '0' && valor2 === '3') {
        document.getElementById('foto').innerHTML = "<img src='./imagens/edson.jpg' alt='Foto do Edson'>";
        document.getElementById('nome').innerHTML = "Chapa O Mestre";
    } else if (valor1 === '0' && valor2 === '4') {
        document.getElementById('foto').innerHTML = "<img src='./imagens/taty.jpeg' alt='Foto da Tatiane'>";
        document.getElementById('nome').innerHTML = "Chapa A Maravilhosa";
    } else if (valor1 !== '' && valor2 !== '') {
        document.getElementById('foto').innerHTML = "<img src='./imagens/nulo.jpg' alt='Foto de nulo'>";
        document.getElementById('nome').innerHTML = "Vai anular seu voto?";
        document.getElementById('nome').style.fontSize = '22px';
    } else {
        document.getElementById('foto').innerHTML = "";
        document.getElementById('nome').innerHTML = "";
    }
}

function limpaTela() {
    document.getElementById('foto').innerHTML = "";
    document.getElementById('nome').innerHTML = "";
    document.getElementById('nome').style.fontSize = '';
}

// Define a mensagem no elemento com id 'foto'
document.getElementById('foto').innerHTML = "";

// Seleciona o elemento para fazer piscar
const elemento = document.getElementById('foto1');

// Função para alternar a visibilidade do elemento
setInterval(() => {
    if (elemento.style.visibility === 'hidden') {
        elemento.style.visibility = 'visible';
    } else {
        elemento.style.visibility = 'hidden';
    }
}, 500); // 500 milissegundos = 0,5 segundos

function resultado() {
    document.getElementById("resultado").innerHTML = "";
    for (let i = 0; i < 100; i++) {
        if (localStorage.getItem(i) !== null) {
            document.getElementById("resultado").innerHTML += "Candidato " + i + " tem " + localStorage.getItem(i) + " votos<br/>";
        }
    }

    let totalVotosBrancos = localStorage.getItem('branco') || 0;
    document.getElementById("resultado").innerHTML += "Votos em branco: " + totalVotosBrancos;
}

let totalVotosBrancos = 0;

function contarCliquesBotaoBranco() {
    totalVotosBrancos++;
    localStorage.setItem('branco', totalVotosBrancos);
    alert("O botão branco foi clicado " + totalVotosBrancos + " vezes.");
}

document.getElementById('campo1').addEventListener('input', atualizaFoto);
document.getElementById('campo2').addEventListener('input', atualizaFoto);

document.addEventListener('keydown', function (event) {
    if (event.key >= '0' && event.key <= '9') {
        clicou(parseInt(event.key));
    } else if (event.key === 'Enter') {
        clicouConfirma();
    }
});
