'use client'
import Image from 'next/image'
import CTAButton from './CTAButton'

interface StepCardProps {
  image: string
  title: string
  description: string
  alt: string
  className?: string
}

function StepCard({ image, title, description, alt, className = "" }: StepCardProps) {
  return (
    <div className={`bg-[#dae9fd] rounded-lg p-6 text-center ${className}`}>
      <div className="relative w-60 h-60 mx-auto mb-3">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <h4 className="font-bold text-2xl mb-2 text-black">{title}</h4>
      <p className="text-gray-600 text-left text-sm tracking-wider">{description}</p>
    </div>
  )
}

export default function Steps() {
  const steps = [
    {
      image: '/form-filling.webp',
      title: 'Fill In The Smart Form',
      description: "Indicate your illness and the desired duration. It's quick and intuitive.",
      alt: 'Fill in the smart form'
    },
    {
      image: '/pdf-document.webp',
      title: 'Receive Your PDF In 1 Minute',
      description: 'After you\'ve completed the checkout, your pre-filled sick leave will be sent by email within 1 minute, and it will be ready on the payment confirmation page.',
      alt: 'Receive your PDF'
    },
    {
      image: '/satisfaction.webp',
      title: '100% Satisfaction Guarantee',
      description: 'Join hundreds of thousands of satisfied customers who trust us. Our sick leave plans are easy to use and designed to meet your needs quickly and efficiently!',
      alt: '100% Satisfaction'
    }
  ]

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-5xl font-bold text-center mb-2 text-black">Get An Online Doctor's</h2>
      <h3 className="text-5xl font-bold text-center mb-4 text-black">Note In 3 Easy Steps</h3>
      <div className="flex justify-center mb-12">
        <p className="text-left text-gray-600 max-w-2xl text-xl">
          With our online platform we make it quick and simple for you to obtain a
          doctors note, so you can focus on rest and recovery.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepCard 
            key={index} 
            {...step} 
            className={index === 0 ? "mb-20" : ""}
          />
        ))}
      </div>

      <div className="relative z-20 pt-3 tracking-widest mt-2">
        <CTAButton />
      </div>

    </section>
  )
} 