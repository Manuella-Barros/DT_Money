import { styled } from "styled-components";

export const Input = styled.input`
    background-color: ${({theme}) => theme["neutral-color-9"]};
    color: ${({theme}) => theme["neutral-color-3"]};
    border-radius: 10px;
    width: 100%;
    padding-block: ${({theme}) => theme["escala-m"]};
    padding-left: ${({theme}) => theme["escala-xpp"]};
    font-size: ${({theme}) => theme["escala-p"]};
    border: 0;

    &:focus{
        outline: 1px solid ${({theme}) => theme["first-color-2"]};
        color: ${({theme}) => theme["neutral-color-2"]};
        &::placeholder{
            color: ${({theme}) => theme["neutral-color-2"]};
        }
    }
    
    &[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
`