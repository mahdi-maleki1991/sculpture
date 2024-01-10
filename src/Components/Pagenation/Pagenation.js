
import React, { useEffect, useState, useContext } from 'react'
import pagenation from './pagenation.css'
import { AllProduces } from '../../Datas'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap';
import useDevideByCat from '../../MyHooks/useDevideByCat';
import { Link, useParams } from 'react-router-dom';
import { ResetPage } from '../../Context/ResetPage';
import { nightMode } from '../../Context/nightMode';

export default function Pagenation() {

    let parametr = useParams()

    const {mainPage, setmainPage} = React.useContext(ResetPage)
    const { dayNight, setdayNight } = React.useContext(nightMode)


    const [showEachPage, setShowEachPage] = useState(
        localStorage.getItem('productEchPage') ? (
            localStorage.getItem('productEchPage')
        ) : (
            6
        )
    )
    let validProducts = useDevideByCat(parametr)


    // *****************************************************
    if (parametr.cat === 'All') {
        validProducts = AllProduces
    }

    const nextAndPreviousPage = (page) => {
        setmainPage(page)
    }

    const pagination = (validProducts) => {

        let startOfProduct = (mainPage * showEachPage) - showEachPage;
        let endOfProduct = mainPage * showEachPage;

        if (validProducts.length > 0) {
            return (

                validProducts.map((product, index) => {
                    if (index >= startOfProduct && index < endOfProduct) {
                        return (
                            <Col key={product.id} className='colPagination' xs={{ span: 12 }} sm={{ span: 6 }}
                                md={{ span: 5 }} lg={{ span: 4 }} xl={{ span: 3 }} >
                                <Link className='link' to={`/introductionProduct/${product.code}`}>
                                    <div className="divMainBoxInPagenation">
                                        <img src={product.ImgAddres} className='IMGInfoInColPagination' />
                                        <div className='divInfoInColPagination'>
                                            <span><b>Code :</b> {product.code} </span>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        )
                    }
                })
            )
        } else {
            return (
                <div className='divShowCatEmpty'>
                    This category is empty ...
                </div>
            )
        }

    }

    const makeBoxToShowPages = (validProducts) => {
        let pages = Math.ceil(validProducts.length / showEachPage)
        let ArrayShowCatBox = []

        for (let i = 1; i <= pages; i++) {
            ArrayShowCatBox.push(i)
        }

        return (
            ArrayShowCatBox.map((box) => {

                if (ArrayShowCatBox.length > 1) {
                    if (mainPage == box) {
                        return (
                            <div key={box} className="divShowPagesByNumberActive" onClick={() => nextAndPreviousPage(box)}>{box}</div>
                        )
                    } else {
                        return (
                            <div key={box} className="divShowPagesByNumber" onClick={() => nextAndPreviousPage(box)}>{box}</div>
                        )
                    }
                }


            })
        )

    }

    const changeInputProductInPage = (input) => {
        if (input.value > 20) {
            input.value = 20
        }
        if (input.value < 1) {
            input.value = 1
        }

        localStorage.setItem('productEchPage', input.value)
        setShowEachPage(localStorage.getItem('productEchPage'))
    }


    const checkBoxOfPagination = (validProducts) => {
        if (validProducts.length <= showEachPage) {
            return (
                <div className='divNoAnyPagePagenation'>There is no any more page</div>
            )
        } else {
            return (
                <div className={`divNextAndPrevInPagination ${dayNight || 'divNextAndPrevInPaginationDark'}`}>
                    {makeBoxToShowPages(validProducts)}
                </div>
            )

        }
    }

    return (
        <>

            <Container className="mainDivPagination mt-4">
                <div>
                    <span style={{ fontSize: 13, color: 'rgb(180, 180, 180)' }}>Number of products </span>
                    <input type='number' className='InputNuberPagination' onChange={(event) => changeInputProductInPage(event.target)}
                        value={localStorage.getItem('productEchPage') ? (
                            localStorage.getItem('productEchPage')
                        ) : (
                            6
                        )}
                    />
                </div>

                <Row className='justify-content-center'>
                    {pagination(validProducts)}
                    < Row >
                        {
                            checkBoxOfPagination(validProducts)
                        }
                    </Row>
                </Row>
            </Container>


        </>
    )


}

