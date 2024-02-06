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
import { SliderBlue } from '../slider/slider'


export function Departments(){

    return (
        <section className={s.departments}>

            <SliderBlue paddingSize={8}>
                <div className={s.container}>
                    <DepartmentCard name="Tecnologia" src={devices} alt='tecnologia'/>
                    <DepartmentCard name="Supermercado" src={store} alt='supermercado'/>
                    <DepartmentCard name="Bebidas" src={beverage} alt='bebidas'/>
                    <DepartmentCard name="Ferramentas" src={tools} alt='ferramentas'/>
                    <DepartmentCard name="Saúde" src={health} alt='saúde'/>
                    <DepartmentCard name="Esporte e Fitness" src={running} alt='esporte e fitness'/>
                    <DepartmentCard name="Moda" src={clothing} alt='moda'/>
                </div>
            </SliderBlue>

        </section>
    )
}