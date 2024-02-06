'use client'

import { ReactNode, createContext, useState } from 'react'
import { Product } from '@/types/product'


export const ModalContext = createContext({
    isOpen: false,
    setIsOpen: (value: boolean) => {},

    product: null as Product | null,
    setProduct: (value: Product) => {}
})

interface ProviderProps {
    children: ReactNode
}

export function ModalContextProvider({ children } : ProviderProps){
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState<Product | null>(null)

    return(
        <ModalContext.Provider value={{isOpen, product, setIsOpen, setProduct}}>
            {children}
        </ModalContext.Provider>
    )
}