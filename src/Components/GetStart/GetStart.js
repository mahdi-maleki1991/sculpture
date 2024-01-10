import React, { useEffect, useRef, useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'
import getStart from './getStart.css'
import { IoIosArrowDown } from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { nightMode } from '../../Context/nightMode'
import { getStartQA } from '../../Datas'

export default function GetStart() {


    const { dayNight, setdayNight } = React.useContext(nightMode)
    const [getStartQAState, setgetStartQAState] = useState(getStartQA)
    const elementsAnsware = useRef([])
    const elementsArrow = useRef([])
    // *************************************************
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: 'true',
            offset: 100,

        })
    })


    const openAGetStart = (id) => {
        let heightElem = elementsAnsware.current[id].scrollHeight + 20;
        elementsAnsware.current.map(elem => {
            elem.style = 'max-height:0px;'
        });

        elementsAnsware.current[id].style = `
        max-height:${heightElem}px !important;
        `
        elementsArrow.current.map(arrow => (
            arrow.style = 'transform: rotate(0deg)'
        ))
        elementsArrow.current[id].style = 'transform: rotate(180deg)'

        if (elementsAnsware.current[id].dataset.elemclose == 'false') {
            elementsAnsware.current[id].style = `
            max-height:0px;
            `
            elementsArrow.current[id].style = 'transform: rotate(0deg)'
            elementsAnsware.current[id].dataset.elemclose = 'true'

        } else {
            elementsAnsware.current[id].dataset.elemclose = 'false'
        }
    }

    // *************************************************
    return (
        <>
            <a name='getStart'></a>
            <Container fluid className={`mb-1 ConGetStart ${dayNight || 'ConGetStartDark'}`}>
                <Row>
                    <Col className='ColsInGetStart' xs={{ span: 12 }} lg={{ span: 6 }} data-aos='fade-right'>

                        {
                            getStartQAState.map(elem => (

                                <div className={`${dayNight?("divKeshoGetStart"):('divKeshoGetStartDark') }`} key={elem.id}>
                                    <div className="qAndAGet">
                                        <div className="divMainQKesho">
                                            {elem.Q}
                                            <span className='spanArrow' ref={event => elementsArrow.current.push(event)}>
                                                <IoIosArrowDown className='iconEachDivQ'
                                                    onClick={() => openAGetStart(elem.id)}
                                                />
                                            </span>
                                        </div>
                                        <div className="divMainAKesho" data-elemclose='true' ref={event => elementsAnsware.current.push(event)}>
                                            {elem.A}
                                        </div>
                                    </div>
                                </div>

                            ))
                        }


                    </Col>

                    <Col className='ColsInGetStart colInGetStartIMG' xs={{ span: 12 }} lg={{ span: 6 }} data-aos='fade-left'>
                        <img className='IMGgetStart' src="https://png.pngtree.com/png-clipart/20230120/ourmid/pngtree-horse-statue-png-image_6567271.png" />
                    </Col>
                </Row>
            </Container>


        </>
    )
}
