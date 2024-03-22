import io from './server.js'
import { encontrarDocumento, atualizaDocumento, obterDocumentos, adicionarDocumento, excluirDocumento } from './documentosDB.js';

io.on('connection', (socket) => {
    console.log(`Um usuario de ID ${socket.id} se conectou`);

    socket.on("obter_documentos", async (devolverDocumentos) => {
        const documentos = await obterDocumentos();
        console.log(documentos);
        devolverDocumentos(documentos);
    });

    socket.on("adicionar_documento", async (tituloDoc) => {
        // verificando se o doc ja não existe
        const documentoExiste = (await encontrarDocumento(tituloDoc)) !== null;

        if(documentoExiste){
            socket.emit("documento_existente", tituloDoc);
        } else {
            //inserindo novo documento
            const resultado = await adicionarDocumento(tituloDoc);
            console.log("resultado: ", resultado);
            if(resultado.acknowledged){
                io.emit("atualizar_interface", tituloDoc);
            }
        }
    });
    
    socket.on("selecionar_documento", async (tituloDoc, devolverTexto) => {
        socket.join(tituloDoc);

        const documento = await encontrarDocumento(tituloDoc);
        console.log(documento);
        if(documento){
            devolverTexto(documento.texto);
        }
    });

    socket.on("text_area", async ({ texto, titulo }) => {
        const atualizacao = await atualizaDocumento(titulo, texto);
        if(atualizacao.modifiedCount){
            socket.to(titulo).emit("texto_cliente", texto);
        }
    });

    socket.on("excluir_documento", async (tituloDoc) => {
        const resultado = await excluirDocumento(tituloDoc);
        
        if(resultado.deletedCount){
            io.emit('excluir_documento_sucesso', tituloDoc);
        }
    });

});