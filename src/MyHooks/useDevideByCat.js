import React from 'react'
import { AllProduces } from '../Datas';


export default function useDevideByCat(parametrs) {
    let cheackCat = null;
    let validProducts = [];
    AllProduces.map(product => {
        cheackCat = product.code.split('-')
        cheackCat = cheackCat[0]
        if (cheackCat == parametrs.cat) {
            validProducts.push(product)
        }
    })
    return validProducts
}