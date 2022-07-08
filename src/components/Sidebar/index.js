import './index.scss'
import {Link} from 'react-router-dom'
import LogoS from '../../assets/images/logo-h.png'
import LogoSubtitle from '../../assets/images/H_logo_sub.png'


const Sidebar = () => ( 
    <div className="nav-bar">
        <Link className="logo" to="/">
            {/* <img src={LogoS} alt="logo"/> */}
            {/* <img src={LogoSubtitle} alt="Harshil C"/> */}

        </Link>

    </div>
)

export default Sidebar