'use client'

import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

// Curva com leve overshoot: a carga "assenta" no chão.
export const heavyEase = [0.22, 1.25, 0.36, 1] as const

type Direction = 'up' | 'left' | 'right' | 'none'

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 56 },
  left: { x: -64, y: 0 },
  right: { x: 64, y: 0 },
  none: { x: 0, y: 0 },
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'span' | 'p' | 'h2' | 'h3'
}) {
  const Tag = motion[as]
  const { x, y } = offsets[direction]

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, delay, ease: heavyEase }}
    >
      {children}
    </Tag>
  )
}

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 56 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: heavyEase } },
}
