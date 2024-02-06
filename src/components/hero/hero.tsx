import Link from 'next/link'
import s from './hero.module.scss'

export function Hero() {
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.headline}>
                    <h1>Venha conhecer nossas promoções</h1>
                    <h4 >50% Off nos produtos</h4>
                    <Link href='/'><button className={s.btn}>Ver produto</button></Link>
                </div>    
            </div>
        </section>
    )
}