import logo from "../../images/weather.jpeg"
import {IHeaderProps} from '../../interfaces/header-props.interface';
import './Header.css'

function Header(props: IHeaderProps){
    return(
        <header className={`header ${props.isLoader && 'header__border'}`}>
            <img className="header__logo" src={logo} alt="weather" />
        </header>
    )
}

export default Header;
