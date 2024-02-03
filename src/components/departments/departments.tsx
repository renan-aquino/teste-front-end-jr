'use client'

import { DepartmentCard } from '../department-card/department-card'
import s from './departments.module.scss'
import devices from '@/../public/images/devices.png'
import store from '@/../public/images/store.png'
import beverage from '@/../public/images/beverage.png'
import tools from '@/../public/images/tools.png'
import health from '@/../public/images/health.png'
import running from '@/../public/images/running.png'
import clothing from '@/../public/images/clothing.png'
import arrow from '@/../public/vectors/tiny-right-arrow.svg'
import Image from 'next/image'
import { useSlider } from '@/hooks/useSlider'


export function Departments(){
    const {
        containerRef,
        canScrollLeft,
        canScrollRight,
        handlePreviousClick,
        handleNextClick,
    } = useSlider();

    return (
        <section className={s.departments}>

            {canScrollLeft && <button className={s.previous_button} onClick={handlePreviousClick}><Image src={arrow} alt='left-arrow'></Image></button>}
            {canScrollRight && <button className={s.next_button} onClick={handleNextClick}><Image src={arrow} alt='right-arrow'></Image></button>}

            <div className={s.container} ref={containerRef}>
                <DepartmentCard name="Tecnologia" src={devices} alt='tecnologia'/>
                <DepartmentCard name="Supermercado" src={store} alt='supermercado'/>
                <DepartmentCard name="Bebidas" src={beverage} alt='bebidas'/>
                <DepartmentCard name="Ferramentas" src={tools} alt='ferramentas'/>
                <DepartmentCard name="Saúde" src={health} alt='saúde'/>
                <DepartmentCard name="Esporte e Fitness" src={running} alt='esporte e fitness'/>
                <DepartmentCard name="Moda" src={clothing} alt='moda'/>
            </div>
        </section>
    )
}