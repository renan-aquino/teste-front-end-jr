'use client'

import { useContext } from 'react';
import s from './filter-by-device.module.scss'
import { FilterContext } from '@/contexts/filter-context';
import { FilterDevice } from '@/types/filter-device';


export function FilterByDevice(){

    const { device, setDevice } = useContext(FilterContext);

    const handleChangeType = (value: FilterDevice) => {
        setDevice(value);
    };

    return (
        <ul className={s.device_filter}>
            <li className={`${s.device} ${device === FilterDevice.CELULAR ? s.selected : ''}`} onClick={() => handleChangeType(FilterDevice.CELULAR)}>CELULAR</li>
            <li className={`${s.device} ${device === FilterDevice.ACCESSORIOS ? s.selected : ''}`} onClick={() => handleChangeType(FilterDevice.ACCESSORIOS)}>ACESSÓRIOS</li>
            <li className={`${s.device} ${device === FilterDevice.TABLETS ? s.selected : ''}`} onClick={() => handleChangeType(FilterDevice.TABLETS)}>TABLETS</li>
            <li className={`${s.device} ${device === FilterDevice.NOTEBOOKS ? s.selected : ''}`} onClick={() => handleChangeType(FilterDevice.NOTEBOOKS)}>NOTEBOOKS</li>
            <li className={`${s.device} ${device === FilterDevice.TVS ? s.selected : ''}`} onClick={() => handleChangeType(FilterDevice.TVS)}>TVS</li>
            <li className={`${s.device} ${device === FilterDevice.TODOS ? s.selected : ''}`} onClick={() => handleChangeType(FilterDevice.TODOS)}>VER TODOS</li>
        </ul>
    )
}