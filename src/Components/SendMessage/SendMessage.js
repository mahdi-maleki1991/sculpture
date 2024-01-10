import React, { useRef, useState, useEffect } from 'react'
import { sendMessage } from './sendMessage.css'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { AiOutlineUser, AiOutlineSubnode } from 'react-icons/ai'
import { MdAlternateEmail } from 'react-icons/md'
import Cookies from 'js-cookie'
import { nightMode } from '../../Context/nightMode';



export default function SendMessage() {



    const [messageName, setmessageName] = useState('')
    const [messageEmail, setmessageEmail] = useState('')
    const [messageSubject, setmessageSubject] = useState('')
    const [messageMainPM, setmessageMainPM] = useState('')
    const [activeBTN, setactiveBTN] = useState(true)
    const { dayNight, setdayNight } = React.useContext(nightMode)

    // **************************************
    AOS.init({})

    const sendEmailFunc = (e) => {
        e.preventDefault()
        if (!Cookies.get('emailCookie')) {
            if (messageName !== '' && messageEmail !== '' && messageSubject !== '' && messageMainPM !== '') {
                if (messageEmail.includes('@') && messageEmail.includes('yahoo.com') || messageEmail.includes('gmail.com')) {
                    if (messageEmail.length > 15) {
                        Cookies.set('emailCookie', 'Email', { expires: 0.000700 })
                        emailjs.sendForm('service_p7lbtkx', 'template_leklini', e.target, 'xIW4VQ4r5oSHD4ZLJ')
                            .then((res) => {
                                console.log(res);
                                toast('Your Email is successfuly sended', {
                                    position: 'top-left',
                                    type: 'success',
                                    autoClose: '2000'
                                })
                            })
                        console.log('ok shode');
                    } else {
                        toast('Your email addres is not valid(its too short)', {
                            position: 'top-left',
                            type: 'error',
                            duration: '2000'
                        })
                    }
                } else {
                    toast('Your email addres is not valid', {
                        position: 'top-left',
                        type: 'error',
                        duration: '2000'
                    })
                }
            } else {
                toast('All the fileds must be filled', {
                    position: 'top-left',
                    type: 'error',
                    duration: '2000'
                })
            }
        } else {
            toast('You must wait one minuts to send the other your emails', {
                position: 'top-left',
                type: 'warning',
                duration: '60000'
            })
        }
    }

    useEffect(() => {
        checkBTNsubmit()
    }, [activeBTN])
    const checkBTNsubmit = () => {
        setInterval(() => {
            if (Cookies.get('emailCookie')) {
                setactiveBTN(true)
            } else {
                setactiveBTN(false)
            }
        }, 1000);
    }



    return (
        <>
            <form onSubmit={sendEmailFunc} data-aos='fade' data-aos-duration='1500'>
                <div className={`divMainSendMassage ${dayNight || 'divMainSendMassageDark'}`}>

                    <div className="divInputMessageKeeper">
                        <input type="text" name='name' autoComplete='off' className="inputsOfMessage" onChange={(event) => setmessageName(event.target.value)} placeholder='Name' />
                        <AiOutlineUser className='IconsInMessageInputs' />
                    </div>

                    <div className="divInputMessageKeeper">
                        <input type="text" name='email' className="inputsOfMessage" onChange={(event) => setmessageEmail(event.target.value)} placeholder='Email' />
                        <MdAlternateEmail className='IconsInMessageInputs' />
                    </div>

                    <div className="divInputMessageKeeper">
                        <input type="text" name='subject'autoComplete='off' className="inputsOfMessage" onChange={(event) => setmessageSubject(event.target.value)} placeholder='Subject' />
                        <AiOutlineSubnode className="IconsInMessageInputs" />
                    </div>

                    <textarea name="message" className='textAreaMessage' onChange={(event) => setmessageMainPM(event.target.value)} placeholder='Message'></textarea>

                    <input type='submit' className={activeBTN ? 'divBTNsendMessageDisactive' : 'divBTNsendMessage'} value='Send Message' />


                </div>
            </form>
            <ToastContainer style={{ zIndex: 500 }} />
        </>
    )
}
