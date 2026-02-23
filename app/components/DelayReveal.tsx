"use client"
import { useEffect, useState } from "react"

interface DelayedRevealProps {
  children: React.ReactNode
  delay?: number
}

export default function DelayedReveal({ children, delay = 1000 }: DelayedRevealProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {children}
    </div>
  )
}
