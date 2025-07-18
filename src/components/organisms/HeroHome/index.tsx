'use client'

import React from 'react'
import { motion } from 'framer-motion'

// styles
import styles from './index.module.scss'
import classNames from 'classnames/bind'
const cn = classNames.bind(styles)

const HeroHome = (): React.JSX.Element => {
  return (
    <motion.div
      className={cn('hero-home')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
    >
      <div className={cn('wrapper-bg')}>
        <div className={cn('video-wrapper')}>
          <video muted width='100%' height='auto' autoPlay playsInline loop>
            <source src='/assets/intro_video.mp4' type='video/mp4' />
            Il tuo browser non supporta il formato video.
          </video>
          <div className={cn('layer-bg')}></div>
        </div>

        <div className={cn('content')}>
          <h1 className={cn('title')}>
            <div className={cn('textWrapper', 'first')}>
              <motion.div>
                {'Everything'.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: '1rem', rotateZ: 1, scale: 1.2 }}
                    animate={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
                    transition={{ duration: 0.2, delay: 1 + index * 0.03 }}
                  >
                    {letter}
                  </motion.span>
                ))}{' '}
              </motion.div>
            </div>
            <div className={cn('textWrapper', 'second')}>
              <motion.div>
                {'to'.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: '1rem', rotateZ: 1, scale: 1.2 }}
                    animate={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.03 }}
                  >
                    {letter}
                  </motion.span>
                ))}{' '}
                {/* Added white space here */}
                {'the'.split('').map((letter, index) => (
                  <motion.span
                    key={`incontra-la-${index}`} // Changed key to avoid conflicts
                    initial={{ opacity: 0, y: '1rem', rotateZ: 1, scale: 1.2 }}
                    animate={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + (index + 5) * 0.03 }} // Adjusted delay
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <div className={cn('textWrapper', 'third')}>
              <motion.div>
                {'max'.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: '1rem', rotateZ: 1, scale: 1.5 }}
                    animate={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
                    transition={{ duration: 0.45, delay: 1.2 + index * 0.03 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </h1>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroHome
