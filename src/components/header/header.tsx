'use client'

import s from './header.module.scss'
import { Roof } from '../roof/roof'
import { useEffect, useRef, useState } from 'react'
import { Categories } from '../categories/categories'
import Image from 'next/image'
import vtex_logo from '@/../public/vectors/vtex_logo.svg'
import { MagnifyingGlassIcon } from '../icons/magnifying-glass'
import { ReturnsIcon } from '../icons/returns-icon'
import { HeartIcon } from '../icons/heart-icon'
import { CartIcon } from '../icons/cart-icon'
import { UserCircleIcon } from '../icons/user-circle-icon'
import { BurgerMenu } from '../icons/burger-menu-icon'
import { MobileMenu } from '../mobile-menu/mobile-menu'


export function Header() {
  
    const [ menu, setMenu ] = useState(false);
    const menuBoxRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const closeMenuBox = (event : MouseEvent) => {
          if (menuBoxRef.current && !menuBoxRef.current.contains(event.target as Node) && !menuRef.current?.contains(event.target as Node)) {
            setMenu(false);
          }
        };
      
        document.addEventListener('click', closeMenuBox);
      
        return () => {
            document.removeEventListener('click', closeMenuBox);
        };
       }, [menuBoxRef, menuRef]);
    
    return (
        <header className={s.header_tag}>
            <Roof/>

            <nav className={s.navigation}>
                <div className={s.container}>

                    <a href=""><Image className={s.logo} src={vtex_logo} alt='vtex logo marca'></Image></a>

                    <div className={s.search_container}>
                        <input className={s.search_input} type="text" placeholder='O que você está buscando?'/>
                        <MagnifyingGlassIcon/>
                    </div>

                    <div className={s.user_buttons}>
                        <a href="#">
                            <ReturnsIcon/>
                        </a>
                        <a href="#">
                            <HeartIcon/>
                        </a>
                        <a href="#">
                            <UserCircleIcon/>
                        </a>
                        <a href="#">
                            <CartIcon/>
                        </a>
                    </div>

                    <div className={s.menu}>
                        <div className={s.menu_icon_wrapper} ref={menuRef} onClick={() => setMenu(prev => !prev)}>
                            <div className={s.menu_icon}><BurgerMenu/></div>
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