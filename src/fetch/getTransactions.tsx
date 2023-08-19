import {axiosAPI} from "../lib/axios";

export interface GetTransaction {
    id: number,
    description: string,
    type: "income" | "outcome",
    category: string,
    price: number,
    createdAt: string | Date,
}

export async function getTransactions(query?:string) {
    let request;

    request = await axiosAPI.get('transactions', {
        params: {
            q: query,
            _sort: 'id',
            _order: 'desc',
        }
    })
    
    return request.data
}