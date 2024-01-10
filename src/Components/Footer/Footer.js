
import React,{ useEffect } from 'react'
import footer from './footer.css'
import { TiSocialSkype, TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';



export default function Footer() {


useEffect(()=>{
    AOS.init()
})

    return (
        <>
            <div className="divMainFooter">
                <hr className='hrInFooter' />
                <div className="divSocialmediaInFooter">
                    <TiSocialTwitter className='iconsInFooter' />
                    <TiSocialFacebook className='iconsInFooter' />
                    <TiSocialSkype className='iconsInFooter' />
                    <TiSocialInstagram className='iconsInFooter' />
                </div>

                <div className="divDetailsInFooter">
                    <img src="https://i.redd.it/uqra0nohi8h81.jpg" className='IMGfooterLogo'data-aos='fade'data-aos-once='true' />
                    <span className='spanEmailFooter'><b style={{ userSelect: 'none' }}>Email</b> : mahdi_maleki1991@yahoo.com</span>
                    <div className='divTowSpanFooter'>
                        <Link to='/CallPage'><span className='towSpanInFooter'>Call Us </span></Link> |
                        <Link to='/Aboutus'><span className='towSpanInFooter'> About us</span></Link>
                    </div>
                </div>

                <div className="divProgrammerInformationInFooter">
                    <span>
                        All material and intellectual rights of this site belong to This site
                        and any copying will be considered illegal
                    </span>
                    <span style={{marginTop:10}}><b>Phone Number : </b>+989119291271</span>
                    <span><b>Email : </b>Mahdi_Maleki1991@yahoo.com</span>
                </div>

            </div>

        </>
    )

}








