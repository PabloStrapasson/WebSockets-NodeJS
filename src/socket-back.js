import io from './server.js'

io.on('connection', (socket) => {
    console.log(`Um usuario de ID ${socket.id} se conectou`);
    
    socket.on("text_area", (texto) => {
        socket.broadcast.emit("texto_cliente", texto)
    });
});