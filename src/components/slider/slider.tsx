"use client"

import { useSlider } from '@/hooks/useSlider';
import s from './slider.module.scss'
import { Arrows, BlueArrows } from '../slider-arrows/slider-arrows';

interface SliderProps {
    children: React.ReactNode,
    paddingSize: number,
  }

export function Slider({children, paddingSize} : SliderProps){
    const {
        containerRef,
        canScrollLeft,
        canScrollRight,
        handlePreviousClick,
        handleNextClick,
    } = useSlider(paddingSize);

    return (
        <div className={s.slider_wrapper}>
            
            <Arrows 
                showLeftArrow={canScrollLeft} showRightArrow={canScrollRight} 
                handleLeftArrowClick={handlePreviousClick} handleRightArrowClick={handleNextClick}>
            </Arrows>
            
            <div className={s.product_slider}>
                <div className={s.container} ref={containerRef}>
                    {children}
                </div>
            </div>
        </div>
    )
} 


export function SliderBlue({children, paddingSize} : SliderProps){
    const {
        containerRef,
        canScrollLeft,
        canScrollRight,
        handlePreviousClick,
        handleNextClick,
    } = useSlider(paddingSize);

    return (
        <div className={s.slider_wrapper}>
            
            <BlueArrows
                showLeftArrow={canScrollLeft} showRightArrow={canScrollRight} 
                handleLeftArrowClick={handlePreviousClick} handleRightArrowClick={handleNextClick}>
            </BlueArrows>
            
            
            <div className={s.product_slider}>
                <div className={s.container} ref={containerRef}>
                    {children}
                </div>
            </div>
        </div>
    )
} 