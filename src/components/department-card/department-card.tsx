'use client'

import Image, { StaticImageData } from 'next/image'
import s from './department-card.module.scss'
import Link from 'next/link';

interface CardProps {
    src: StaticImageData;
    alt: string;
    name: string;
}


export function DepartmentCard({ src, alt, name } : CardProps){

    return (
        <Link href='' className={s.department_card}>

            <div className={s.box}>
                <div className={s.image_wrapper}>
                    <div className={s.overlay}></div>
                    <Image className={s.image} src={src} alt={alt}></Image>
                </div>
            </div>

            <p className={s.name}>{name}</p>

        </Link>
    )
}