'use client'

import { IconProps, IconSize } from '@/types/generic'

import classNames from 'classnames/bind'
import style from './index.module.scss'
const cn = classNames.bind(style)

type SvgProps = {
  sizePx: number
}

export const Icons = {
  placeholder: ({ sizePx }: SvgProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizePx}
      height={sizePx}
      viewBox='0 0 48 48'
      fill='none'
    >
      <circle cx='24' cy='24' r='16' fill='currentColor' />
    </svg>
  ),
}

export default function Icon({ type, size = 'm' }: IconProps) {
  const sizeToPixels: { [icon_size in IconSize]: number } = {
    xs: 11,
    s: 16,
    sm: 20,
    m: 24,
    l: 32,
    xl: 64,
  }

  const sizePx = sizeToPixels[size]

  if (!Icons[type as keyof typeof Icons]) {
    return <></>
  }
  return (
    <span className={cn('wrapper')} data-icon-type={type}>
      {Icons[type as keyof typeof Icons]({ sizePx })}
    </span>
  )
}
