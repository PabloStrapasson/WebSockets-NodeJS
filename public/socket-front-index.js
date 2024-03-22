import { inserirLinkDocumento, removerLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    documentos.forEach( (documento) => {
        inserirLinkDocumento(documento.titulo);
    });
});

function emitirAdicionarDocumento(tituloDoc){
    socket.emit("adicionar_documento", tituloDoc);
}

socket.on("atualizar_interface", (tituloDoc) => {
    inserirLinkDocumento(tituloDoc);
});

socket.on("documento_existente", (tituloDoc) => {
    alert(`O documento ${tituloDoc} já existe`);
});

socket.on("excluir_documento_sucesso", (tituloDoc) => {
    removerLinkDocumento(tituloDoc);
});

export { emitirAdicionarDocumento };