import s from './mobile-menu.module.scss'
import returnBox from '@/../public/vectors/return_box.svg'
import heart from '@/../public/vectors/Heart.svg'
import userCircle from '@/../public/vectors/UserCircle.svg'
import shoppingCart from '@/../public/vectors/ShoppingCart.svg'
import Link from 'next/link'
import Image from 'next/image'

export function MobileMenu() {
    return (
        <div className={s.mobile_menu}>
            <div className={s.container}>
                <div className={s.icons}>
                    <Link href='/'><Image src={returnBox} alt='devolução'></Image></Link>
                    <Link href='/'><Image src={heart} alt='favoritos'></Image></Link>
                    <Link href='/'><Image src={userCircle} alt='perfil'></Image></Link>
                    <Link href='/'><Image src={shoppingCart} alt='carrinho de compras'></Image></Link>
                </div>

                <ul className={s.category_list}>
                    <li className={s.category_item}><a href='#'>TODAS CATEGORIAS</a></li>
                    <li className={s.category_item}><a href='#'>SUPERMERCADO</a></li>
                    <li className={s.category_item}><a href='#'>LIVROS</a></li>
                    <li className={s.category_item}><a href='#'>MODA</a></li>
                    <li className={s.category_item}><a href='#'>LANÇAMENTOS</a></li>
                    <li className={s.category_item}><a href='#'>OFERTAS DO DIA</a></li>
                    <li className={s.category_item}><a href='#'>ASSINATURA</a></li>
                </ul>
            </div>
        </div>
    )
}