import { emitirTextoEditor, selecionaDocumento } from "./socket-front-documento.js";

const socket = io();

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const tituloDocumento = document.getElementById("titulo-documento");
const textArea =document.getElementById('editor-texto');

tituloDocumento.textContent = nomeDocumento || "Documento sem Titulo";
selecionaDocumento(nomeDocumento);

textArea.addEventListener('keyup', () => {
    emitirTextoEditor({
        texto: textArea.value, 
        titulo: nomeDocumento
    });
})

function atualizaTextoEditor(texto) {
    textArea.value = texto;
}

export { atualizaTextoEditor }