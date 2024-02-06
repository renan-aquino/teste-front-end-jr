"use client"

import { FilterContextProvider } from "@/contexts/filter-context";
import { ModalContextProvider } from "@/contexts/modal-context";
import { ReactNode } from "react";

interface DefaultProvidersProps {
    children: ReactNode
}


export function DefaultProviders({ children } : DefaultProvidersProps){
    return(
        <FilterContextProvider>
            <ModalContextProvider>
                {children}
            </ModalContextProvider>
        </FilterContextProvider>
    )
}