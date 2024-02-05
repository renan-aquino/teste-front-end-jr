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
import { FilterDepartment } from '@/types/filter-department'
import { SliderBlue } from '../slider/slider'


export function Departments(){

    return (
        <section className={s.departments}>

            <SliderBlue paddingSize={8}>
                <div className={s.container}>
                    <DepartmentCard filter={FilterDepartment.TECNOLOGIA} name="Tecnologia" src={devices} alt='tecnologia'/>
                    <DepartmentCard filter={FilterDepartment.SUPERMERCADO} name="Supermercado" src={store} alt='supermercado'/>
                    <DepartmentCard filter={FilterDepartment.BEBIDAS} name="Bebidas" src={beverage} alt='bebidas'/>
                    <DepartmentCard filter={FilterDepartment.FERRAMENTAS} name="Ferramentas" src={tools} alt='ferramentas'/>
                    <DepartmentCard filter={FilterDepartment.SAUDE} name="Saúde" src={health} alt='saúde'/>
                    <DepartmentCard filter={FilterDepartment.FITNESS} name="Esporte e Fitness" src={running} alt='esporte e fitness'/>
                    <DepartmentCard filter={FilterDepartment.MODA} name="Moda" src={clothing} alt='moda'/>
                </div>
            </SliderBlue>

        </section>
    )
}