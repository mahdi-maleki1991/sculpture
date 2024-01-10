
import React, { useRef } from 'react'
import showAllCat from './showAllCat.css'
import { CateguriesPackage } from '../../Datas'
import { Link, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'





export default function ShowAllCat() {


    let parametrs = useParams()
    //   ********************************************************


    return (
        <>
                <div className="divMainShowAllCat mt-2">

                    {
                        CateguriesPackage.map(cat => {
                            return (
                                <Link key={cat.id} className='linkTag' to={`/products/${cat.categury}`}>
                                    {
                                        cat.categury == parametrs.cat ? (
                                            <div className="divEachCatShowCatActive">{cat.categury}</div>
                                        ) : (
                                            <div className="divEachCatShowCat">{cat.categury}</div>
                                        )
                                    }
                                </Link>
                            )
                        })
                    }

                    {/* ---------------------------------------- */}
                    <div className="divLineKeeperShowCat"></div>
                </div>

        </>
    )
}


