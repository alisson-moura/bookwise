"use client"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import style from './style.module.css'
import { useState } from "react";

interface Props {
  placeholder: string
}
export default function SearchInput({ placeholder }: Props) {
  const [active, setIsActive] = useState(false)
  return (
    <div onClick={() => { setIsActive(!active) }} className={`${style.container} ${active && style.active}`}>
      <input className={style.input} type="text" placeholder={placeholder} />
      <MagnifyingGlass color={active ? '#255D6A' : '#303F73'} size={32} />
    </div>
  )
}