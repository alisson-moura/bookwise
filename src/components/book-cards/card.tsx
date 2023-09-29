import Rating from './rating'
import style from './style.module.css'
import Image from 'next/image'

interface Props {
  title: string
  author: string
  score: number
  description: string
  cover_url: string
  read_date: Date
}

export default function Card({
  title,
  author,
  read_date,
  cover_url,
  description,
  score }: Props) {
  return (
    <div className={style.container}>
      <Image width={108} height={152} src={cover_url} alt={title} />
      <div className={style.details}>
        <div className={style.header}>
          <span>Hoje</span>
          <Rating value={score} />
        </div>
        <div className={style.title}>
          <p>{title}</p>
          <span>{author}</span>
        </div>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  )
}