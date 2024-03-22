import express from "express";
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import './dbconnect.js'

const app = express();
const porta = process.env.PORTA || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorioPublico));

const servidorHTTP = http.createServer(app);

servidorHTTP.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`);
});

const io = new Server(servidorHTTP);
export default io;