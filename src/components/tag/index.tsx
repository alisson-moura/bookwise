"use client"
import { useState } from 'react'
import style from './style.module.css'

interface Props {
  text: string
}

export default function Tag({ text }: Props) {
  const [selected, setSelected] = useState(false)

  return (
    <div
      onClick={() => { setSelected(true) }}
      className={`${style.container} ${selected && style.selected}`}>
      <span>{text}</span>
    </div>
  )
}