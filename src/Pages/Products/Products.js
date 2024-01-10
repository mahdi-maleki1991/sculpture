
import React, { useState } from 'react'
import products from './products.css'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom'
import { AllProduces } from '../../Datas'
import useDevideByCat from '../../MyHooks/useDevideByCat'
import Pagenation from '../../Components/Pagenation/Pagenation'
import Footer from '../../Components/Footer/Footer'



export default function Products() {
   
   


    let parametrs = useParams()

    // ******************************************************

    // let productIsNeed = useDevideByCat(parametrs)



    // *****************************************************
    return (

        
        <>
            <Header />
            {/* <ShowAllCat /> */}
            <Pagenation/>
            <Footer />

        </>

    )
}
