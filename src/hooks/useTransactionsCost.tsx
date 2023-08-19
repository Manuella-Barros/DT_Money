import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface TransactionCost {
    income: number,
    outcome:number,
    total: number,
}

export function useTransactionsCost() {
    const { transactions } = useContext(GlobalContext);

    const transactionsCost:TransactionCost | undefined = transactions?.reduce((state, atualState) => {
        switch(atualState.type){
            case "income":
                state.income += atualState.price
                break;
            case "outcome":
                state.outcome += atualState.price    
                break;
        }
        state.total = state.income - state.outcome;

        return state;
    }, {
        income: 0,
        outcome:0,
        total: 0,
    })

    return transactionsCost;
}