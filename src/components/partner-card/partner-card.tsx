import Link from 'next/link'
import s from './partner-card.module.scss'

interface PartnerCardProps {
    image: string,
    title: string,
    text: string,
}


export function PartnerCard(props : PartnerCardProps){

    const backgroundStyles = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.1)), url('${props.image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
    }

    return (
        <div className={s.card} style={backgroundStyles}>
            <div className={s.container}>
                <h4 className={s.title}>{props.title}</h4>
                <p className={s.text}>{props.text}</p>
                <Link href='/'><button className={s.btn}>CONFIRA</button></Link>
            </div>
        </div>
    )
}