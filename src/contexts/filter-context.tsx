'use client'

import { FilterDevice} from '@/types/filter-device'
import { ReactNode, createContext, useState } from 'react'

export const FilterContext = createContext({
    device: FilterDevice.CELULAR,
    setDevice: (value: FilterDevice) => {},
})

interface ProviderProps {
    children: ReactNode
}


export function FilterContextProvider({ children } : ProviderProps){
    const [device, setDevice] = useState(FilterDevice.CELULAR)

    return(
        <FilterContext.Provider value={{device, setDevice}}>
            {children}
        </FilterContext.Provider>
    )
}