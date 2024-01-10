
import React,{useContext} from 'react'
import callPage from './callPage.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { ImLocation } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFax } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import SendMessage from '../../Components/SendMessage/SendMessage'
import { nightMode } from '../../Context/nightMode'

export default function CallPage() {

    const { dayNight, setdayNight } = React.useContext(nightMode)

    return (
        <>
            <Header/>
            <div className={`divAnimationBoxKeeper ${dayNight || 'divAnimationBoxKeeperDark'}`}>
                <div className="divMainAnimationBoxInCallUs">
                    <span className='wordC'>C</span>
                    <span className='wordA'>A</span>
                    <span className='wordL1'>L</span>
                    <span className='wordL2'>L</span>
                    <span className='wordU'>U</span>
                    <span className='wordS'>S</span>
                    <span className='wordN'>N</span>
                    <span className='wordO'>O</span>
                    <span className='wordW'>W</span>
                </div>
            </div>


            <div className={`divKeeperBoxesInfoCallUs  ${dayNight || 'divKeeperBoxesInfoCallUsDark'}`}>
                <div className="divMainBoxesInfoCallUs">

                    <div className="divBoxInformationCallUs">
                        <ImLocation className='IconInBoxexCallUs' />
                        <span className='span1BoxCallUs'>OUR MAIN OFFICE</span>
                        <span className='span2BoxCallUs'>Iran , Rasht , Golsar</span>
                    </div>

                    <div className="divBoxInformationCallUs">
                        <BsFillTelephoneFill className='IconInBoxexCallUs' />
                        <span className='span1BoxCallUs'>PHONE NUMBER</span>
                        <span className='span2BoxCallUs'>+989119291271</span>
                    </div>

                    <div className="divBoxInformationCallUs">
                        <FaFax className='IconInBoxexCallUs' />
                        <span className='span1BoxCallUs'>FAX</span>
                        <span className='span2BoxCallUs'>Iran , Rasht , Golsar  013_332****</span>
                    </div>

                    <div className="divBoxInformationCallUs">
                        <MdEmail className='IconInBoxexCallUs' />
                        <span className='span1BoxCallUs'>EMAIL</span>
                        <span className='span2BoxCallUs'>Mahdi_maleki1991@ yahoo.com</span>
                    </div>


                </div>

            </div>


            <SendMessage />
            <Footer />

        </>
    )
}


