import { axiosAPI } from "../lib/axios";

interface PostTransactionsprops {
    description: string,
    price: number,
    category: string,
    type: string,
}

async function postTransactions({description, price, category, type}: PostTransactionsprops) {
    const post = await axiosAPI.post('transactions', {
        description: description,
        price: price,
        category: category,
        createdAt: new Date(),
        type: type,
    })

    return post.data;
}

export default postTransactions;