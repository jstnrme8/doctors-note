import Header from '@/app/components/Header'
import CountdownTimer from '@/app/components/CountdownTimer'
import Footer from '@/app/components/Footer'

export default function Contact() {
  return (
    <>
      <div className="fixed top-0 w-full z-[9999]">
        <CountdownTimer />
      </div>
      <main className="min-h-screen bg-white pt-7">
        <Header />
        <section className="container mx-auto px-2 py-10 max-w-3xl">
          <h1 className="text-5xl font-semi-bold mb-12 text-gray-800">Contact Us</h1>
          <p className="mb-4 text-gray-600">We are available to answer any questions or concerns you may have.</p>
          
          <div className="space-y-6 text-black-600">
            <div>
              <p className="text-gray-700 font-bold mb-1">Customer Support:</p>
              <p className="text-gray-600">Mon-Fri, 9am-6pm CET</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-bold mb-1">Email:</p>
              <p className="text-gray-500">support@medexcuse.com</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-bold mb-1">Company details:</p>
              <p className="text-gray-700 text-sm font-bold">COMPANY NAME & ADDRESS</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-bold mb-1">Company registration number:</p>
              <p className="text-gray-500">76987496</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
