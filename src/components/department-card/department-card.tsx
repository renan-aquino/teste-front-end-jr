'use client'

import Image, { StaticImageData } from 'next/image'
import s from './department-card.module.scss'
import { FilterDepartment } from '@/types/filter-department';
import { useContext } from 'react';
import { FilterContext } from '@/contexts/filter-context';

interface CardProps {
    src: StaticImageData;
    alt: string;
    name: string;
    filter: FilterDepartment
}


export function DepartmentCard({ src, alt, name, filter } : CardProps){

    const { department, setDepartment } = useContext(FilterContext)

    const handleChangeType = (value: FilterDepartment) => {
        setDepartment(value);
    };
    
    return (
        <div className={`${s.department_card} ${department === filter ? s.selected : ''}`} onClick={() => handleChangeType(filter)}>

            <div className={s.box}>
                <div className={s.image_wrapper}>
                    <div className={s.overlay}></div>
                    <Image className={s.image} src={src} alt={alt}></Image>
                </div>
            </div>

            <p className={s.name}>{name}</p>

        </div>
    )
}