'use client'
import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<string>('10:00')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()
      
      // Calculate remaining time until next 10-minute mark
      const minutesLeft = 9 - (minutes % 10)
      const secondsLeft = 59 - seconds
      
      return `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`
    }

    // Update immediately
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-[#2323fd] text-white text-center py-1.5 text-base font-semibold font-instrument-sans tracking-wider">
      30% OFF if you order in the next {timeLeft}
    </div>
  )
} 