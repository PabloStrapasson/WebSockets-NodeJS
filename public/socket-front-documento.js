import { atualizaTextoEditor, redirecionar } from "./documento.js";

const socket = io();

function selecionaDocumento(titulo){
    socket.emit("selecionar_documento", titulo, (texto) => {
        atualizaTextoEditor(texto);
    })
}

function emitirTextoEditor(dados) {
    socket.emit("text_area", dados);
}

function emitirExcluirDocumento(titulo){
    socket.emit("excluir_documento", titulo);
}

socket.on("texto_cliente", (texto) => {
    atualizaTextoEditor(texto);
});

socket.on("excluir_documento_sucesso", (titulo) => {
    redirecionar(titulo);
});

export { emitirTextoEditor, selecionaDocumento, emitirExcluirDocumento }