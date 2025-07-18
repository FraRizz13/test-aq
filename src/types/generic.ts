import { Icons } from '@/components/atoms/Icon'
import { useState, useEffect } from 'react'

export type BreakpointType = 'large' | 'medium_large' | 'medium'

export type IconType = keyof typeof Icons

export type IconSize = 'xs' | 's' | 'sm' | 'm' | 'l' | 'xl'

export type IconProps = {
  type: IconType
  size?: IconSize
}

export const BREAKPOINTS = {
  medium: 800,
  medium_large: 960,
  large: 1024,
} as const

export const useBreakpoint = (breakpoint: BreakpointType): boolean => {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false)

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsAboveBreakpoint(window.innerWidth >= BREAKPOINTS[breakpoint])
    }

    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)

    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [breakpoint])

  return isAboveBreakpoint
}
