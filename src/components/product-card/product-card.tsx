'use client'

import Image from 'next/image'
import s from './product-card.module.scss'
import { formatPrice } from '@/utilities/format-price'
import { useContext, useState } from 'react'
import { ProductModal } from '../product-modal/product-modal'
import { Product } from '@/types/product'
import { ModalContext } from '@/contexts/modal-context'

interface ProductProps {
    product: Product
}

export function ProductCard({ product } : ProductProps){

    const {setIsOpen, setProduct} = useContext(ModalContext)

    const price = formatPrice(product.price)
    const previous_price = formatPrice(product.price * 0.94)
    const bill = formatPrice(product.price / 2)

    const handleClick = () => {
        setIsOpen(true)
        setProduct(product)
    }

    return (
        <div className={s.card} onClick={handleClick}>

            <div className={s.container}>
                <div className={s.image_box}>
                    <Image className={s.image} src={product.photo} alt={product.productName} width={246} height={228}></Image>
                </div>
                <p className={s.name}>{product.productName}</p>
                <div className={s.payment_info}>
                    <div className={s.previous_price}>{previous_price}</div>
                    <div className={s.price}>{price}</div>
                    <div className={s.conditions}>ou 2x de {bill}</div>
                    <div className={s.shipping}>Frete grátis</div>
                </div>

                <button className={s.btn}>COMPRAR</button>

            </div>
            
        </div>
    )
} 