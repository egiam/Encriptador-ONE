const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

// Funcion para encriptar
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(stringEncriptada) {
    let resultado = "";
    for (let i = 0; i < stringEncriptada.length; i++) {
        if (stringEncriptada[i] === "e") {
            resultado += "enter";
        } else if (stringEncriptada[i] === "i") {
            resultado += "imes";
        } else if (stringEncriptada[i] === "a") {
            resultado += "ai";
        } else if (stringEncriptada[i] === "o") {
            resultado += "ober";
        } else if (stringEncriptada[i] === "u") {
            resultado += "ufat";
        } else {
            resultado += stringEncriptada[i];
        }
    }
    return resultado;
}

function encriptar2(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }
    return stringEncriptada;
}

function btnEncriptar() {
    const textoEncripatdo = encriptar2(inputTexto.value);
    mensaje.value = textoEncripatdo;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

// Funcion para desencriptar
// La palabra "enter" es convertida para "e"
// La palabra "imes" es convertida para "i"
// La palabra "ai" es convertida para "a"
// La palabra "ober" es convertida para "o"
// La palabra "ufat" es convertida para "u"

function desencriptar(stringDesencriptada) {
    let resultado = "";
    for (let i = 0; i < stringDesencriptada.length; i++) {
        if (stringDesencriptada[i] === "e") {
            resultado += "enter";
        } else if (stringDesencriptada[i] === "i") {
            resultado += "imes";
        } else if (stringDesencriptada[i] === "a") {
            resultado += "ai";
        } else if (stringDesencriptada[i] === "o") {
            resultado += "ober";
        } else if (stringDesencriptada[i] === "u") {
            resultado += "ufat";
        } else {
            resultado += stringDesencriptada[i];
        }
    }
    return resultado;
}

function desencriptar2(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(
                matrizCodigo[i][1],
                matrizCodigo[i][0]
            );
        }
    }

    return stringDesencriptada;
}

function btnDesencriptar() {
    const textoDesencripatdo = desencriptar2(inputTexto.value);
    mensaje.value = textoDesencripatdo;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

// Funcion para el boton Copiar

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "Texto Copiado";
}

//