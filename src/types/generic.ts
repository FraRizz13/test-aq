import { Icons } from '@/components/atoms/Icon'
export type BreakpointType = 'large' | 'medium_large' | 'medium'

export type IconType = keyof typeof Icons

export type IconSize = 'xs' | 's' | 'sm' | 'm' | 'l' | 'xl'

export type IconProps = {
  type: IconType
  size?: IconSize
}
