'use client'
import Image from 'next/image'
import CTAButton from './CTAButton'

export default function Features() {
    return (
        <section className="max-w-6xl mx-auto py-10 px-4">

            <h2 className="text-5xl font-bold text-center mb-2 text-black">Get Peace of Mind</h2>
            <h3 className="text-5xl font-bold text-center mb-2 text-black">With <span className="text-blue-500 underline">My Doctors Note</span></h3>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                My Doctor's Note provides a fast, hassle-free solution for obtaining excuse notes. Focus on your recovery while we take care of the paperwork, delivering your note in minutes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-100 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Trusted by Thousands Across the USA</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="mr-2 mt-1">•</span>
                            <div>
                                <span className="font-bold">Professional & Reliable</span> – Includes key medical absence details in a format widely recognized by workplaces.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1">•</span>
                            <div>
                                <span className="font-bold">Essential Information Included</span> – Clearly structured while protecting your privacy.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1">•</span>
                            <div>
                                <span className="font-bold">Instant & Hassle-Free</span> – No appointments, no waiting. Receive your document within seconds via email.
                            </div>
                        </li>
                    </ul>
                    <div className="flex justify-between items-center mt-6">
                        <img src="https://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-9a2cfbe1-9947-4a93-8b87-51daab807ae9_768x.svg?323" alt="Walmart" className="h-10 object-contain" />
                        <img src="https://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-6817383f-7f4d-4e15-8e1c-05fed29356e4_768x.svg?323" alt="FedEx" className="h-10 object-contain" />
                        <img src="https://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-90e43877-7d57-4219-af6e-0dd369345276_768x.webp?323" alt="Starbucks" className="h-10 object-contain" />
                    </div>
                </div>

                <div className="p-6 bg-blue-100 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Get Your Note In Under 1 Minute</h3>
                    <ul className="space-y-3">
                        <li><span className="font-bold">Skip the Wait</span> – No appointments, no delays. Get what you need instantly, anytime.</li>
                        <li><span className="font-bold">Available 24/7</span> – No need to schedule weeks in advance. Access your document on demand, day or night.</li>
                        <li><span className="font-bold">Instant Email Delivery</span> – Receive your note directly in your inbox, ready to use.</li>
                    </ul>
                </div>

                <div className="p-6 bg-blue-100 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Customer Support That Puts You First</h3>
                    <ul className="space-y-3">
                        <li><span className="font-bold">Adjustable to Your Needs</span> – Easily modify details to match your situation.</li>
                        <li><span className="font-bold">Always Here for You</span> – Get assistance whenever you need it, day or night.</li>
                        <li><span className="font-bold">Real People, Real Support</span> – Our team is here to help, every step of the way.</li>
                    </ul>
                    <div className="flex items-center mt-6">
                        <div className="flex -space-x-2">
                            {/* Replace with actual support team images */}
                            <img src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/6789e26f1ee5aa607faa42ac_Frame%202147207361.png" alt="Support Team" className="w-60" />
                        </div>
                        <p className="text-green-500 ml-4">We're ready to help!</p>
                    </div>
                </div>

                <div className="p-6 bg-blue-100 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-4">The Best Price In The Market</h3>
                    <p className="text-gray-500 line-through mb-2">$42.99</p>
                    <p className="text-6xl font-bold mb-2">$29.99</p>
                    <p className="text-green-500 text-lg">30% Discount - Limited Time!</p>
                </div>
            </div>
            <div className="pt-10 mt-2">
                <CTAButton text="Get Your Doctors Note Now →" />
            </div>
        </section>
    )
}
