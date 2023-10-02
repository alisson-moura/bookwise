import Image from "next/image";
import style from './style.module.css'
import AuthButtons from "@/components/auth-buttons";

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <Image
          priority={false}
          placeholder='empty'
          width={224}
          height={58}
          alt='BookWise'
          src='/Logo.png' />
      </div>
      <div className={style.auth}>
        <div className={style.header}> 
          <h1>Boas vindas!</h1>
          <span>Faça seu login ou acesse como visitante.</span>
        </div>
        <AuthButtons />
      </div>
    </div>
  )
}