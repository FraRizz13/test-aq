import { useEffect, useRef } from 'react'
import { useLenisContext } from '@/components/providers/LenisProvider'

export const useLenisScroll = () => {
  const { lenis } = useLenisContext()
  const lenisRef = useRef(lenis)

  useEffect(() => {
    lenisRef.current = lenis
  }, [lenis])

  const scrollTo = (target: string | number, options?: any) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options)
    }
  }

  const stop = () => {
    if (lenisRef.current) {
      lenisRef.current.stop()
    }
  }

  const start = () => {
    if (lenisRef.current) {
      lenisRef.current.start()
    }
  }

  const destroy = () => {
    if (lenisRef.current) {
      lenisRef.current.destroy()
    }
  }

  return {
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start,
    destroy,
  }
}
