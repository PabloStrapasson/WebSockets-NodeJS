import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionaDocumento(titulo){
    socket.emit("selecionar_documento", titulo, (texto) => {
        atualizaTextoEditor(texto);
    })
}


function emitirTextoEditor(dados) {
    socket.emit("text_area", dados);
}

socket.on("texto_cliente", (texto) => {
    atualizaTextoEditor(texto);
})

export { emitirTextoEditor, selecionaDocumento }