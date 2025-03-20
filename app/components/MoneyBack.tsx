import React from 'react';
import Image from 'next/image';

const MoneyBack = () => {
  return (
    <section className="max-w-6xl mx-auto rounded-lg py-8 px-4">
      <div className="bg-[#b9eedf] rounded-xl p-8 flex items-center justify-center">
        <div className="flex items-center max-w-3xl">
          <div className="w-45 h-45 mr-6 flex-shrink-0">
            <Image 
              src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/6790d778b0c1c07478996883_Group%201321319131.svg"
              alt="Money back guarantee"
              width={300}
              height={300}
              className="w-45 h-45"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Money Back Guarantee!</h2>
            <p className="text-gray-700 mb-4">We&apos;re confident you&apos;ll be satisfied with our service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyBack;
