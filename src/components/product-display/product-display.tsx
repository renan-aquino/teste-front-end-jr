import s from './product-display.module.scss'
import { ProductSlider } from '../product-slider/product-slider';
import { ProductList } from '../product-list/product-list';
import { FilterByDevice } from '../filter-device/filter-by-device';
import { SectionTitle } from '../section-title/section-title';


export function ProductDisplay(){
    return (
        <section className={s.product_display}>

            <SectionTitle text='Produtos relacionados' lines={true}/>
            <FilterByDevice/>

            <div className={s.product_container}>
                <ProductSlider>
                  <ProductList/>
                </ProductSlider>
            </div>

        </section>
    )
} 