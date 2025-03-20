'use client'
import Link from 'next/link'
import Image from 'next/image'
import useInView from '../hooks/useInView'

interface CTAButtonProps {
  textColor?: string;
  text?: string;
}

export default function CTAButton({ textColor = 'text-gray-500', text = 'Get your Note Now →' }: CTAButtonProps) {
  const { ref, isInView } = useInView()

  return (
    <div className="text-center mt-2">
      <div
        ref={ref}
        className={`transition-opacity duration-700 ease-in ${isInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <Link 
          href="/"
          className="bg-[#2323fd] text-white px-20 py-4.5 rounded-xl hover:bg-[#2323fd]/90 inline-flex items-center font-semibold"
        >
          {text}
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <Image 
          src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/677ed137d0a7cf57ffb400b3_617922efaeb3a92e70ebd1b3_Security%2520Icon.svg%20fill.svg"
          alt="Security Icon"
          width={30}
          height={30}
          className="text-green-400"
        />
        <p className={`${textColor} text-base tracking-wider`}>100% Risk-Free Money Back Guarantee</p>
      </div>
    </div>
  )
} 