
import React from 'react'
import { AllProduces } from '../Datas'




export default function useStarUnStar() {

    let arrayStarActiv = JSON.parse(localStorage.getItem('favoriteArray'))
    // let ActiveProducts = []
    let codStarActive = []

    arrayStarActiv.map((product) => {
        codStarActive.push(product.code)
    })

    return codStarActive



    // codStarActive.map((code) => {
    //     if (code == product.code) {
    //         // ActiveProducts.push(product)
    //     //     return (
    //     //         <BsFillStarFill style={{ marginLeft: 10, fontSize: 22, color: 'rgb(255, 230, 50)' }} />
    //     //     )
    //     // } else {
    //     //     return (
    //     //         <BsStar style={{ marginLeft: 10, fontSize: 22 }} />
    //     //     )
    //     // }
    // })

    // console.log('starAble: ',ActiveProducts);
    // return (
    // product.star == true ? (
    // ) : (
    // )
    // )
}



