function clicouBranco() {
    alert("Seu voto será anulado se clicar em 'CONFIRMA'");
}



function clicouCorrige() {
    let audio = document.getElementById("som-correcao");
    audio.play();
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    atualizaFoto(); // Atualiza a foto quando os campos são limpos
}

function clicouConfirma() {
    let audio = document.getElementById("som-confirmacao");
    audio.play();
        
}

function clicou(valor) {
    let audio = document.getElementById("som-numeracao");
    audio.play();
    let valor1 = document.getElementById("campo1").value;
    let valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
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
    } 
    
    else if (valor1 === '0' && valor2 === '3') {
        document.getElementById('foto').innerHTML = "<img src='./imagens/edson.jpg' alt='Foto do Edson'>";
        document.getElementById('nome').innerHTML = "Chapa O Mestre";
    } 

    else if (valor1 !== '' && valor2 !== '') {
        document.getElementById('foto').innerHTML = "<img src='./imagens/nulo.jpg' alt='Foto de nulo'>";
        document.getElementById('nome').innerHTML = " Vai anular seu voto? " ;
        document.getElementById('nome').style.fontSize = '25px'; 
    }
    
    else {
        document.getElementById('foto').innerHTML = "";
        document.getElementById('nome').innerHTML = "";
    }
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


function clicouConfirma() {
    let valor1 = parseInt(document.getElementById("campo1").value);
    let valor2 = parseInt(document.getElementById("campo2").value);
    let candidato = (valor1 * 10) + valor2;

    if (sessionStorage.getItem(candidato) !== null) {
        let votos = parseInt(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votos);
    } else {
        sessionStorage.setItem(candidato, 1);
    }

    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    atualizaFoto(); // Atualiza a foto quando os campos são limpos

    let audio = document.getElementById("som-confirmacao");
    audio.play();
}

function resultado() {
    document.getElementById("resultado").innerHTML = "";
    for (let i = 0; i < 100; i++) {
        if (sessionStorage.getItem(i) !== null) {
            document.getElementById("resultado").innerHTML += "Candidato " + i + " tem " + sessionStorage.getItem(i) + " votos<br/>";
        }
    }

    let totalVotosBrancos = sessionStorage.getItem('branco') || 0;
    document.getElementById("resultado").innerHTML += "Votos em branco: " + totalVotosBrancos;
}

let totalVotosBrancos = 0;

function contarCliquesBotaoBranco() {
    totalVotosBrancos++;
    sessionStorage.setItem('branco', totalVotosBrancos);
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
/*
function clicouBranco() {
  alert("Seu voto será anulado se clicar em 'CONFIRMA'");
}

function clicouConfirma() {
 // Reproduzir o som de confirmação
 let audio = document.getElementById("som-confirmacao");
 audio.play();
}

function clicouCorrige() {
  // Reproduzir o som de correção
  let audio = document.getElementById("som-correcao");
  audio.play();
  document.getElementById("campo1").value = "";
  document.getElementById("campo2").value = "";
}



function clicou(valor) {
  let audio = document.getElementById("som-numeracao");
  audio.play();
 var valor1 = document.getElementById("campo1").value;
 var valor2 = document.getElementById("campo2").value;
 if (valor1 == "") {
    document.getElementById("campo1").value = valor;
} else if (valor2 == "") {
     document.getElementById("campo2").value = valor;

    }
}

function adicionaFoto() {
    let valor1 = document.getElementById("campo1").value;
    let valor2 = document.getElementById("campo2").value;

    if (valor1 == '0' && valor2 == '1') {
        document.getElementById('foto').innerHTML = "<img src='./imagens/matheus.jpg' alt='Foto de Matheus'>";
        document.getElementById('nome').innerHTML = "Chapa Od Melhores";
    } else if (valor1 == '0' && valor2 == '2') {
        document.getElementById('foto').innerHTML = "<img src='./imagens/davi.jpg' alt='Foto de Davi'>";
        document.getElementById('nome').innerHTML = "Chapa dos Invencíveis";
    } else {
        document.getElementById('foto').innerHTML = "Nenhuma foto para os valores fornecidos.";
        document.getElementById('nome').innerHTML = "";
    }


// Adiciona eventos de input aos campos para atualizar a foto em tempo real
document.getElementById('campo1').addEventListener('input', adicionaFoto);
document.getElementById('campo2').addEventListener('input', adicionaFoto);
}


function clicouConfirma() {
 var valor1 = parseInt(document.getElementById("campo1").value);
 var valor2 = parseInt(document.getElementById("campo2").value);
 var candidato = (valor1 * 10) + valor2;
 if (sessionStorage.getItem(candidato) !== null) {
     votos = parseInt(sessionStorage.getItem(candidato)) + 1;
     sessionStorage.setItem(candidato, votos);
 } else {
     sessionStorage.setItem(candidato, 1);
 }
 //alert("Confirmado voto no candidato " + candidado)
 document.getElementById("campo1").value = "";
 document.getElementById("campo2").value = "";
 
 // Reproduzindo o som
 let audio = document.getElementById("som-confirmacao");
 audio.play();
}

function resultado() {
 document.getElementById("resultado").innerHTML = "";
 for (i = 0; i < 100; i++) {
     if (sessionStorage.getItem(i) !== null) {
         document.getElementById("resultado").innerHTML += "Candidato " + i + " tem " + sessionStorage.getItem(i) + " votos<br/>";
     }
 }
 
 // Variáveis globais para contar os votos
 var totalVotosBrancos = sessionStorage.getItem('branco') || 0;

 // Adicionando a contagem dos votos brancos
 document.getElementById("resultado").innerHTML += "Votos em branco: " + totalVotosBrancos;
}

// Função para contar cliques no botão branco
let totalVotosBrancos = 0;
function contarCliquesBotaoBranco() {
 totalVotosBrancos++;
 sessionStorage.setItem('branco', totalVotosBrancos);
 alert("O botão branco foi clicado " + totalVotosBrancos + " vezes.");
}

 // Adiciona um ouvinte de evento para detectar as teclas do teclado
 document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é um número de 0 a 9
    if (event.key >= '0' && event.key <= '9') {
        // Chama a função clicou() com o número correspondente
        clicou(parseInt(event.key));
    } else if (event.key === 'Enter') {
        // Se a tecla Enter for pressionada, chama a função clicouConfirma() para confirmar
        clicouConfirma('confirmar');
    }
});*/





