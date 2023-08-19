import { useContext, useEffect } from "react";
import Input from "../../components/input/Input";
import {GetTransaction, getTransactions } from "../../fetch/getTransactions";
import Wrapper from "../../GlobalStyle/wrapper/Wrapper";
import SingleTransaction from "./componentes/singleTransaction/SingleTransaction";
import TotalTransaction from "./componentes/totalTransaction/TotalTransaction";
import * as Style from './Home.styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "@phosphor-icons/react";
import { MagnifyingGlass } from '@phosphor-icons/react';
import { ACTIONS, GlobalContext, isArray } from "../../context/GlobalContext";
import { useTransactionsCost } from "../../hooks/useTransactionsCost";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    searchTransaction: z.string().min(3, "Minimo 3 caracteres"),
})
type Data = z.infer<typeof schema>;

function Home() {
    const { transactions, setDispatch } = useContext(GlobalContext);
    const transactionsCost = useTransactionsCost();
    const { register, handleSubmit, formState: {errors}} = useForm<Data>({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        getTransactions().then((res: GetTransaction[]) => {
            setDispatch({
                type: ACTIONS.SET_ALL_TRANSACTIONS,
                payload: res,
            })
        })
    }, [errors.searchTransaction])

    function handleFormSubmit(data: Data){
        getTransactions(data.searchTransaction).then((res: GetTransaction[]) => {
            console.log(res)
            setDispatch({
                type: "GET_TRANSACTION",
                payload: res,
            })
        })
    }

    return (
        <Wrapper $styleColor={'body'}>
            <main>
                <Style.TotalTransaction>
                    <TotalTransaction action={'Entrada'} svg={<ArrowCircleUp size={25}/>} price={transactionsCost?.income}/>
                    <TotalTransaction action={'Saida'} svg={<ArrowCircleDown size={25}/>} price={transactionsCost?.outcome}/>
                    <TotalTransaction action={'Total'} svg={<CurrencyDollar size={25}/>} price={transactionsCost?.total}/>
                </Style.TotalTransaction>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Style.SearchTransaction>
                            <Input
                                type="text"
                                placeholder="Busque uma transação"
                                register={{...register("searchTransaction")}}
                            />
                            <Style.SearchTransactionButton type="submit">
                                <MagnifyingGlass size={15} /> Buscar
                            </Style.SearchTransactionButton> 
                    </Style.SearchTransaction>
                    <Style.FormError>
                        {
                            errors.searchTransaction && <Style.SearchError>{errors?.searchTransaction?.message?.toString()}</Style.SearchError>
                        }
                    </Style.FormError>
                </form>

                <div>
                    {
                        isArray(transactions) && transactions?.map(transaction => {
                            return <SingleTransaction
                                key={transaction.id}
                                description={transaction.description}
                                price={transaction.price}
                                category={transaction.category}
                                type={transaction.type}
                                createdAt={new Date(transaction.createdAt)}
                            />
                        })
                    }

                </div>
            </main>
        </Wrapper>
    );
}

export default Home;