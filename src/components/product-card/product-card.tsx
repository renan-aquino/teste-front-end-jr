'use client'

import Image from 'next/image'
import s from './product-card.module.scss'
import { formatPrice } from '@/utilities/format-price'

interface ProductProps {
    name: string,
    description: string,
    photo: string,
    price: number
}

export function ProductCard(props : ProductProps){

    const price = formatPrice(props.price)
    const previous_price = formatPrice(props.price * 0.94)

    return (
        <div className={s.card}>

            <div className={s.container}>
                <div className={s.image_box}>
                    <Image src={props.photo} alt={props.name} width={246} height={228}></Image>
                </div>
                <p className={s.name}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}</p>
                <div className={s.payment_info}>
                    <div className={s.previous_price}>{previous_price}</div>
                    <div className={s.price}>{price}</div>
                    <div className={s.conditions}>ou 2x de {props.price / 2}</div>
                    <div className={s.shipping}>Frete grátis</div>
                </div>

                <button className={s.btn}>COMPRAR</button>

            </div>

       
        </div>
    )
} 