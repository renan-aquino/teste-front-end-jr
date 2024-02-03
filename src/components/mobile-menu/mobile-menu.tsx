import { HeartIcon } from '../icons/heart-icon'
import { CartIcon } from '../icons/cart-icon'
import { ReturnsIcon } from '../icons/returns-icon'
import { UserCircleIcon } from '../icons/user-circle-icon'
import s from './mobile-menu.module.scss'

export function MobileMenu() {
    return (
        <div className={s.mobile_menu}>
            <div className={s.container}>
                <div className={s.icons}>
                    <a href="#">
                        <UserCircleIcon/>
                    </a>
                    <a href="#">
                        <CartIcon/>
                    </a>
                    <a href="#">
                        <ReturnsIcon/>
                    </a>
                    <a href="#">
                        <HeartIcon/>
                    </a>
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