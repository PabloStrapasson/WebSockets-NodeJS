import { emitirTextoEditor } from "./socket-front-documento.js";

const socket = io();

const textArea =document.getElementById('editor-texto');
textArea.addEventListener('keyup', () => {
    emitirTextoEditor(textArea.value);
})

function atualizaTextoEditor(texto) {
    textArea.value = texto;
}

export { atualizaTextoEditor }