"use client"

import { FilterContextProvider } from "@/contexts/filter-context";
import { ReactNode } from "react";

interface DefaultProvidersProps {
    children: ReactNode
}



export function DefaultProviders({ children } : DefaultProvidersProps){
    return(
        <FilterContextProvider>
            {children}
        </FilterContextProvider>
    )
}