import { css, styled } from "styled-components";


export const TotalTransaction = styled.div`
    display: flex;
    gap: 1.375rem;
    justify-content: space-between;
    transform: translateY(-40%);

    div:first-child svg{
        fill: ${({theme}) => theme["first-color-1"]};
    }
    div:nth-child(2) svg{
        fill: ${({theme}) => theme["second-color-2"]};
    }
    div:last-child{
        background-color: ${({theme}) => theme["first-color-2"]};
        
        svg{
            fill: ${({theme}) => theme["neutral-color-1"]};
        }
    }

    @media(max-width: 500px){
        flex-direction: column;
        transform: translateY(-10%);
    }
`
export const SingleTotalTransaction = styled.div`
    background-color: ${({theme}) => theme["neutral-color-6"]};
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 31.5%;
    padding: ${({theme}) => theme["escala-p"]};
    border-radius: 10px;
    row-gap: 1rem;

    span{
        font-size: ${({theme}) => theme["escala-gg"]};
        color: ${({theme}) => theme["neutral-color-2"]};
        font-weight: bolder;
    }
    svg{
        justify-self: end;
    }

    @media(max-width: 500px){
        width: 100%;
    }
`

export const SearchTransaction = styled.div`
    display: grid;
    grid-template-columns: 8.5fr 1fr;
    column-gap: 1rem;
    
    @media(max-width: 500px){
        grid-template-columns: 7fr 2fr;
    }
`

export const SearchTransactionButton = styled.button`
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 700;
    border: 1px solid ${({theme}) => theme["first-color-1"]};
    background-color: transparent;
    color: ${({theme}) => theme["first-color-1"]};

    svg{
        fill: ${({theme}) => theme["first-color-1"]};
    }
    
    &:hover {
        background-color: ${({theme}) => theme["first-color-1"]};
        color: ${({theme}) => theme["neutral-color-1"]};
    
        svg{
            fill: ${({theme}) => theme["neutral-color-1"]};
        }
    }
`
export const Error = styled.p`
    margin-block: 0.5rem;
    color: ${({theme}) => theme['second-color-1']};
`
export const FormError = styled(Error)`
`
export const SearchError = styled(Error)`
    position: absolute;
    top: 215px;
    width: 250px;
`

interface SingleTransaction {
    type: 'income' | 'outcome',
}
export const SingleTransaction = styled.div<SingleTransaction>`
    margin-block: 1.2rem;
    display: grid;
    grid-template-columns: 4.4fr 2fr 2fr 1fr 0.2fr;
    background-color: ${({theme}) => theme["neutral-color-6"]};
    padding: ${({theme}) => theme["escala-g"]};
    border-radius: 10px;
    
    @media(max-width: 500px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 1rem;


        p:nth-child(1){
            grid-column: 1/3;
            font-size: 1.2rem;
        }
        span{
            grid-column: 1/3;
            font-size: 1.2rem;
        }
    }

    span{
        color: ${({theme, type}) => {
            return type == 'income' ? theme["first-color-2"] :
            theme["second-color-2"]
        }}
    }
    span::before{
        ${({type}) => type == 'outcome' && css`content:'- ' `}
    }
`