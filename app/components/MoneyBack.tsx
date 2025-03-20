import React from 'react';

const MoneyBack = () => {
  return (
    <section className="max-w-6xl mx-auto rounded-lg py-8 px-4">
      <div className="bg-[#b9eedf] rounded-xl p-8 flex items-center justify-center">
        <div className="flex items-center max-w-3xl">
          <div className="w-45 h-45 mr-6 flex-shrink-0">
            <img 
              src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/6790d778b0c1c07478996883_Group%201321319131.svg" 
              alt="100% Risk-free" 
              className="w-full h-full" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Money Back Guarantee!</h2>
            <p className="text-lg">We will refund 100% of your payment, in case you're not 100% satisfied with our service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyBack;
