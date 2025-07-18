'use client'

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'

interface LenisContextType {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export const useLenisContext = () => {
  const context = useContext(LenisContext)
  if (!context) {
    throw new Error('useLenisContext must be used within a LenisProvider')
  }
  return context
}

interface LenisProviderProps {
  children: ReactNode
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>{children}</LenisContext.Provider>
  )
}
