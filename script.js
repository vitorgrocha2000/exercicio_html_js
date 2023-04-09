const body = document.querySelector("body")
const elementos = document.querySelectorAll(".campo");
const form = document.querySelector("#form");
const label_campo = document.querySelectorAll(".label_campo")

for (let i = 0; i < label_campo.length; i++) {
    label_campo[i].style.width = "20%"
}

body.style.width = "45vw"
body.style.margin = "auto";

for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = "flex";
    elementos[i].style.marginBottom = "8px";
    elementos[i].style.width = "90%";
    elementos[i].style.resize = "none";  
    elementos[i].style.boxSizing = "border-box"
    elementos[i].style.alingItems = "center"
}

const campo = document.querySelectorAll(".insert")
for (let i = 0; i < campo.length; i++) {
    campo[i].style.width = "100%"
}

const button = document.getElementById("button-submit")
button.style.backgroundColor = "#2ecc71"
button.style.cursor = "pointer"
button.style.width = "100%"
button.style.height = "32px"
button.style.fontSize = "16px"
button.style.textTransform = "uppercase"
button.style.borderColor = "#3cdb7e"
button.onmouseenter = function () {
    button.style.backgroundColor = "#3cdb7e"
}
button.onmouseleave = function () {
    button.style.backgroundColor = '#2ecc71';
};

let form_valido;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const num_1 = parseInt(document.getElementById("num-1").value);
    const num_2 = parseInt(document.getElementById("num-2").value);

    const valido = `O número ${num_2} é maior que o número ${num_1}, Parabéns!`;
    const n_valido = `O número ${num_2} <b>não</b> é maior que o número ${num_1}, Refaça`;
    const igual = "São iguais";

    const div = document.createElement('div');

    limparMensagem()

    div.setAttribute('id', 'mensagem');

    if (num_2 > num_1) {
        div.innerHTML = valido
    } else if (num_2 === num_1) {
        div.innerHTML = igual;
    } else {
        div.innerHTML = n_valido
    }

    form.append(div)

    const campoA = document.getElementById("num-1");
    const campoB = document.getElementById("num-2");

    campoA.addEventListener('input', function () {
        limparMensagem();
    });

    campoB.addEventListener('input', function () {
        limparMensagem();
    });


})

function limparMensagem() {
    let mensagemAnterior = document.querySelector("#mensagem");
    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }
}