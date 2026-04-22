import { clientModel } from "../models/client-models";
import * as repository from "../repository/client-repository";
import * as httpResponse from "../utils/http-helper";

export const getClienteService = async () => {
    const data = await repository.findAllClient();
    return httpResponse.ok(data);
};

export const createClientService = async (clientData: Omit<clientModel, 'id'>) => {
    if (!clientData.nome || !clientData.email) {
        return httpResponse.badRequest(new Error("Nome e email são obrigatórios."));
    }

    const db = await repository.findAllClient();

    const newId = db.length > 0 ? Math.max(...db.map(c => c.id)) + 1 : 1;
    
    const newClient = { id: newId, ...clientData };
    await repository.insertClient(newClient);
    
    return httpResponse.created({
        message: "Cliente criado com sucesso.",
        client: newClient
    });
};

export const updateClientService = async (id: number, clientData: Partial<clientModel>) => {
    const updated = await repository.updateClientById(id, clientData);
    if (!updated) {
        return httpResponse.badRequest(new Error("Cliente não encontrado para atualização."));
    }
    return httpResponse.ok({ message: "Cliente atualizado com sucesso!" });
};

export const deleteClientService = async (id: number) => {
    const deleted = await repository.deleteClientById(id);
    if (!deleted) {
        return httpResponse.badRequest(new Error("Cliente não encontrado para exclusão."));
    }
    return httpResponse.noContent();
};