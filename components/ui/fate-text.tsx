"use client"
import { motion } from "framer-motion"
import type React from "react"

import { cn } from "@/lib/utils"

interface FadeTextProps {
  className?: string
  direction?: "up" | "down" | "left" | "right"
  text?: string
  children?: React.ReactNode
  framerProps?: any
}

export const FadeText = ({ className, direction = "up", text, children, framerProps = {} }: FadeTextProps) => {
  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        ...framerProps,
      }}
      className={cn(className)}
    >
      {text || children}
    </motion.div>
  )
}
