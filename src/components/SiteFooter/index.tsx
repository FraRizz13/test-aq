'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from './footer-links'

import Icon from '@/components/atoms/Icon'

//components

// styles
import styles from './index.module.scss'
import classNames from 'classnames/bind'

const cn = classNames.bind(styles)

const SiteFooter = () => {
  return (
    <footer className={cn('footer')}>
      <div className={cn('wrapper')}>
        <div className={cn('newsletter')}>
          <div className={cn('newsletter-title')}>
            <span>Newsletter.</span>
          </div>
          <div className={cn('newsletter-description')}>
            <span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.
            </span>
          </div>
          <div className={cn('newsletter-form')}>
            <input type='email' placeholder='Email Address' />
            <button type='submit'>Send</button>
          </div>
        </div>
        <div className={cn('links')}>
          {footerLinks.map(section => (
            <div className={cn('section')} key={section.name}>
              <p className={cn('links-title')}>{section.name}</p>
              <ul className={cn('list-link')}>
                {section.links?.map(link => (
                  <li className={cn('link')} key={link.name}>
                    <Link href={link.href} dangerouslySetInnerHTML={{ __html: link.name }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={cn('social-links')}>
          <div className={cn('social-links-title')}>
            <span>Follow us.</span>
          </div>
          <div className={cn('social-links-icons')}>
            <Link href='#' target='_blank' className={cn('icon')}>
              <Icon type='Instagram' size='s' />
            </Link>
            <Link href='#' target='_blank' className={cn('icon')}>
              <Icon type='twitter' size='s' />
            </Link>
            <Link href='#' target='_blank' className={cn('icon')}>
              <Icon type='youtube' size='s' />
            </Link>
          </div>
        </div>
      </div>
      <div className={cn('copyright')}>
        <span>© 2025 Airmax.</span>
        <span>Credits</span>
      </div>
    </footer>
  )
}

export default SiteFooter
