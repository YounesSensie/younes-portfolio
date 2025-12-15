"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

interface AnimatedGridPatternProps {
  numSquares?: number
  maxOpacity?: number
  duration?: number
  className?: string
}

export const AnimatedGridPattern = ({
  numSquares = 10,
  maxOpacity = 0.1,
  duration = 3,
  className,
}: AnimatedGridPatternProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const squares: Array<{
      x: number
      y: number
      size: number
      opacity: number
      fadeDirection: number
    }> = []

    for (let i = 0; i < numSquares; i++) {
      squares.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 50 + 20,
        opacity: Math.random() * maxOpacity,
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      squares.forEach((square) => {
        square.opacity += (square.fadeDirection * maxOpacity) / (duration * 60)

        if (square.opacity >= maxOpacity || square.opacity <= 0) {
          square.fadeDirection *= -1
        }

        square.opacity = Math.max(0, Math.min(maxOpacity, square.opacity))

        ctx.fillStyle = `rgba(59, 130, 246, ${square.opacity})`
        ctx.fillRect(square.x, square.y, square.size, square.size)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [numSquares, maxOpacity, duration])

  return <canvas ref={canvasRef} className={cn("pointer-events-none absolute inset-0", className)} />
}
