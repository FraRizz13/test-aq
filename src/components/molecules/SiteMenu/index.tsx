'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
// styles
import styles from './index.module.scss'
import classNames from 'classnames/bind'

const cn = classNames.bind(styles)

interface SiteMenuProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const SiteMenu = ({ isOpen, onOpenChange }: SiteMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn('wrapper')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={cn('container')}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            <div className={cn('bar')}></div>
            <motion.div
              className={cn('menu-items')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.4,
                staggerChildren: 0.1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
              >
                <Link href='/intro' className={cn('menu-item')} onClick={() => onOpenChange(false)}>
                  <p>Intro</p>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                transition={{ delay: 0.4, duration: 0.3, ease: 'easeOut' }}
              >
                <Link
                  href='/carousel'
                  className={cn('menu-item')}
                  onClick={() => onOpenChange(false)}
                >
                  <p>Carousel</p>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                transition={{ delay: 0.5, duration: 0.3, ease: 'easeOut' }}
              >
                <Link href='/outro' className={cn('menu-item')} onClick={() => onOpenChange(false)}>
                  <p>Outro</p>
                </Link>
              </motion.div>

              <motion.div
                className={cn('close-button-container')}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
              >
                <motion.button
                  className={cn('close-button')}
                  onClick={() => onOpenChange(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  ✕
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SiteMenu
