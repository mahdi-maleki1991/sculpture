
import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import error404 from '../Error404/error404.css'
import Footer from '../../Components/Footer/Footer'
import { nightMode } from '../../Context/nightMode'


export default function Error404() {

    const { dayNight, setdayNight } = React.useContext(nightMode)





    return (
        <>
            <Header />

            <div className={`divMain404 ${dayNight || 'divMain404Dark'}`}>
                Are You Lost !!??
            </div>



            <Footer />
        </>
    )
}
