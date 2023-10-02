import Image from "next/image";
import style from './style.module.css'

export default function AuthButtons() {
  return (
    <div className={style.providers}>
      <div className={style.provider}>
        <Image width={32} height={32} src='/logos_google-icon.svg' alt="google" />
        <span>Entrar com Google</span>
      </div>
      <div className={style.provider}>
        <Image width={32} height={32} src='/logos_github-icon.svg' alt="google" />
        <span>Entrar com GitHub</span>
      </div>
      <div className={style.provider}>
        <Image width={32} height={32} src='/logos_rocket-icon.svg' alt="google" />
        <span>Entrar como Visitante</span>
      </div>
    </div>
  )
}