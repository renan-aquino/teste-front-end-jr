import s from './brand-list.module.scss'
import vtexLogo from '@/../public/vectors/vtex_logo.svg'
import { BrandCard } from '../brand-card/brand-card';

export function BrandList(){

    return (
        <div className={s.box_shadow_wrapper}>
            <BrandCard image={vtexLogo} alt='vtex logo'/>
            <BrandCard image={vtexLogo} alt='vtex logo'/>
            <BrandCard image={vtexLogo} alt='vtex logo'/>
            <BrandCard image={vtexLogo} alt='vtex logo'/>
            <BrandCard image={vtexLogo} alt='vtex logo'/>
            <BrandCard image={vtexLogo} alt='vtex logo'/>
            <BrandCard image={vtexLogo} alt='vtex logo'/>
            <BrandCard image={vtexLogo} alt='vtex logo'/>
            <BrandCard image={vtexLogo} alt='vtex logo'/>  
            <BrandCard image={vtexLogo} alt='vtex logo'/>
        </div>
    )
} 