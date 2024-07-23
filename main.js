// const form = document.getElementById('formulario')


document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    validaComparacao();
})

function validaComparacao() {
    const numeroA = document.getElementById('numeroA').value;
    const numeroB = document.getElementById('numeroB').value;

    if (numeroB > numeroA) {
        alert("Formulário válido! O número B é maior que o número A.");
        return true; // Formulário válido
    } else {
        alert("Formulário inválido! O número B deve ser maior que o número A.")
        return false; // Impede o envio do formulário
    }

}