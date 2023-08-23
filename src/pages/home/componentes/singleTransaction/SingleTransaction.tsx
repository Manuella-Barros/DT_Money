import { dateFormatter, moneyFormatter } from '../../../../util/formatter';
import * as Style from '../../Home.styles'

interface SingleTransactionProps {
    description: string,
    price: number,
    category: string,
    type: 'income' | 'outcome',
    createdAt: Date,
}

function SingleTransaction({description, price, category, type, createdAt}: SingleTransactionProps) {
    return (
        <Style.SingleTransaction type={type}>
            <p>{description}</p>
            <span>{moneyFormatter.format(price)}</span>
            <p>{category}</p>
            <p>{dateFormatter.format(createdAt)}</p>
            {/* <button onClick={handleDeleteTransaction}><Trash size={22} /></button> */}
        </Style.SingleTransaction>
    );
}

export default SingleTransaction;