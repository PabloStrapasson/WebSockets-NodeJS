import { documentosColeção } from './dbconnect.js';

function encontrarDocumento(tituloDoc){
    const documento = documentosColeção.findOne({
        titulo: tituloDoc
    });

    return documento;
}

function atualizaDocumento(titulo, texto){
    const atualizacao = documentosColeção.updateOne({
        titulo: titulo,
    }, {
        $set: {
            texto: texto
        }
    });

    return atualizacao
}

export { encontrarDocumento, atualizaDocumento }