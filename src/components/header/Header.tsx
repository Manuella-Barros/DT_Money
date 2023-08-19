import Wrapper from "../../GlobalStyle/wrapper/Wrapper";
import * as Style from './Header.styles';
import HeaderModal from "./HeaderModal";

function Header() {
    return (
        <Wrapper $styleColor={'header'}>
            <Style.Header>
                <picture>
                    <img src="./images/logo.svg" alt="" />
                </picture>

                <HeaderModal/>
            </Style.Header>
        </Wrapper>
    );
}

export default Header;