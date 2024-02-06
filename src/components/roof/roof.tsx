import s from './roof.module.scss'
import Image from 'next/image';
import shield from '@/../public/vectors/ShieldCheck.svg'
import truck from '@/../public/vectors/Truck.svg'
import card from '@/../public/vectors/CreditCard.svg'

export function Roof(){
    return (
        <div className={s.roof}>
            <ul className={s.container}>

                <li className={s.list_item}>
                    <Image src={shield} alt='segurança'></Image>
                    <p>Compra <span>100% segura</span></p>
                </li>

                <li className={s.list_item}>
                    <Image src={truck} alt='frete grátis'></Image>
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </li>

                <li className={s.list_item}>
                    <Image src={card} alt='parcelamento'></Image>
                    <p><span>Parcele</span> suas compras</p>
                </li>
            </ul>
        </div>
    )
}