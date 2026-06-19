import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import './FadeIn.css'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'down'
  style?: CSSProperties
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  style,
}: FadeInProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`fade-in fade-in--${direction} ${isInView ? 'fade-in--visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
