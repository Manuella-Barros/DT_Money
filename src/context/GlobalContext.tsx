import { createContext, useReducer } from "react";
import { GetTransaction, getTransactions } from "../fetch/getTransactions";

interface GlobalContextProps {
    transactions: GetTransaction[] | GetTransaction | null,
    setDispatch: (a: Actions) => void
}

export const GlobalContext = createContext({} as GlobalContextProps);

export const ACTIONS = {
    SET_ALL_TRANSACTIONS: 'SET_ALL_TRANSACTIONS',
    SET_TRANSACTION: 'SET_TRANSACTION',
    GET_TRANSACTION: 'GET_TRANSACTION',
} as const;
type ActionsType = typeof ACTIONS[keyof typeof ACTIONS]

type State = GetTransaction[] | GetTransaction | null
interface Actions {
    type: ActionsType, 
    payload: GetTransaction[] | GetTransaction,
}

export function isArray(data: unknown): data is GetTransaction[]{
    return Array.isArray(data)
}

export const GlobalProvider = ({children}: {children: React.ReactNode}) => { 

    function reducer(state: State, actions: Actions){
        switch(actions.type){
            case "SET_ALL_TRANSACTIONS":
                if(isArray(actions.payload))
                    return actions.payload;
                return state;
            case "GET_TRANSACTION":
                if(state && isArray(state) && isArray(actions.payload))
                    return actions.payload;
                return state; 

            case "SET_TRANSACTION":
                if(state && isArray(state) && !isArray(actions.payload))
                    return [actions.payload, ...state]
                return state;    
        }
    }
    const [transactions, dispatch] = useReducer(reducer, null);

    function setDispatch({type, payload}: Actions){
        dispatch({type, payload})
    }
    

    return <GlobalContext.Provider value={{transactions, setDispatch}}>
        {children}
    </GlobalContext.Provider>
}