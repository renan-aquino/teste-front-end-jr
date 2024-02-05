import s from './brand-card.module.scss'
import Image, { StaticImageData } from "next/image";

interface BrandCardProps {
    image: StaticImageData,
    alt: string
}

export function BrandCard({ image, alt } : BrandCardProps){
    return (
        <div className={s.brand_card}>
            <Image className={s.image} src={image} alt={alt}></Image>
        </div>
    )
}