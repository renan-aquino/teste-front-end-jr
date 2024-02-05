import s from './related-products-card.module.scss'

interface RelatedProductsCardProps {
    image: string,
    title: string,
    text: string,
}


export function RelatedProductsCard(props : RelatedProductsCardProps){

    const backgroundStyles = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.1)), url('${props.image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
    }

    return (
        <div className={s.card} style={backgroundStyles}>
            <div className={s.container}>
                <h4 className={s.title}>{props.title}</h4>
                <p className={s.text}>{props.text}</p>
                <button className={s.btn}><a href="">CONFIRA</a></button>
            </div>
        </div>
    )
}