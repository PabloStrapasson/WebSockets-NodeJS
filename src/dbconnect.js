import { MongoClient } from "mongodb";
import 'dotenv/config'

const client = new MongoClient(process.env.DB_CONNECTION);

let documentosColecao;

try {
    await client.connect();
    const db = client.db("appdocs-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado no banco de dados!")

} catch(erro) {
    console.log(erro);
}

export { documentosColecao };
