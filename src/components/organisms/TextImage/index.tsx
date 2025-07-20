'use client'

import React from 'react'
import NextImage from 'next/image'

// styles
import styles from './index.module.scss'
import classNames from 'classnames/bind'
import { motion, useScroll, useTransform } from 'framer-motion'
const cn = classNames.bind(styles)

interface TextImageProps {
  title?: string | React.ReactNode
  image?: string
  description?: string
  alt?: string
}

const TextImage = ({ title, image, description, alt }: TextImageProps) => {
  const ref = React.useRef(null)
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 800)
    }

    // Controlla la dimensione iniziale
    checkScreenSize()

    // Aggiungi listener per il resize
    window.addEventListener('resize', checkScreenSize)

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 400])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  return (
    <div ref={ref}>
      <div className={cn('wrapper')}>
        <div className={cn('container')}>
          <div className={cn('content')}>
            <div className={cn('title')}>
              {typeof title === 'string' ? (
                <h3 dangerouslySetInnerHTML={{ __html: title }} />
              ) : (
                <h3>{title}</h3>
              )}
            </div>
            <div className={cn('description-desktop', 'description')}>
              <p>{description}</p>
            </div>
          </div>
          <motion.div
            className={cn('image')}
            style={{
              y: isDesktop ? y : 0,
              rotate: isDesktop ? rotate : rotate,
            }}
          >
            <NextImage src={image || ''} alt={alt || ''} fill style={{ objectFit: 'cover' }} />
          </motion.div>
          <div className={cn('description-mobile', 'description')}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextImage
