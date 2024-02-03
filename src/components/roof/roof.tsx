import s from './roof.module.scss'
import { CreditCardIcon } from "../icons/credit-card-icon";
import { ShieldCheckIcon } from "../icons/shield-check-icon";
import { TruckIcon } from "../icons/truck-icon";

export function Roof(){
    return (
        <div className={s.roof}>
            <ul className={s.container}>
                <li className={s.list_item}>
                    <ShieldCheckIcon/>
                    <p>Compra <span>100% segura</span></p>
                </li>
                <li className={s.list_item}>
                    <TruckIcon/>
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </li>
                <li className={s.list_item}>
                    <CreditCardIcon/>
                    <p><span>Parcele</span> suas compras</p>
                </li>
            </ul>
        </div>
    )
}