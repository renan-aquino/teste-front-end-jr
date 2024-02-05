import arrow from '@/../public/vectors/right-arrow.svg'
import blueArrow from '@/../public/vectors/tiny-right-arrow.svg'
import s from './slider-arrows.module.scss'
import Image from 'next/image'

interface ArrowProps {
    handleLeftArrowClick: () => void
    handleRightArrowClick: () => void
    showLeftArrow: boolean,
    showRightArrow: boolean
}

export function Arrows({ handleLeftArrowClick, handleRightArrowClick, showLeftArrow, showRightArrow } : ArrowProps){
    return (
        <>
            {showLeftArrow && 
                <button className={s.left_arrow} onClick={handleLeftArrowClick}>
                    <Image src={arrow} alt='left-arrow'></Image>
                </button>}

            {showRightArrow && 
                <button className={s.right_arrow} onClick={handleRightArrowClick}>
                    <Image src={arrow} alt='right-arrow'></Image>
                </button>}
        </>
    )
}

export function BlueArrows({ handleLeftArrowClick, handleRightArrowClick, showLeftArrow, showRightArrow } : ArrowProps){
    return (
        <>
            {showLeftArrow && 
                <button className={`${s.left_arrow} ${s.blue_arrow} ${s.blue_left_arrow}`} onClick={handleLeftArrowClick}>
                    <Image src={blueArrow} alt='left-arrow'></Image>
                </button>}
            
            {showRightArrow && 
                <button className={`${s.right_arrow} ${s.blue_arrow} ${s.blue_right_arrow}`} onClick={handleRightArrowClick}>
                    <Image src={blueArrow} alt='right-arrow'></Image>
                </button>}
        </>
    )
}