import s from './categories.module.scss'
import { useState } from "react";
import { CrownIcon } from "../crown-icon/crown-icon";
import Link from 'next/link';

export function Categories(){
const [isFocused, setIsFocused] = useState(false);
    
    const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };

    return (
        
        <div className={s.categories}>
            <div className={s.categories_container}>
                <Link href='/' className={s.category}>TODAS CATEGORIAS</Link>
                <Link href='/' className={s.category}>SUPERMERCADO</Link>
                <Link href='/' className={s.category}>LIVROS</Link>
                <Link href='/' className={s.category}>MODA</Link>
                <Link href='/' className={s.category}>LANÇAMENTOS</Link>
                <Link href='/' className={s.category}>OFERTAS DO DIA</Link>
                <Link onFocus={handleFocus} onBlur={handleBlur} href='#' className={s.category}>
                    <CrownIcon focus={isFocused}/>
                    ASSINATURA
                </Link>
            </div>
        </div>
    )
}