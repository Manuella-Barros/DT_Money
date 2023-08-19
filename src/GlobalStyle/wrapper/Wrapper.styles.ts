import { styled } from 'styled-components'

interface ExternalWrapperProps {
    $styleColor: 'header' | 'body',
}

export const ExternalWrapper = styled.article<ExternalWrapperProps>`
    background-color: ${({theme, $styleColor}) => {
        return $styleColor == 'header' ? 
        theme['neutral-color-9'] : 
        theme['neutral-color-7']
    }};
`

export const InternalWrapper = styled.section`
    background-color: transparent;
    width: 70rem;
    margin: auto;
`