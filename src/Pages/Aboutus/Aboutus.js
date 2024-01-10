
import React, { useState, useContext, useEffect } from 'react'
import aboutus from './aboutus.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Container } from 'react-bootstrap'
import Managers from '../../Components/Managers/Managers'
import 'bootstrap/dist/css/bootstrap.css'
import { nightMode } from '../../Context/nightMode'



export default function Aboutus() {

    const { dayNight, setdayNight } = React.useContext(nightMode)

    return (
        <>
            <Header />
            <Container>
                <div className={`divMainAfterHeaderInAboutus  ${dayNight || 'divMainAfterHeaderInAboutusDark'}`}>
                    <div className="divHeaderAfterHeaderAboutus">
                        <h2 className='H2InAboutUs'>About Us</h2>
                        <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Flowers-PNG/Glass_Vase_with_Yellow_Tulips.png?m=1434276712" className='IMGinHeaderAboutUs d-none d-sm-flex' />
                    </div>


                    <div className="divKeeperOtherInfoAboutUs">
                        <img src="https://cdn.vietnambiz.vn/2019/8/30/cfo-pvs-buttar-blog-2-holding-company-732x316-15671462936461931443523.jpg" className='IMGAboutUsOurFacory d-none d-sm-flex' />
                        <h3 className={`${dayNight || 'textDarkAbout'}`} style={{ marginTop: 30, color: 'rgb(60, 60, 60)'}}>Lorem, ipsum dolor</h3>
                        <p className={`PtagInAboutUs ${dayNight || 'textDarkAbout'}`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis optio ad deserunt,
                            quisquam inventore expedita vero suscipit placeat magnam aliquam nam atque rem quos
                            nesciunt ab quod fugiat exercitationem itaque fugit sed illum laborum reiciendis! Tenetur
                            explicabo repellendus doloribus omnis! Dolor perspiciatis perferendis voluptate at?
                            Aut quo omnis obcaecati minus, reiciendis, a beatae similique sint earum deleniti ad error
                            possimus ipsa nulla? Nemo beatae animi ipsum quae commodi minima repellat dolore dicta quas
                            optio amet, voluptate nostrum quos! Doloribus fugiat tenetur ratione neque eos id
                            error soluta expedita!
                            Consequatur beatae sequi autem neque quod nulla, et mollitia! Sed, quae illo.
                        </p>
                    </div>



                </div>
            </Container>

            <Managers />
            <br />
            <Footer />

        </>
    )
}
