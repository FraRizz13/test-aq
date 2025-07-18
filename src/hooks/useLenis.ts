import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      })

      function raf(time: number) {
        lenisRef.current?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Cleanup
      return () => {
        if (lenisRef.current) {
          lenisRef.current.destroy()
        }
      }
    }
  }, [])

  return lenisRef.current
}
