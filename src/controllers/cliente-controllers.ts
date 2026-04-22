import { Request, Response } from "express";
import * as service from "../services/client-service";

export const getClient = async (req: Request, res: Response) => {
    const httpResponse = await service.getClienteService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createClient = async (req: Request, res: Response) => {
    const httpResponse = await service.createClientService(req.body);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};


export const updateClient = async (req: Request<{ id: string }>, res: Response) => {
    const id = parseInt(req.params.id);
    
  
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido. O ID deve ser numérico." });
    }

    const httpResponse = await service.updateClientService(id, req.body);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};


export const deleteClient = async (req: Request<{ id: string }>, res: Response) => {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido. O ID deve ser numérico." });
    }

    const httpResponse = await service.deleteClientService(id);
    
    if(httpResponse.statusCode === 204) {
        res.status(204).send();
    } else {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
};