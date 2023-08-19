import { styled } from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: ${({theme}) => theme["escala-g"]};
    padding-bottom: ${({theme}) => theme["escala-plus"]};
`
const ButtonBase = styled.button`
    border: 0;
    background-color: ${({theme}) => theme["first-color-2"]};
    padding-inline: ${({theme}) => theme["escala-p"]};
    border-radius: 10px;

    &:hover{
        background-color: ${({theme}) => theme["first-color-1"]};
    }
`
export const SearchTransactionButton = styled(ButtonBase)`
`
export const RegisterButton = styled(ButtonBase)`
    width: 100%;
    padding-block: ${({theme}) => theme["escala-m"]};
    margin-top: ${({theme}) => theme["escala-m"]};

`

export const DialogContent = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 33rem;
    padding: 2rem;
    border-radius: 5px;
    background-color: ${({theme}) => theme['neutral-color-8']};
`
export const DialogOverlay = styled(Dialog.Overlay)`
    background-color: #00000076;
    position: fixed;
    inset: 0; //top, bottom, left, rigth
`
export const DialogCloseContainer = styled.div`
    display: flex;
    justify-content: end;
`

export const DialogContentInput = styled.div`
    input{
        margin-block: ${({theme}) => theme['escala-xx-pp']};
    }
`

export const TransationType = styled.div`
    display: flex;
    gap: 1rem;

    input[type='radio']{
        display: none;
        &:checked + label svg{
            fill: ${({theme}) => theme["neutral-color-2"]};
        }
    }
    input[type='radio']:checked + label[data-type='outcome']{
        background-color: ${({theme}) => theme["second-color-2"]};
    }
    input[type='radio']:checked + label[data-type='income']{
        background-color: ${({theme}) => theme["first-color-2"]};
    }
`
interface SingleTransationType {
    $styleType: 'income' | 'outcome',
}
export const SingleTransationType = styled.label<SingleTransationType>`
    background-color: ${({theme}) => theme['neutral-color-7']};
    width: 50%;
    padding: ${({theme}) => theme['escala-m']};
    display: flex;
    text-align: center;
    justify-content: center;
    border-radius: 10px;
    
    svg{
        fill:  ${({theme, $styleType}) => {
            return $styleType == 'income' ? theme['first-color-2'] 
            : theme['second-color-2']
        }};
    }
    
    &:hover{
        background-color: ${({theme}) => theme['neutral-color-6']};
    }
`