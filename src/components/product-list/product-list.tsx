import { ProductCard } from '../product-card/product-card'
import s from './product-list.module.scss'
import { Product } from '@/types/product'

async function getData() {
    const res = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json", { cache: 'no-store' })
    return res.json()
  }


export async function ProductList(){

    const data = await getData()
    const products : Product[] = data?.products
    
    return (
        <div className={s.product_list}>
           {products?.map((product, index) => <ProductCard photo={product.photo} name={product.productName} price={product.price} key={index} description={product.descriptionShort}/>)}
        </div>
    )
} 