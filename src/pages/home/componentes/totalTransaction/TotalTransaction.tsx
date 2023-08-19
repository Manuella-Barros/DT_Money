import * as Style from '../../Home.styles';
import { ReactElement } from 'react';

interface TotalTransactionProps {
    action: 'Entrada' | 'Saida' | 'Total',
    svg: ReactElement,
    price: number | undefined,
}

function TotalTransaction({action, svg, price}: TotalTransactionProps) {
    return (
        <Style.SingleTotalTransaction >
            <p>{action}</p>
            <>{svg}</>
            <span>R${price}</span>
        </Style.SingleTotalTransaction>
    );
}

export default TotalTransaction;