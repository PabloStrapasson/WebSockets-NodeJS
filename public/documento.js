import { emitirTextoEditor, selecionaDocumento, emitirExcluirDocumento } from "./socket-front-documento.js";

const socket = io();

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const tituloDocumento = document.getElementById("titulo-documento");
const textArea =document.getElementById('editor-texto');
const botaoExcluir = document.getElementById("excluir-documento");

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

botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nomeDocumento)
});

function redirecionar(tituloDoc){
    if(tituloDoc === nomeDocumento){
        alert(`O documento ${tituloDoc} foi excluído com sucesso`);
        window.location.href = "/";
    }
}

export { atualizaTextoEditor, redirecionar }