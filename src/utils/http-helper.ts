import { HttpResponse } from "../models/http-response-model"

export const ok = async(data:any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async (data:any): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: data
    }
}

export const noContent = async(): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async(data:any = null):Promise<HttpResponse> => {
    const body = data instanceof Error ? { message: data.message } : data;
    return {
        statusCode: 400,
        body
    }
}