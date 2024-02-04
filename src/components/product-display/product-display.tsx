import s from './product-display.module.scss'
import { ProductSlider } from '../product-slider/product-slider';
import { ProductList } from '../product-list/product-list';
import { FilterByDevice } from '../filter-device/filter-by-device';


export function ProductDisplay(){
    return (
        <section className={s.product_display}>
            <div className={s.title_wrapper}>
                <div className={s.line}/><h3>Produtos relacionados</h3><div className={s.line}/>
            </div>

            <FilterByDevice/>

            <div className={s.product_container}>
                <ProductSlider>
                  <ProductList/>
                </ProductSlider>
            </div>
        </section>
    )
} 