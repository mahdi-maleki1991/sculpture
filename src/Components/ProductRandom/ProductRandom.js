import React, { useEffect, useRef, useState,useContext } from 'react'
import productRandom from './productRandom.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { IoBagAddOutline } from 'react-icons/io5'
import { AllProduces } from '../../Datas'
import { BsPlus } from 'react-icons/bs'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {nightMode} from '../../Context/nightMode'

export default function ProductRandom() {


    const boxProduct = useRef([])
    const [showIMGbigSize, setshowIMGbigSize] = useState(0)
    const [currentBigImage, setcurrentBigImage] = useState()
    const [updateStar, setupdateStar] = useState(0)
    const { dayNight, setdayNight } = React.useContext(nightMode)


    useEffect(() => {
        AOS.init()
    }, [])
    // *******************Functions*********************************************

    const showBoxInfoDitails = (index) => {
        boxProduct.current[index].classList.add('divInfoOfColProductR')
    }


    const hideBoxInfoDitails = (index) => {
        boxProduct.current[index].classList.remove('divInfoOfColProductR')
        boxProduct.current[index].classList.add('divInfoOfColProductRHide')
    }


    const onClicksIconBigIMG = (produc) => {
        setshowIMGbigSize(1)
        setcurrentBigImage(produc)
        sendDatasToBigIMG()
    }


    if (!localStorage.getItem('favoriteArray')) {
        localStorage.setItem('favoriteArray', '[]')
    }


    const sendDatasToBigIMG = () => {
        if (showIMGbigSize == 1) {
            return (
                <Container fluid className='divMainCortBigSize'>
                    <Row>
                        <Row style={{ display: 'flex', justifyContent: 'end' }}>
                            <BsPlus className='iconExitBigImage' onClick={() => setshowIMGbigSize(0)} />
                        </Row>
                        <Col className='ColInIMGbigSizeByIMG' xs={{ span: 12 }} md={{ span: 6 }}>
                            <img src={currentBigImage.ImgAddres} className='IMGinBigSize' />
                        </Col>
                        <Col className='ColInIMGbigSizeByInformation d-none d-md-flex' md={{ span: 6 }}>
                            <div className="divMainBigIMGinformation">
                                <span className='itemSpanInBigIMGInfo'><b>Code : </b> {currentBigImage.code} </span>
                                <span className='itemSpanInBigIMGInfo'><b>Width : </b> {currentBigImage.width} </span>
                                <span className='itemSpanInBigIMGInfo'><b>Height : </b> {currentBigImage.height} </span>
                                <span className='itemSpanInBigIMGInfo'><b>Material : </b> {currentBigImage.Material} </span>
                                <p className='itemSpanInBigIMGInfoPtag'><b className='BtagitemSpanInBigIMGInfoPtag'>Description : </b>
                                    <br /> {currentBigImage.descreption}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }


    const makeRandomProduct = () => {
        let arrayRandomProduct = []
        if (AllProduces.length <= 10) {
            arrayRandomProduct = [...AllProduces]
        } else {
            for (let i = 1; i <= 10; i++) {
                arrayRandomProduct.push(AllProduces[i])
            }
        }

        return (
            arrayRandomProduct.map((produc, index) => {
                return (
                    <Col key={index} className='ColProductR' xs={{ span: 10, offset: 2 }}
                        sm={{ span: 6, offset: 0 }} md={{ span: 4 }} lg={{ span: 3 }} data-aos='fade'data-aos-duration='400'>
                        <div className="divMainProductR"
                            onMouseEnter={() => showBoxInfoDitails(index)}
                            onMouseLeave={() => hideBoxInfoDitails(index)}>
                            <img src={produc.ImgAddres} className='IMGColProductR' />
                            <div className="divInfoOfColProductRHide" ref={elm => boxProduct.current.push(elm)}>
                                <div className="divSubInfoProductR">
                                    <span style={{ fontSize: 12, paddingRight: 5, paddingLeft: 2, userSelect: 'none' }}>Code:</span>
                                    <span>{produc.code}</span>
                                </div>
                                <div className="divInfoOfColProductRRight">
                                    {
                                        produc.star == false ? (
                                            <AiOutlineStar className='IconProductRInCol' onClick={() => pushProductToFave(produc)} />
                                        ) : (
                                            <AiFillStar className='IconProductRInCol' onClick={() => pushProductToFave(produc)} />
                                        )
                                    }
                                    <BsArrowsFullscreen className='IconProductRInCol'
                                        onClick={() => onClicksIconBigIMG(produc)} />
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            })
        )
    }

    const pushProductToFave = (produc) => {
        if (produc.star == true) {
            produc.star = false;
        } else {
            produc.star = true;
        }

        let faveProducsArray = AllProduces.filter((p) => {
            return p.star == true
        })

        let faveArreyString = JSON.stringify(faveProducsArray)
        localStorage.setItem('favoriteArray', faveArreyString)

        setupdateStar(prev => {
            return prev + 1
        })
        console.log(updateStar);
        makeRandomProduct()
    }






    // *********************************************************************
    return (
        <>
            {sendDatasToBigIMG()}

            <Container className='ConProductR '>
                <Row className='d-flex justify-content-center'>
                    {makeRandomProduct()}
                </Row>
            </Container>

        </>
    )

}
