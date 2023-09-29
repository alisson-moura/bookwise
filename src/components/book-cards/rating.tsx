import { Star } from '@phosphor-icons/react/dist/ssr/Star'
import style from './style.module.css'
import { format } from 'path'

interface Props {
  value: number
}

export default function Rating({ value }: Props) {
  const stars = []

  for (let i = 0; i < 5; i++) {
    i <= value - 1
      ? stars.push(<Star key={`${i}`} size={16} weight="fill" />)
      : stars.push(<Star key={`${i}`} size={16} />)
  }

  return (
    <div className={style.rating}>
      {stars.map(star => star)}
    </div>
  )
} 