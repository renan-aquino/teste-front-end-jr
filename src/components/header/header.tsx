'use client'

import s from './header.module.scss'
import { Roof } from '../roof/roof'
import { useEffect, useRef, useState } from 'react'
import { Categories } from '../categories/categories'
import Image from 'next/image'
import { MobileMenu } from '../mobile-menu/mobile-menu'
import Link from 'next/link'
import vtex_logo from '@/../public/vectors/vtex_logo.svg'
import returnBox from '@/../public/vectors/return_box.svg'
import heart from '@/../public/vectors/Heart.svg'
import userCircle from '@/../public/vectors/UserCircle.svg'
import shoppingCart from '@/../public/vectors/ShoppingCart.svg'
import burgerMenu from '@/../public/vectors/burger-menu.svg'
import { SearchBar } from '../search-bar/search-bar'



export function Header() {
  
    const menuBoxRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [ menu, setMenu ] = useState(false);

    useEffect(() => {
        const closeMenuBox = (event : MouseEvent) => {
          if (menuBoxRef.current && !menuBoxRef.current.contains(event.target as Node) && !menuRef.current?.contains(event.target as Node)) {
            setMenu(false);
          }
        };

        const html = document.querySelector("html");
        if (html) {
            html.style.overflowY = menu ? "hidden" : "auto";
        }
      
        document.addEventListener('click', closeMenuBox);
      
        return () => {
            document.removeEventListener('click', closeMenuBox);
        };
     
    }, [menuBoxRef, menuRef, menu]);
    
    return (
        <header className={s.header_tag}>
            <Roof/>

            <nav className={s.navigation}>
                <div className={s.container}>

                    <Link href="/"><Image className={s.logo} src={vtex_logo} alt='vtex logo marca'></Image></Link>

                    <SearchBar/>

                    <div className={s.user_buttons}>
                        <Link href='/'><Image src={returnBox} alt='devolução'></Image></Link>
                        <Link href='/'><Image src={heart} alt='favoritos'></Image></Link>
                        <Link href='/'><Image src={userCircle} alt='perfil'></Image></Link>
                        <Link href='/'><Image src={shoppingCart} alt='carrinho de compras'></Image></Link>
                    </div>

                    <div className={s.menu}>
                        <div className={s.menu_icon_wrapper} ref={menuRef} onClick={() => setMenu(prev => !prev)}>
                            <Image className={s.menu_icon} src={burgerMenu} alt='menu'></Image>
                        </div>
                        {menu && 
                        <>
                            <div className={s.menu_box} ref={menuBoxRef}>
                                <MobileMenu/>
                            </div>
                            <div className={s.overlay}/>
                        </>}
                    </div>
                        
                </div>
            </nav>

            <Categories/>
        </header>
    )
}