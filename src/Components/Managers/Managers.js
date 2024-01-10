
import React, { useRef,useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'
import managers from './managers.css'
import { TiSocialSkype, TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti'
import { ManagersInfo } from '../../Datas'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {nightMode} from '../../Context/nightMode'



export default function Managers() {

    const boxesManagers = useRef([])
    const { dayNight, setdayNight } = React.useContext(nightMode)

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: 'true'
        })
    }, [])
    // ****************************************************


    const boxManagerActive = (index) => {
        boxesManagers.current[index].classList.remove("shadowToMainDivManagerCardDisacktive")
        boxesManagers.current[index].classList.add("shadowToMainDivManagerCard")
    }
    const boxManagerDisActive = (index) => {
        boxesManagers.current[index].classList.remove("shadowToMainDivManagerCard")
        boxesManagers.current[index].classList.add("shadowToMainDivManagerCardDisacktive")
    }






    return (
        <>

            <Container className={`ConManager ${dayNight || 'ConManagerDark'}`}>

                <Row className='RowManagerTeaxt'>
                    <h2 xs={{ span: 12 }} className={`textHeaderManager1 ${dayNight || 'textHeaderManager1Dark'}`}
                        data-aos='zoom-in-down'>Managers</h2>
                    <span xs={{ span: 12 }} className={`textHeaderManager2 ${dayNight ||'textHeaderManager2Dark'}`} 
                    data-aos='zoom-in' data-aos-delay='200'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea quasi est quisquam nemo tenetur a vero id consequuntur,
                        molestiae corporis incidunt. Molestiae error unde harum fugiat
                        consequuntur deserunt ducimus, laborum eaque incidunt autem
                        a? Voluptates repudiandae quibusdam doloribus earum pariatur
                        repellendus iure, aliquam accusantium nulla ut, voluptatem
                        incidunt laborum! Enim, suscipit dolor aliquam iure
                        inventore optio consequatur obcaecati.
                    </span>
                </Row>
                <Row>


                    {
                        ManagersInfo.map((boxManage, index) => {
                            return (
                                <Col key={boxManage.id} xs={{ span: 12 }} md={{ span: 10, offset: 1 }}
                                    xl={{ span: 6, offset: 0 }} data-aos='fade' data-aos-delay='300'>
                                    <div className='mainDivColCardManager' ref={(box) => boxesManagers.current.push(box)}
                                        onMouseEnter={() => { boxManagerActive(index) }}
                                        onMouseLeave={() => { boxManagerDisActive(index) }}>

                                        <div className="divIMGManagerCard">
                                            <img src={boxManage.IMGaddres} className='IMGcolManagerCard' />
                                        </div>

                                        <div className="divInfoanagerCard">
                                            <h4 className='h4InCardManager'>{boxManage.name}</h4>
                                            <span className='span1CardManager'>{boxManage.textSmall}</span>
                                            <span className='span2CardManager'>{boxManage.textLong}</span>
                                            <div className="divBoxSocialmediaCardManager">
                                                <TiSocialTwitter className='iconsInCardManagerMedia' />
                                                <TiSocialFacebook className='iconsInCardManagerMedia' />
                                                <TiSocialSkype className='iconsInCardManagerMedia' />
                                                <TiSocialInstagram className='iconsInCardManagerMedia' />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }





                </Row>

            </Container>

        </>
    )
}









