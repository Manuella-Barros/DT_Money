import { ExternalWrapper, InternalWrapper } from "./Wrapper.styles";

interface WrapperProps {
    $styleColor: 'header' | 'body',
    children: React.ReactNode,
}

function Wrapper({$styleColor, children}: WrapperProps) {
    return (
        <ExternalWrapper $styleColor={$styleColor}>
            <InternalWrapper>
                {children}
            </InternalWrapper>
        </ExternalWrapper>
    );
}

export default Wrapper;