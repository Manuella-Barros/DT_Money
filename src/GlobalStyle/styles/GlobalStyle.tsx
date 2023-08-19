import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${({theme}) => theme['neutral-color-1']};
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: ${({theme}) => theme['neutral-color-7']};
    }

    button{
        font-size: ${({theme}) => theme['escala-pp']};
    }
    
    p{
        font-size: ${({theme}) => theme['escala-p']};
        color: ${({theme}) => theme['neutral-color-3']};
    }
`