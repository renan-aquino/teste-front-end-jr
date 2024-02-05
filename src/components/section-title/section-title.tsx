import s from './section-title.module.scss'

interface SectionTitleProps {
    text: string,
    lines: boolean
}

export function SectionTitle({text, lines} : SectionTitleProps) {

    const display = lines ? 'block' : 'none'
    
    return(
        <div className={s.title_wrapper}>
            <div className={s.line} style={{display: display}} /><h3>{text}</h3><div className={s.line} style={{display: display}}/>
        </div>
    )
}