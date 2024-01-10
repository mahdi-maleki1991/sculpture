import React, { useState, useContext } from 'react'
import Header from '../../Components/Header/Header'
import HeaderStuck from '../../Components/HeaderStuck/HeaderStuck'
import home from './home.css'
import GetStart from '../../Components/GetStart/GetStart'
import Call from '../../Components/Call/Call'
import ProductRandom from '../../Components/ProductRandom/ProductRandom'
import Managers from '../../Components/Managers/Managers'
import Footer from '../../Components/Footer/Footer'
import LazyLoading from '../../Components/LazyLoading/LazyLoading'
import { nightMode } from '../../Context/nightMode'


export default function Home() {

    return (
        <>
            <LazyLoading />
            <Header />
            <HeaderStuck />
            <GetStart />
            <Call />
            <ProductRandom />
            <Managers />
            <Footer />
        </>
    )

}
