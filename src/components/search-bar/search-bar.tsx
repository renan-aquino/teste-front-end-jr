import Image from "next/image";
import Link from "next/link";
import maginifyingGlass from '@/../public/vectors/MagnifyingGlass.svg'
import s from './search-bar.module.scss'

export function SearchBar(){
    return (
        <div className={s.search_container}>
            <input className={s.search_input} type="text" placeholder='O que você está buscando?'/>
            <Link href='/' className={s.maginifying_glass}><Image src={maginifyingGlass} alt='pesquisar produto'></Image></Link>
        </div>  
    )
}