
import React, { useState, useContext } from 'react'
import { introductionProduct } from './introductionProduct.css'
import { json, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { AllProduces } from '../../Datas'
import { FiPhoneCall } from 'react-icons/fi'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import useStarUnStar from '../../MyHooks/useStarUnStar'
import { BsStar, BsFillStarFill } from 'react-icons/bs';
import { nightMode } from '../../Context/nightMode'


export default function IntroductionProduct() {

  if (!localStorage.getItem('favoriteArray')) {
    localStorage.setItem('favoriteArray', '[]')
  }


  let parametr = useParams()
  const starUnstar = useStarUnStar()
  const [updatePage, setupdatePage] = useState(0)
  const { dayNight, setdayNight } = React.useContext(nightMode)

  //   ****************************************************


  const starOrUnStarProduct = (product) => {

    let checkStar = false


    starUnstar.map((code) => {
      if (product.code == code) {
        checkStar = true
      }
    })


    if (checkStar == true) {
      return (
        <BsFillStarFill className='starUnStarAni' style={{ marginLeft: 10, fontSize: 22, color: 'rgb(255, 250, 0)' }} />
      )
    } else {
      return (
        <BsFillStarFill className='starUnStarAni' style={{ marginLeft: 10, fontSize: 22, color: 'rgb(255, 255, 255)' }} />
      )
    }

  }


  const zoomOnProduct = (event) => {

    let x = event.clientX - event.target.offsetLeft
    let y = event.clientY - event.target.offsetTop

    event.target.style = `
    transform-origin: ${x}px ${y}px;
    transform: scale(2);
    transition: transform 1s;
    cursor:zoom-in;
    `

  }

  const zoomOutOfProduct = (event) => {
    event.target.style = `
    transform: scale(1);
    transition: transform 0.5s;
    `
  }


  const setMainProductInfo = () => {
    let currentProduct = null;
    return (
      AllProduces.map((product) => {
        if (product.code == parametr.code) {
          currentProduct = product;
          return (
            <Row key={product.id}>
              <Col className='colsInIntroduction' xs={{ span: 12 }} md={{ span: 6 }}>
                <img src={product.ImgAddres} className='IMGMainProductInIntroduction'
                  onMouseLeave={(event) => zoomOutOfProduct(event)} onMouseMove={(event) => zoomOnProduct(event)} />
              </Col>
              <Col className={`colsInIntroductionInfo ${dayNight || 'colsInIntroductionInfoDark BtagInIntroductProduceDark'}`} xs={{ span: 12 }} md={{ span: 6 }}>
                <span><b className={`BtagInIntroductProduce ${dayNight || 'BtagInIntroductProduceDark'}`}>Code :</b> {product.code}</span>
                <span><b className={`BtagInIntroductProduce ${dayNight || 'BtagInIntroductProduceDark'}`}>Width :</b> {product.width}</span>
                <span><b className={`BtagInIntroductProduce ${dayNight || 'BtagInIntroductProduceDark'}`}>Height :</b> {product.height}</span>
                <span><b className={`BtagInIntroductProduce ${dayNight || 'BtagInIntroductProduceDark'}`}>Material :</b> {product.Material}</span>
                <span className='spanDestenationInIntPre'>
                  <b style={{ fontSize: 30, color: 'rgb(46, 134, 192)' }}>descreption:</b>
                  <br />
                  {product.descreption}
                </span>
                <div className="divBasketKeeper">
                  <div className="divBTNCallIntoduction">Call <FiPhoneCall className='iconCallInColIntroduction' /></div>

                  <div className="divBTNinsertToStash" onClick={() => switchFaveUnfave(product)}>
                    favorite
                    {starOrUnStarProduct(product)}
                  </div>

                </div>
              </Col>
            </Row>
          )
        }
      })
    )
  }



  const switchFaveUnfave = (productClick) => {

    let checkLocal = false;
    let x = []
    let oldStorageProducts = JSON.parse(localStorage.getItem('favoriteArray'))

    oldStorageProducts.map((product) => {
      if (product.code == productClick.code) {
        checkLocal = true
      }
    })

    if (checkLocal == false) {
      //add
      oldStorageProducts.push(productClick)
      localStorage.setItem('favoriteArray', JSON.stringify(oldStorageProducts))
      setupdatePage(1)
    } else {
      //remove

      oldStorageProducts.map((product) => {
        if (product.code != productClick.code) {
          x.push(product)
        }
      })
      localStorage.setItem('favoriteArray', JSON.stringify(x))
      setupdatePage(2)
    }


  }










  // ******************************************************
  return (
    <>
      <Header />
      <Container fluid className={`ContainerIntroductProduc ${dayNight || 'ContainerIntroductProducDark'}`}>
        {setMainProductInfo()}
      </Container>
      <br />
      <Footer />


    </>
  )

}
