//import "./socket-front-index.js"
import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDoc = document.getElementById("input-documento");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    emitirAdicionarDocumento(inputDoc.value);
    inputDoc.value = "";
});

function inserirLinkDocumento(tituloDoc){
    listDocumentos.innerHTML += `
        <a href="documento.html?nome=${tituloDoc}" id="documento-${tituloDoc}" class="list-group-item list-group-item-action">
            ${tituloDoc}
        </a>
    `;
}

function removerLinkDocumento(tituloDoc){
    const documento = document.getElementById(`documento-${tituloDoc}`);
    listDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };