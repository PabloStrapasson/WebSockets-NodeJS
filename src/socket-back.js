import io from './server.js'

const documentos = [
    {
        nome: "JavaScript",
        texto: "texto JavaScript"
    },
    {
        nome: "Node",
        texto: "texto Node"
    },
    {
        nome: "Socket.io",
        texto: "texto Socket.io"
    },
]
io.on('connection', (socket) => {
    console.log(`Um usuario de ID ${socket.id} se conectou`);
    
    socket.on("selecionar_documento", (tituloDoc, devolverTexto) => {
        socket.join(tituloDoc);

        const documento = encontrarDocumento(tituloDoc);
        if(documento){
            devolverTexto(documento.texto);
        }
    });

    socket.on("text_area", ({ texto, titulo }) => {
        const documento = encontrarDocumento(titulo);
        if(documento){
            documento.texto = texto;
            socket.to(titulo).emit("texto_cliente", texto);
        }
    });

});

function encontrarDocumento(tituloDoc){
    const documento = documentos.find((documento) => {
        return documento.nome === tituloDoc
    });

    return documento;
}