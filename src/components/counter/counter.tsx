'use client'

import s from './counter.module.scss'
import plusSign from '@/../public/vectors/plus-sign.svg'
import minusSign from '@/../public/vectors/minus-sign.svg'
import Image from 'next/image'
import { useState } from 'react'




export function Counter(){
    const [amount, setAmount ] = useState(1)


    return (
        <div className={s.counter}>
            <button className={s.btn}><Image onClick={() => amount > 1 && setAmount(amount - 1)} src={minusSign} alt={'subtrair'}></Image></button>
            <div className={s.item}>{amount}</div>
            <button className={s.btn}><Image onClick={() => setAmount(amount + 1)} src={plusSign} alt={'adicionar'}></Image></button>
        </div>
    )
}