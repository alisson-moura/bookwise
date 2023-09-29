"use client"
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import style from './style.module.css'
import { useState } from "react";

export function NavItem() {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div onClick={() => { setIsSelected(true) }} className={`${style.container} ${isSelected && style.isSelected}`}>
      <div className={`${style.rect} ${isSelected && style.rectIsSelected}`} />
      <ChartLineUp weight={`${isSelected ? 'bold' : 'regular'}`} size={24} />
      Início
    </div>
  )
}