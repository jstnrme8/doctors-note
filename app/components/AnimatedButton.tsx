'use client'
import { useEffect, useState, ReactNode } from 'react'
import Link from 'next/link'

interface AnimatedButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

export default function AnimatedButton({ 
  href, 
  className = "", 
  children, 
  delay = 100 
}: AnimatedButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Link 
      href={href}
      className={`transition-opacity duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {children}
    </Link>
  )
} 