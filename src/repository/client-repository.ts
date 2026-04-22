import fs from 'fs/promises';
import path from 'path';
import { clientModel } from "../models/client-models";


const filePath = path.resolve(__dirname, '../data/client.json');

const readDatabase = async (): Promise<clientModel[]> => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch {
        return []; 
    }
};

const writeDatabase = async (data: clientModel[]): Promise<void> => {
    await fs.writeFile(filePath, JSON.stringify(data, null, 4));
};

export const findAllClient = async (): Promise<clientModel[]> => {
    return await readDatabase();
};

export const insertClient = async (client: clientModel): Promise<void> => {
    const db = await readDatabase();
    db.push(client);
    await writeDatabase(db);
};

export const updateClientById = async (id: number, clientData: Partial<clientModel>): Promise<boolean> => {
    const db = await readDatabase();
    const index = db.findIndex(c => c.id === id);
    if (index === -1) return false;
    
   
    db[index] = { ...db[index], ...clientData, id }; 
    await writeDatabase(db);
    return true;
};

export const deleteClientById = async (id: number): Promise<boolean> => {
    const db = await readDatabase();
    const index = db.findIndex(c => c.id === id);
    if (index === -1) return false;
    
    db.splice(index, 1);
    await writeDatabase(db);
    return true;
};