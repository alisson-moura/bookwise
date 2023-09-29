import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import style from './style.module.css'

interface LinkProps {
  text: string
  color?: 'white' | 'purple'
  caretDirection?: 'left' | 'right'
  size?: 'md' | 'sm'
}

export function Link({ color = 'white', caretDirection, text, size = 'md' }: LinkProps) {
  const iconSize = size === 'sm' ? 16 : 20
  return (
    <div className={`
      ${style.container} 
      ${style[color]} 
      ${style[size]}`
    }>
      {caretDirection === 'left' && <CaretLeft size={iconSize} />}
      {text}
      {caretDirection === 'right' && <CaretRight size={iconSize} />}
    </div>
  )
}