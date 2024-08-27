const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar"); 


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "" ;
    mensaje.style.backgroundImage = "none"

    const btnCopiar = document.querySelector('.btn-copiar');
    
    if (textoEncriptado) {
        btnCopiar.classList.remove('hidden'); // Mostrar botón si hay texto encriptado
    } else {
        btnCopiar.classList.add('hidden'); // Ocultar si no hay texto
    }

    // Elimina el texto dinámico del DOM
    const dinamico = document.querySelector('.dinamico');
    if (dinamico) {
        dinamico.remove();
    }
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }

    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "" ;
    
}


function desencriptar(stringDescriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDescriptada.includes(matrizCodigo[i][1])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])


        }

    }
    return stringDescriptada
}

    function copiarTexto(){
        console.log("funcion copiar llamada");
        console.log("Texto a copiar:", mensaje.value); // Verifica el texto a copiar
        
        // Remueve temporalmente el atributo "disabled"
        mensaje.disabled = false;
        mensaje.select();
        mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles
        document.execCommand("copy");
        
        // Restaura el atributo "disabled"
        mensaje.disabled = true;
        
        alert("Texto copiado");
}
// Agregando el evento de clic al botón de copiar
btnCopiar.addEventListener('click', copiarTexto);
   
