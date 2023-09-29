import Image from 'next/image'
import Rating from "./rating"
import style from './sm.module.css'

interface Props {
  cover_url: string
  title: string
  author: string
  score: number
}

export default function CardSM({ author, cover_url, score, title }: Props) {
  return (
    <div className={style.container}>
      <Image width={64} height={94} src={cover_url} alt={title} />
      <div className={style.details}>
        <div className={style.header}>
          <p>{title}</p>
          <span>{author}</span>
        </div>
        <Rating value={score} />
      </div>
    </div>
  )
}