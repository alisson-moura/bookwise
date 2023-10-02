import Image from "next/image";
import style from './style.module.css'
import { NavItem } from '../navigation/item'
import { SignIn } from "@phosphor-icons/react/dist/ssr/index";

export default function SideMenu() {
  return (
    <div className={style.container}>
      <Image
        className={style.logo}
        priority={false}
        placeholder='empty'
        width={128}
        height={32}
        alt='BookWise'
        src='/Logo.png' />
      <div className={style.menu}>
        <NavItem />
        <NavItem />
        <NavItem />
      </div>
      <div className={style.login}>
        <span>Fazer login</span>
        <SignIn color="#50b2c0" size={20} weight="fill" />
      </div>
    </div>
  )
}