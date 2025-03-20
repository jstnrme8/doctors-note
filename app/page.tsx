import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Steps from '@/app/components/Steps'
import CountdownTimer from '@/app/components/CountdownTimer'
import MoneyBack from '@/app/components/MoneyBack'
import Features from '@/app/components/Features'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <div className="fixed top-0 w-full z-[9999]">
        <CountdownTimer />
      </div>
      <main className="min-h-screen bg-white pt-7">
        <Header />
        <Hero />
        <Steps />
        <MoneyBack />
        <Features />
        <Footer />
      </main>
    </>
  )
}