
import React, { useEffect, useRef, useState, useContext } from 'react'
import basket from './basket.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { keyboard } from '@testing-library/user-event/dist/keyboard'
import { FiAlertTriangle } from 'react-icons/fi'
import SendMessage from '../../Components/SendMessage/SendMessage'
import { nightMode } from '../../Context/nightMode'
import { Link } from 'react-router-dom'


export default function Basket() {

    if (!localStorage.getItem('favoriteArray')) {
        localStorage.setItem('favoriteArray', '[]')
    }

    const [faveProductsArray, setfaveProductsArray] = useState(
        JSON.parse(localStorage.getItem('favoriteArray'))
    )

    const shiftHolderRef = useRef()
    const { dayNight, setdayNight } = React.useContext(nightMode)

    // ***********************************************************************************

    const showFaveProducts = (faveProductsArray) => {
        return (
            faveProductsArray.length > 0 ? (
                faveProductsArray.map((produc, index) => {
                    return (
                        <div key={index} className="MainShowProductBasket">
                            <Link to={`/introductionProduct/${produc.code}`}>
                                <img src={produc.ImgAddres} className='IMGinBasketItemsCol' />
                            </Link>
                            <div className={`BTNsInEackColBasket ${dayNight || 'BTNsInEackColBasketDark'}`}>
                                <span><b>code:</b>{produc.code}</span>
                                <span><b>Width:</b>{produc.width}</span>
                                <span><b>Height:</b>{produc.height}</span>
                                <span><b>Material:</b>{produc.Material}</span>
                                <span><b>Price:</b>{produc.price}</span>
                            </div>
                            <div className="informationInBoxBasket">
                                <BsStarFill className='IconStarFavorit' onClick={(event) => deleteFromBasket(produc.code, event)} />
                            </div>
                        </div>
                    )
                })
            ) : (
                <h4 className='textBasketEmpty'>Basket Is Empty</h4>
            )
        )
    }


    const deleteFromBasket = (code, event) => {
        if (event.shiftKey == false) {

            shiftHolderRef.current.classList.add('animationActiveShiftHolder')

            setTimeout(() => {
                shiftHolderRef.current.classList.remove('animationActiveShiftHolder')
            }, 10000)

        } else {
            let oldLocalBasket = JSON.parse(localStorage.getItem('favoriteArray'))
            let NewLocalBasket = oldLocalBasket.filter((product) => {
                return code != product.code
            })
            localStorage.setItem('favoriteArray', JSON.stringify(NewLocalBasket))
            setfaveProductsArray(NewLocalBasket)
        }

    }





    // ***************************************************************************************

    return (
        <div>
            <Header />

            <div className="mainDivAlertShiftHolder" ref={shiftHolderRef}>
                <FiAlertTriangle className='iconShiftHolder' />
                In order to Remove this item,Please Hold the " SHIFT " key .
            </div>

            <Container fluid>
                <Row>
                    <Col className='ColInBasketPageCall' xs={{ span: 12, order: 1 }} lg={{ span: 4 }}>
                        <SendMessage />
                    </Col>
                    {/* ********************************************************************************** */}
                    <Col className='ColInBasketPageShowProduct' xs={{ span: 12, order: 0 }} lg={{ span: 8 }}>
                        {showFaveProducts(faveProductsArray)}
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )

}


