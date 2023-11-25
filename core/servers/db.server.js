import { MongoClient } from 'mongodb';
export let db;
export const connectToDBServer = async (connectionURI) => {
    const client = new MongoClient(connectionURI);
    await client.connect();
    db = client.db(); // en lugar de hacer un return, hace un export más arriba de db
};
