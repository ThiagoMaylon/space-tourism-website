import { Link } from "react-router-dom";
import { HeaderStyle } from "./style";
import icon from '../../assets/shared/logo.svg';
import iconOpen from '../../assets/shared/icon-hamburger.svg';
import iconClose from '../../assets/shared/icon-close.svg';

export const Header = ({setIsVisible}) => {
    return(
        <HeaderStyle>
            <div className="logo">
                <img src={icon} alt="logo" />
                <hr />
            </div>


            <div className="container-nav">
                <ul>
                    <li><Link to='/'><span>00</span> HOME</Link></li>
                    <li><Link><span>01</span> DESTINATION</Link></li>
                    <li><Link><span>02</span> CREW</Link></li>
                    <li><Link><span>03</span> TECHNOLOGY</Link></li>
                </ul>
                <div className="icon-menu" onClick={() => setIsVisible(true)}>
                    <img src={iconOpen} alt="" />
                </div>
            </div>
        </HeaderStyle>
    )
}