import React, { useRef, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'
import headerStuck from './headerStuck.css'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { nightMode } from '../../Context/nightMode'

export default function HeaderStuck() {

    const videoTag = useRef()
    const mainVideo=useRef()
    const { dayNight, setdayNight } = React.useContext(nightMode)

    useEffect(() => {
        AOS.init({
            duration: 1800,
            once: 'true',

        })
    })


    // ************************************************************

    const showVideo = () => {
        videoTag.current.classList.add('divVideoActive')
    }

    const videoClipClose = () => {
        videoTag.current.classList.remove('divVideoActive')
        mainVideo.current.pause()
    }





    return (
        <>
            <Container fluid className='ConHeaderStuck'>



                <dir className='divVideo' ref={videoTag}>
                    <div className="divCloseVideo" onClick={() => videoClipClose()}>
                        <CgClose className='iconCloseVideo' />
                    </div>
                    <div className="divVideoKeeper">
                        <video controls={true} className='mainVideoClip'ref={mainVideo}>
                            <source src='../Images/video-Clip-Home.mp4' type='video/mp4' />
                        </video>
                    </div>
                </dir>


                <Row>
                    <Col
                        xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 0 }}
                        className={`ColInHeaderStuck align-items-center align-items-lg-start ${dayNight || 'ColInHeaderStuckDark'}`}>
                        <h1 className='H1InHeadStuck' data-aos='fade'>The Best Sculpture In The World</h1>
                        <h5 className='H5InHeadStuck' data-aos='fade'>Our Team Is One Of The Best Team To Making Statues</h5>
                        <div className='divHeadStuchVideoGr justify-content-center justify-content-lg-start'>
                            <div className="divGetStartInHeadStuck" data-aos='flip-right'>Get Start</div>
                            <div className="divVideoInHeadStuck" onClick={() => showVideo()}>
                                <MdOutlineSlowMotionVideo className='IconVideoHeadStuck' />
                                Watch Video
                            </div>
                        </div>
                    </Col>

                    <Col
                        xs={{ span: 12, order: 0 }} lg={{ span: 6, order: 1 }}
                        className={`ColInHeaderStuck align-items-center ${dayNight || 'ColInHeaderStuckDark'}`}>
                        <div className="divIMGkeeperHeaderStuck">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d4dbef1d-a882-489d-9801-21f99476a5c3/dbsbzm8-aca803db-eb3d-4d9d-b3db-d28ac462c568.png/v1/fill/w_800,h_532/angel_statue_png_by_chaseandlinda_dbsbzm8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTMyIiwicGF0aCI6IlwvZlwvZDRkYmVmMWQtYTg4Mi00ODlkLTk4MDEtMjFmOTk0NzZhNWMzXC9kYnNiem04LWFjYTgwM2RiLWViM2QtNGQ5ZC1iM2RiLWQyOGFjNDYyYzU2OC5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.SwRsjHECso0ckrjbpMAjAID2cKrtKYQ1Rzo-e6Smu34" className='IMGstatueHeaderStuck' />
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}
