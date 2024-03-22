import io from './server.js'
import { encontrarDocumento, atualizaDocumento } from './documentosDB.js';

io.on('connection', (socket) => {
    console.log(`Um usuario de ID ${socket.id} se conectou`);
    
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

});