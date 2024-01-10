
import React, { useState, useContext, useEffect } from 'react'
import header from './header.css'
import { icons } from 'react-icons'
import { IoMdArrowDropdown } from 'react-icons/io'
import 'bootstrap/dist/css/bootstrap.css'
import { useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { CateguriesPackage } from '../../Datas'
import { Link } from 'react-router-dom'
import Products from '../../Pages/Products/Products'
import { ResetPage } from '../../Context/ResetPage'
import { nightMode } from '../../Context/nightMode'

export default function Header() {

  const smallMenu = useRef()
  const productBTN = useRef()
  const [openCloseMenu, setopenCloseMenu] = useState(0)
  const [headerStuk, setheaderStuk] = useState(false)
  const { mainPage, setmainPage } = React.useContext(ResetPage)
  const { dayNight, setdayNight } = React.useContext(nightMode)


  useEffect(() => {
    if (dayNight) {
      document.body.style = `background-color: white !important;`
    } else {
      document.body.style = `background-color: rgb(16, 16, 16) !important;`
    }

    if (localStorage.getItem('nightMode')) {
      setdayNight(!JSON.parse(localStorage.getItem('nightMode')))
    }
  }, [dayNight])








  // **************** Functions *******************
  const showProductDitail = () => {
    productBTN.current.classList.add('openProductInHeader')
  }

  const closeProductHeader = () => {
    productBTN.current.classList.remove('openProductInHeader')
  }

  const resetStatePagination = () => {
    setmainPage(1)
  }

  const makeDayAndNight = () => {
    localStorage.setItem('nightMode', dayNight)
    setdayNight(!dayNight)
  }


  const makeCateguries = () => {
    return (
      CateguriesPackage.map(box => {
        return (
          <Link key={box.id} className='linkTag' to={`/products/${box.categury}`}
            onClick={() => changeStateOpenCloseMenu()}>
            <div className="divBoxProdocts">
              <img src={box.IMGaddres} className='IMGinHeaderProdutc' />
              <div className="divLineInBox"></div>
            </div>
          </Link>
        )
      })
    )
  }


  const openCloseSmallHeader = () => {
    if (openCloseMenu == 1) {
      return (
        <div className={`divMainSlamHeader d-lg-none ${dayNight || 'smalHeader'}`} ref={smallMenu}>
          <div className="divSmallHeaderDetails">
            <Link className='linkTag' to='/'><span className='spanDeatilsInSmalHeader'>Home</span></Link>
            <Link className='linkTag' to='/basket'><span className='spanDeatilsInSmalHeader'>Basket</span></Link>
            <Link className='linkTag' to='/Aboutus'><span className='spanDeatilsInSmalHeader'>About Us</span></Link>
            <Link className='linkTag' to='/callpage'><span className='spanDeatilsInSmalHeader'>Call</span></Link>
            <a href='#getStart'><span className='spanDeatilsInSmalHeader'>Get Start</span></a>
          </div>
          <span className='ProductItemInSmallHeader'>Products</span>
          <div className="divKeepProductsInSmallHeader">
            {makeCateguries()}
          </div>
        </div>
      )

    }
  }

  const changeStateOpenCloseMenu = () => {
    if (openCloseMenu == 0) {
      setopenCloseMenu(1)
    } else {
      setopenCloseMenu(0)
    }
    resetStatePagination()
  }


  useState(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setheaderStuk(true)
      } else {
        setheaderStuk(false)
      }
    })
  }, [])


  // ***********************************
  return (
    <>
      <div className="dicCoverHeaderForAdjust">
        <div className={`  ${headerStuk ? ('divMainHeaderStuky') : ('divMainHeader')} 
        ${dayNight || 'headerDark'}  `}>


          <div className="divLogoHeader">
            <img src="https://i.redd.it/uqra0nohi8h81.jpg" className='LogoHeader' />
          </div>

          <div className={`divPropertiesHeader d-none d-lg-flex`}>
            <div className={dayNight ? ('divMainNightModeActive') : ('divMainNightModeDeActive')} onClick={makeDayAndNight}>
              <div className={dayNight ? ('AnimationNightModeDeactive') : ('AnimationNightModeActive')}></div>
            </div>


            <Link className="linkTag" to='/'><span className='spanHeaderItems'>Home</span></Link>

            <span className='spanHeaderItems'
              onMouseEnter={() => showProductDitail()}
              onMouseLeave={() => closeProductHeader()}>
              Products
              <IoMdArrowDropdown />
              <div className={`divDraverProductHeader ${dayNight || 'divDraverProductHeaderDark'}`} ref={productBTN}>
                {makeCateguries()}
              </div>

            </span>

            <Link className='linkTag' to='/basket'><span className='spanHeaderItems'>Basket</span></Link>
            <Link className='linkTag' to='/Aboutus'><span className='spanHeaderItems'>About Us</span></Link>
            <Link className='linkTag' to='/callpage'><span className='spanHeaderItems'>Call</span></Link>
            <a href='#getStart'><div className='headerItemGetStart'>Get Start</div></a>
          </div>


          {/* ****************Menu Small************** */}
          <AiOutlineMenu className='iconHeaderSmallMenu d-flex d-lg-none' onClick={() => changeStateOpenCloseMenu()} />
          {openCloseSmallHeader()}
        </div>
      </div>
    </>
  )
}






