'use client'

import Image from 'next/image'
import s from './product-modal.module.scss'
import Link from 'next/link'
import { formatPrice } from '@/utilities/format-price'
import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '@/contexts/modal-context'
import { Counter } from '../counter/counter'
import closeSign from '@/../public/vectors/closeIcon.svg'
import { Lato } from 'next/font/google'
const lato = Lato({ weight: ['400', '900'], subsets: ["latin"] });

export function ProductModal(){
    const { setIsOpen, product } = useContext(ModalContext)
    const [ formattedPrice, setFormattedPrice ] = useState('')

    if(product) {

        useEffect(()=> {
            setFormattedPrice(formatPrice(product.price))
        }, [product])
        
        return (
            <div className={s.modal}>
                <div className={s.container}>
                    <Image className={s.close_icon} onClick={() => setIsOpen(false)} src={closeSign} alt='fechar'/>
                
                
                    <div className={s.image_box}>
                        <Image className={s.image} src={product.photo} alt={product.productName} width={246} height={228}></Image>
                    </div>
            
                    <div>
                        <div className={`${lato.className} ${s.text_wrapper}`}>
                            <h4 className={s.name}>{product.productName}</h4>
                            <p className={s.price}>{formattedPrice}</p>
                            <p className={s.description}>{product.descriptionShort}</p>
                            <div className={s.link}>
                                <Link href='/'>Veja mais detalhes do produto &gt;</Link>
                            </div>
                        </div>

                        <Counter/>
            
                        <button className={s.btn} onClick={() => setIsOpen(false)}>COMPRAR</button>
                    </div>
                </div>
            </div>
        )
    }
}