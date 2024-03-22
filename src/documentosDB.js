import { documentosColecao } from './dbconnect.js';

function encontrarDocumento(tituloDoc){
    const documento = documentosColecao.findOne({
        titulo: tituloDoc
    });

    return documento;
}

function atualizaDocumento(titulo, texto){
    const atualizacao = documentosColecao.updateOne({
        titulo: titulo,
    }, {
        $set: {
            texto: texto
        }
    });

    return atualizacao
}

function adicionarDocumento(tituloDoc){
    const resultado = documentosColecao.insertOne({
        titulo: tituloDoc,
        texto: ""
    });
    return resultado;
}

function obterDocumentos(){
    const documentos = documentosColecao.find().toArray();
    return documentos;
}

function excluirDocumento(tituloDoc){
    const resultado = documentosColecao.deleteOne({
        titulo: tituloDoc
    });
    return resultado;
}

export { encontrarDocumento, atualizaDocumento, obterDocumentos, adicionarDocumento, excluirDocumento }