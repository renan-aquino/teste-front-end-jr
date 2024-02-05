'use client'

import { SectionTitle } from '../section-title/section-title'
import s from './brands.module.scss'
import { BrandList } from '../brand-list/brand-list';
import { SliderBlueArrows } from '../slider/slider';


export function Brands(){
        
    return (
        <section className={s.brands}>

            <SectionTitle text='Navegue por marcas' lines={false}/>

            <div className={s.container}>
                <SliderBlueArrows paddingSize={16} customArrow={true}>
                    <BrandList/>
                </SliderBlueArrows>
            </div>

        </section>
    )
}