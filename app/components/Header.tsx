'use client'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-center py-8 bg-white border-b border-gray-200">
      <Image 
        src="/logo.jpg"
        alt="DoctorsNote"
        width={240}
        height={30}
        priority
      />
    </header>
  )
} 