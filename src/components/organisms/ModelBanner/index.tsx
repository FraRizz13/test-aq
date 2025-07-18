/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, ContactShadows, Environment } from '@react-three/drei'

//styles
import classNames from 'classnames/bind'
import style from './index.module.scss'
const cn = classNames.bind(style)

interface ModelBannerProps {
  title?: string | React.ReactNode
}

function Show(props: any) {
  const ref = useRef<any>(null)
  const { scene } = useGLTF('/assets/nike_adapt.glb')

  useFrame(state => {
    if (!ref.current) return

    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7
  })

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} scale={[5, 5, 5]} position={[-0.1, -0.5, 0]} />
    </group>
  )
}

export default function ModelBanner({ title }: ModelBannerProps) {
  return (
    <div className={cn('wrapper')}>
      {/* 3D Canvas */}
      <div className={cn('canvas')}>
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
          <Environment preset='city' background blur={1} />
          <ContactShadows
            resolution={512}
            position={[0, -0.8, 0]}
            opacity={1}
            scale={10}
            blur={2}
            far={0.8}
          />

          <Show rotation={[0.3, Math.PI / 1.6, 0]} />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className={cn('content')}>
        <div className={cn('title')}>
          {typeof title === 'string' ? (
            <p dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            <p>{title}</p>
          )}
        </div>
      </div>
    </div>
  )
}

// Preload the model for better performance
useGLTF.preload('/assets/nike_adapt.glb')
