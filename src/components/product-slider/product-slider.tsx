"use client"

import { useSlider } from '@/hooks/useSlider';
import s from './product-slider.module.scss'
import arrow from '@/../public/vectors/right-arrow.svg'
import Image from 'next/image';



interface SliderProps {
    children: React.ReactNode
  }

export function ProductSlider({children} : SliderProps){
    const {
        containerRef,
        canScrollLeft,
        canScrollRight,
        handlePreviousClick,
        handleNextClick,
    } = useSlider();

    

    
  
    return (
        <div className={s.slider_wrapper}>
            {canScrollLeft && <button className={s.previous_button} onClick={handlePreviousClick}><Image src={arrow} alt='left-arrow'></Image></button>}
            {canScrollRight && <button className={s.next_button} onClick={handleNextClick}><Image src={arrow} alt='right-arrow'></Image></button>}

            <div className={s.product_slider}>
                <div className={s.container} ref={containerRef}>
                    {children}
                </div>
            </div>
        </div>
    )
} 