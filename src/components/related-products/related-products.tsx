import { RelatedProductsCard } from '../related-products-card/related-products-card';
import { SectionTitle } from '../section-title/section-title';
import s from './related-products.module.scss'


export function RelatedProducts(){
    return (
        <section>
            
            <SectionTitle text='Produtos relacionados' lines={true}/>
            <div className={s.link}><a href=''>Ver todos</a></div>

            <div className={s.container}>
                <RelatedProductsCard image={'/images/related-products.webp'} title='Produtos' text='Lorem ipsum dolor sit amet, consectetur'/>
                <RelatedProductsCard image={'/images/related-products.webp'} title='Produtos' text='Lorem ipsum dolor sit amet, consectetur'/>
            </div>

        </section>
    )
} 