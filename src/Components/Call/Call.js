
import React,{ useEffect,useContext } from 'react'
import call from './call.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { nightMode } from '../../Context/nightMode';


export default function Call() {

    useEffect(() => {
        AOS.init({
            duration: 700,
            once:'true',

        })
    })

    const { dayNight, setdayNight } = React.useContext(nightMode)



    return (
        <>
            <div className="divMainCall">
                <div className="divBachGroundCallKeeper">
                    <img src="./Images/BachGroundCall.png" className="BackGroundCall" />
                </div>

                <div className={`divDetailsOfCall ${dayNight || 'divDetailsOfCallDark'}`}>
                    <h2 className='h2Call'data-aos="zoom-in">Call Us</h2>
                    <span className='spanExplanCall'data-aos="zoom-in">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit commodi accusantium, hic ratione, aliquam atque sequi,
                    </span>
                    <div className="divBTNcallKeeper">
                        <Link className='linkTag' to='/callpage' data-aos="slide-left"><span className='divBTNCallUs'>Call Naw
                        <div className="divCoverHiddBTNCall"></div>
                        <div className="divCoverHiddBTNCall animationCoverBTN2"></div>
                        <div className="divCoverHiddBTNCall animationCoverBTN3"></div>
                        <div className="divCoverHiddBTNCall animationCoverBTN4"></div>
                        </span></Link>

                    </div>

                </div>
            </div>

        </>
    )
}





