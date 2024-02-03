import s from './categories.module.scss'
import { useState } from "react";
import { CrownIcon } from "../icons/crown-icon/crown-icon";

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
                <a href='#' className={s.category}>TODAS CATEGORIAS</a>
                <a href='#' className={s.category}>SUPERMERCADO</a>
                <a href='#' className={s.category}>LIVROS</a>
                <a href='#' className={s.category}>MODA</a>
                <a href='#' className={s.category}>LANÇAMENTOS</a>
                <a href='#' className={s.category}>OFERTAS DO DIA</a>
                <a onFocus={handleFocus} onBlur={handleBlur} href='#' className={s.category}>
                    <CrownIcon focus={isFocused}/>
                    ASSINATURA
                </a>
            </div>
        </div>
    )
}