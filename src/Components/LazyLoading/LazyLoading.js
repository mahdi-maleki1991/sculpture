
import React, { useEffect, useRef } from 'react'
import lazyLoading from './lazyLoading.css'





export default function LazyLoading() {

    const lazyLoadindMode = useRef()

    //   *********************************************************


    useEffect(() => {

        if (!sessionStorage.getItem('lazyLoading')) {
            
            sessionStorage.setItem('lazyLoading', 'true')
            setTimeout(() => {
                lazyLoadindMode.current.classList.add('MainDivLazyLoadingDisActiveSlowly')
            }, 3000)
            
            lazyLoadindMode.current.classList.add('MainDivLazyLoadingActiveSlowly')
            
        }
        
    })
    
    const animationEnded =()=>{
        lazyLoadindMode.current.classList.remove('MainDivLazyLoadingActiveSlowly')
        lazyLoadindMode.current.classList.remove('MainDivLazyLoadingDisActiveSlowly')
    }

    return (
        <>

            <div className="MainDivLazyLoading" ref={lazyLoadindMode} onAnimationEndCapture={animationEnded}>
                <img src="../Images/GIF-Loading.gif" className='GIFLazyLoad' />
            </div>

        </>
    )
}





