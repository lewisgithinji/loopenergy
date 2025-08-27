'use client'

import { useEffect, useState } from 'react'
import { 
  Hexagon,
  Triangle,
  Zap,
  Battery,
  Sun
} from 'lucide-react'

interface FloatingObject {
  id: number
  type: 'circle' | 'hexagon' | 'triangle' | 'lightning' | 'battery' | 'sun'
  size: 'small' | 'medium' | 'large'
  position: { top: string; left: string }
  animation: string
  delay: number
  opacity: number
}

export default function FloatingObjectsBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const [floatingObjects, setFloatingObjects] = useState<FloatingObject[]>([])

  useEffect(() => {
    setIsMounted(true)
    
    // Generate floating objects with randomized properties
    const generateFloatingObjects = (): FloatingObject[] => {
      const objects: FloatingObject[] = []
      const objectTypes: FloatingObject['type'][] = ['circle', 'hexagon', 'triangle', 'lightning', 'battery', 'sun']
      const animations = [
        'animate-floatY',
        'animate-floatX',
        'animate-floatYReverse',
        'animate-floatXReverse',
        'animate-floatDiagonal',
        'animate-spinSlow'
      ]
      
      // Generate 12-15 objects with random properties
      for (let i = 0; i < 14; i++) {
        objects.push({
          id: i,
          type: objectTypes[Math.floor(Math.random() * objectTypes.length)],
          size: Math.random() > 0.7 ? 'large' : Math.random() > 0.4 ? 'medium' : 'small',
          position: {
            top: `${Math.random() * 80 + 5}%`, // 5% to 85%
            left: `${Math.random() * 90 + 5}%` // 5% to 95%
          },
          animation: animations[Math.floor(Math.random() * animations.length)],
          delay: Math.random() * 8, // 0-8 second delay
          opacity: Math.random() * 0.2 + 0.15 // 0.15 to 0.35 opacity
        })
      }
      
      return objects
    }

    setFloatingObjects(generateFloatingObjects())
  }, [])

  // Render floating object based on type
  const renderFloatingObject = (obj: FloatingObject) => {
    const sizeClasses = {
      small: 'w-8 h-8',
      medium: 'w-12 h-12', 
      large: 'w-16 h-16'
    }

    const baseClasses = `absolute floating-object ${sizeClasses[obj.size]} ${obj.animation}`
    const style: React.CSSProperties = {
      top: obj.position.top,
      left: obj.position.left,
      animationDelay: `${obj.delay}s`,
      opacity: obj.opacity
    }

    switch (obj.type) {
      case 'circle':
        return (
          <div
            key={obj.id}
            className={`${baseClasses} bg-teal-500/20 rounded-full border border-teal-400/10`}
            style={style}
            aria-hidden="true"
          />
        )
      case 'hexagon':
        return (
          <Hexagon
            key={obj.id}
            className={`${baseClasses} text-blue-400/20`}
            style={style}
            aria-hidden="true"
          />
        )
      case 'triangle':
        return (
          <Triangle
            key={obj.id}
            className={`${baseClasses} text-yellow-400/20`}
            style={style}
            aria-hidden="true"
          />
        )
      case 'lightning':
        return (
          <Zap
            key={obj.id}
            className={`${baseClasses} text-yellow-500/20`}
            style={style}
            aria-hidden="true"
          />
        )
      case 'battery':
        return (
          <Battery
            key={obj.id}
            className={`${baseClasses} text-green-400/20`}
            style={style}
            aria-hidden="true"
          />
        )
      case 'sun':
        return (
          <Sun
            key={obj.id}
            className={`${baseClasses} text-orange-400/20`}
            style={style}
            aria-hidden="true"
          />
        )
      default:
        return null
    }
  }

  // Don't render anything until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {floatingObjects.map(renderFloatingObject)}
    </div>
  )
}