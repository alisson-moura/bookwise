import { X } from "@phosphor-icons/react/dist/ssr";
import style from './style.module.css'


export function Close() {
  return (
    <div className={style.container}>
      <X size={24} />
    </div>
  )
}