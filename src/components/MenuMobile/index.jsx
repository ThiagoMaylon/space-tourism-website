import { Link } from "react-router-dom"
import { MenuMobileStyle } from "./style"
import IconClose from '../../assets/shared/icon-close.svg'

export const MenuMobile = ({isVisible, setIsVisible}) => {
    return(
        <MenuMobileStyle isVisible={isVisible}>
            <div className="icon-menu" onClick={() => setIsVisible(false)}>
                <img src={IconClose} />
            </div>
            <nav>
                <ul>
                    <li><Link to='/'><span>00</span> HOME</Link></li>
                    <li><Link><span>01</span> DESTINATION</Link></li>
                    <li><Link><span>02</span> CREW</Link></li>
                    <li><Link><span>03</span> TECHNOLOGY</Link></li>
                </ul>
            </nav>
            
   
        </MenuMobileStyle>
    )
}