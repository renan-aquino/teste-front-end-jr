import Link from 'next/link'
import s from './footer.module.scss'
import Image from 'next/image'
import facebook from '@/../public/vectors/facebook.svg'
import instagram from '@/../public/vectors/instagram.svg'
import youtube from '@/../public/vectors/youtube.svg'
import visa from '@/../public/vectors/visa.svg'
import elo from '@/../public/vectors/elo.svg'
import alelo from '@/../public/vectors/alelo.svg'
import diners from '@/../public/vectors/diners.svg'
import ifood from '@/../public/vectors/ifood.svg'
import mastercard from '@/../public/vectors/mastercard.svg'
import pix from '@/../public/vectors/pix.svg'
import amex from '@/../public/vectors/amex.svg'
import ticket from '@/../public/vectors/ticket.svg'
import sodexo from '@/../public/vectors/sodexo.svg'
import econverse from '@/../public/vectors/econverse.svg'
import vtex from '@/../public/vectors/vtex_white.svg'

export function Footer() {

    return (
        <footer className={s.footer_tag}>
            
            <div className={s.content}>

                <div className={s.nav}>

                    <div className={s.nav_item}>
                        <h5 className={s.list_title}>SOBRE NÓS</h5>    
                        <ul className={s.link_list}>
                            <li><Link href="">CONHEÇA</Link></li>
                            <li><Link href="">COMO COMPRAR</Link></li>
                            <li><Link href="">INDICAÇÃO E DESCONTO</Link></li>
                        </ul>
                        <ul className={s.socials_list}>
                            <li><Link href=''><Image src={facebook} alt='Facebook'/></Link></li>
                            <li><Link href=''><Image src={instagram} alt='Instagram'/></Link></li>
                            <li><Link href=''><Image src={youtube} alt='YouTube'/></Link></li>
                        </ul>
                    </div>

                    <div className={s.nav_item}>
                        <h5 className={s.list_title}>INFORMAÇÕES ÚTEIS</h5>
                        <ul className={s.link_list}>
                            <li><Link href="">FALE CONOSCO</Link></li>
                            <li><Link href="">DÚVIDAS</Link></li>
                            <li><Link href="">PRAZOS DE ENTREGA</Link></li>
                            <li><Link href="">FORMAS DE PAGAMENTO</Link></li>
                            <li><Link href="">POLÍTICA DE PRIVACIDADE</Link></li>
                            <li><Link href="">TROCAS E DEVOLUÇÕES</Link></li>
                        </ul>
                    </div>

                    <div className={s.nav_item}>
                        <h5 className={s.list_title}>FORMAS DE PAGAMENTO</h5>
                        <ul className={s.payment_grid}>
                            <li><Image src={visa} alt='visa'/></li>
                            <li><Image src={elo} alt='elo'/></li>
                            <li><Image src={alelo} alt='alelo'/></li>
                            <li><Image src={diners} alt='diners'/></li>
                            <li><Image src={ifood} alt='ifood'/></li>
                            <li><Image src={mastercard} alt='mastercard'/></li>
                            <li><Image src={pix} alt='pix'/></li>
                            <li><Image src={amex} alt='amex'/></li>
                            <li><Image src={ticket} alt='ticket'/></li>
                            <li><Image src={sodexo} alt='sodexo'/></li>
                        </ul>
                    </div>

                </div>

                <div className={s.cta}>
                    <h4>CADASTRE-SE E RECEBA NOSSAS <span>NOVIDADES E PROMOÇÕES</span></h4>
                    <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                    <form className={s.newsletter} action="">
                        <input type="text" name='email' placeholder='SEU E-MAIL' />
                        <button type='submit'>OK</button>
                    </form>
                </div>

            </div>

            <div className={s.disclaimer}>
                <div className={s.disclaimer_container}>
                    <p>
                        {`Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização`.toUpperCase()}
                    </p>
                    <div className={s.company_logos}>
                        <Image src={econverse} alt='econverse'/>
                        <Image src={vtex} alt='vtex'/>
                    </div>
                </div>
            </div>
           
        </footer>
    )
}
