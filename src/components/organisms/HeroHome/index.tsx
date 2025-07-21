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
      <div className={cn('logo-container')}>
        <svg xmlns='http://www.w3.org/2000/svg' width='116' height='60' viewBox='0 0 116.118 80'>
          <path
            fill='currentColor'
            d='M36.19 49.996a6.857 6.857 0 0 1-4.11-1.374 8.205 8.205 0 0 1-.854-.854 5.335 5.335 0 0 1-.925-1.665c-.605-1.813-.294-4.192.891-6.8a30.312 30.312 0 0 1 5.308-7.525c.4-.452 1.6-1.773 1.608-1.773s-.062.113-.145.251a16.093 16.093 0 0 0-1.649 3.8 6.822 6.822 0 0 0 .188 4.911 4.8 4.8 0 0 0 2.1 2.092c1.526.748 3.76.809 6.488.181.188-.043 9.495-2.514 20.682-5.49s20.342-5.41 20.344-5.408-25.992 11.126-39.486 16.9c-2.137.914-2.709 1.144-3.713 1.5a18.828 18.828 0 0 1-6.727 1.254Z'
          />
        </svg>
      </div>
      <div className={cn('wrapper-bg')}>
        <div className={cn('video-wrapper')}>
          <video muted width='100%' height='auto' autoPlay playsInline loop>
            <source src='/assets/intro_video.mp4' type='video/mp4' />
            Not supported
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
                    key={`the-${index}`}
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
