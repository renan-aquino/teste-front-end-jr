'use client'

import { FilterDepartment } from '@/types/filter-department'
import { FilterDevice} from '@/types/filter-device'
import { ReactNode, createContext, useState } from 'react'

export const FilterContext = createContext({
    device: FilterDevice.CELULAR,
    department : FilterDepartment.TECNOLOGIA,

    setDevice: (value: FilterDevice) => {},
    setDepartment: (value: FilterDepartment) => {},
})

interface ProviderProps {
    children: ReactNode
}


export function FilterContextProvider({ children } : ProviderProps){
    const [device, setDevice] = useState(FilterDevice.CELULAR)
    const [department, setDepartment] = useState(FilterDepartment.TECNOLOGIA)

    return(
        <FilterContext.Provider value={{device, department, setDevice, setDepartment}}>
            {children}
        </FilterContext.Provider>
    )
}