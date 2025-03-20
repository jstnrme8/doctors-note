'use client'
import Image from 'next/image'
import CTAButton from './CTAButton'

export default function Hero() {
  return (
    <section className="relative h-[500px] text-center">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.webp"
          alt="Doctor with patient"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-20 pt-28 tracking-widest ">
        <h1 className="text-5xl font-bold text-white mb-2 mt-2">Your Doctor's Note</h1>
        <div className="relative inline-block mb-6">
          <h2 className="text-5xl font-bold text-white">
            In 1 Minute, for $29,99!
          </h2>
          <div className="flex justify-center mt-4">
            <Image
              src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/677ec92e3d12277fa484e390_Vector%206599.svg"
              alt="Underline"
              width={400}
              height={12}
              className="w-md"
            />
          </div>
        </div>
        <div className="mt-2">
          <CTAButton textColor="text-white" />
        </div>
      </div>
    </section>
  )
} 