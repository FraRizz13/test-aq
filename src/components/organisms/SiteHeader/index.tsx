'use client'

import React, { useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import Icon from '@/components/atoms/Icon'
import { useBreakpoint } from '@/types/generic'
// styles
import styles from './index.module.scss'
import classNames from 'classnames/bind'
import gsap from 'gsap'
const cn = classNames.bind(styles)

const SiteHeader = () => {
  const headerRef = useRef<HTMLElement>(null)
  const isMediumOrAbove = useBreakpoint('medium')

  // animate in pages with Hero:
  const pagesWithHero = useMemo(() => ['/'], [])
  useEffect(() => {
    if (pagesWithHero.includes('/')) {
      gsap.fromTo(
        headerRef.current,
        { y: '450%', opacity: 1 },
        { y: 0, duration: 0.8, delay: 1.2, ease: 'easeOut' },
      )
    }
  }, [pagesWithHero])

  return (
    <header
      ref={headerRef}
      className={cn('header')}
      style={{ opacity: pagesWithHero.includes('/') ? 0 : 1 }}
    >
      <div className={cn('topbar')}>
        {!isMediumOrAbove ? (
          // Mobile content
          <div className={cn('mobile-content')}>
            <Link href='/intro' className={cn('link', 'intro-link')}>
              <p>Intro</p>
            </Link>
            <div className={cn('logo-container')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='116'
                height='60'
                viewBox='0 0 116.118 80'
              >
                <path
                  fill='currentColor'
                  d='M36.19 49.996a6.857 6.857 0 0 1-4.11-1.374 8.205 8.205 0 0 1-.854-.854 5.335 5.335 0 0 1-.925-1.665c-.605-1.813-.294-4.192.891-6.8a30.312 30.312 0 0 1 5.308-7.525c.4-.452 1.6-1.773 1.608-1.773s-.062.113-.145.251a16.093 16.093 0 0 0-1.649 3.8 6.822 6.822 0 0 0 .188 4.911 4.8 4.8 0 0 0 2.1 2.092c1.526.748 3.76.809 6.488.181.188-.043 9.495-2.514 20.682-5.49s20.342-5.41 20.344-5.408-25.992 11.126-39.486 16.9c-2.137.914-2.709 1.144-3.713 1.5a18.828 18.828 0 0 1-6.727 1.254Z'
                />
              </svg>
            </div>
            <div className={cn('listing-container')}>
              <Icon type='listing' size='xl' />
            </div>
          </div>
        ) : (
          // Desktop content
          <div className={cn('desktop-content')}>
            <Link href='/intro' className={cn('link')}>
              <p>Intro</p>
            </Link>
            <Link href='/carousel' className={cn('link')}>
              <p>Carousel</p>
            </Link>
            <Link href='/outro' className={cn('link')}>
              <p>Outro</p>
            </Link>
            <Link href='/shop-now' className={cn('link', 'shop-now')}>
              <p>Shop Now</p>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default SiteHeader
