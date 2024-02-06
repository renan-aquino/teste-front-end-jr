'use client'

import s from './product-display.module.scss'
import { Slider } from '../slider/slider';
import { FilterByDevice } from '../filter-device/filter-by-device';
import { SectionTitle } from '../section-title/section-title';
import { Product } from '@/types/product';
import { ProductCard } from '../product-card/product-card';
import { useContext, useEffect, useRef } from 'react';
import { ModalContext } from '@/contexts/modal-context';
import { ProductModal } from '../product-modal/product-modal';
import { DarkOverlay } from '../dark-overlay/dark-overlay';


interface ProductDisplayProps {
    products : Product[]
}

export function ProductDisplay({ products } : ProductDisplayProps){
    const {isOpen, setIsOpen} = useContext(ModalContext)
    const modalRef = useRef<HTMLDivElement | null>(null);
    const closeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const closeModal = (event : MouseEvent) => {
          if (modalRef.current && !modalRef.current.contains(event.target as Node)){
            setIsOpen(false);
          }
        };

        const html = document.querySelector("html");
        if (html) {
            html.style.overflowY = isOpen ? "hidden" : "auto";
        }
      
        document.addEventListener('click', closeModal);
      
        return () => {
            document.removeEventListener('click', closeModal);
        };
     
    }, [modalRef, isOpen]);

    return (
        <section className={s.product_display}>

            <SectionTitle text='Produtos relacionados' lines={true}/>
            <FilterByDevice/>

            <div className={s.container}>
                <Slider paddingSize={16}>
                    <div className={s.box_shadow_wrapper}>
                        {products?.map((product, index) => <ProductCard product={product} key={index}/>)}
                    </div>
                </Slider>
            </div>

            {isOpen && (<>
                <div ref={modalRef}><ProductModal/></div> 
                <DarkOverlay/>
            </>)}

        </section>
    )
} 