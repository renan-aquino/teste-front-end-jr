import { PartnerCard } from '../partner-card/partner-card'
import s from './partners.module.scss'


export function Partners(){
    return (
        <section className={s.partners}>
           <PartnerCard image={'/images/partners.webp'} title='Parceiros' text='Lorem ipsum dolor sit amet, consectetur'/>
           <PartnerCard image={'/images/partners.webp'} title='Parceiros' text='Lorem ipsum dolor sit amet, consectetur'/>
        </section>
    )
} 