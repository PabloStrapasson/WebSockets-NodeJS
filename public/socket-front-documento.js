import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(texto) {
    socket.emit("text_area", texto);
}

socket.on("texto_cliente", (texto) => {
    atualizaTextoEditor(texto);
})

export { emitirTextoEditor }