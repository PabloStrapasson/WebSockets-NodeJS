import "./socket-front-index.js"

const listDocumentos = document.getElementById("lista-documentos");

function inserirLinkDocumento(nomeDoc){
    listDocumentos.innerHTML += `
        <a href="documento.html?nome=${nomeDoc}" class="list-group-item list-group-item-action">
            ${nomeDoc}
        </a>
    `;
}

inserirLinkDocumento("Node");