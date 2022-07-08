import {Link} from 'react-router-dom'
import './index.scss';
import LogoH from '../../assets/images/logo-h.png'


const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm 
                <img src={LogoH} alt="logo"/>
                arshil,<br />I write code </h1>
                <h2> Frontend / Backend / Everything</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>

            </div>
        </div>
    )

}

export default Home
