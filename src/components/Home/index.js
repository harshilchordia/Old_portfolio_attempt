import {Link} from 'react-router-dom'
import './index.scss';
import LogoH from '../../assets/images/logo-h.png'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','r','s','h','i','l',',']
    const jobArray = ['I',' ', 'w','r','i','t','e',' ','c','o','d','e','.']

    useEffect(() => {
        setTimeout(()=> {
            return setLetterClass('text-animate-hover')
        },4000)
    }, [])
    return (
        <div className='container'>
            <div className='home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>


                        <img src={LogoH} alt="logo"/>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        index={15}/>
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        index={22}/>
                    </h1>
                    <h2> Frontend / Backend / Everything</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <div className='navig'>
                hello

            </div>
        </div>
    )

}

export default Home
