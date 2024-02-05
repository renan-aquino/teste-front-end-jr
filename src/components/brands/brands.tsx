'use client'

import { SectionTitle } from '../section-title/section-title'
import s from './brands.module.scss'
import { BrandList } from '../brand-list/brand-list';
import { SliderBlue } from '../slider/slider';


export function Brands(){
        
    return (
        <section className={s.brands}>

            <SectionTitle text='Navegue por marcas' lines={false}/>

            <div className={s.container}>
                <SliderBlue paddingSize={16}>
                    <BrandList/>
                </SliderBlue>
            </div>

        </section>
    )
}