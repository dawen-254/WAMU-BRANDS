import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-orange-100 text-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-black">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700">
          {subtitle}
         </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={ctaLink}
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
          >
            {ctaText}
          </a>
          <a
            href="/FeaturedProducts" // Edit this link as needed
            className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 inline-block"
          >
            View All Services
          </a>
        </div>
                 
        {/* Feature highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-orange-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300 shadow-sm">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-lg mb-2 text-black">Secure & Reliable</h3>
            <p className="text-gray-600 text-sm">Bank-level security for all your transactions</p>
          </div>
          <div className="bg-white border border-orange-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300 shadow-sm">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg mb-2 text-black">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Quick processing for all government services</p>
          </div>
          <div className="bg-white border border-orange-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300 shadow-sm">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold text-lg mb-2 text-black">Mobile Friendly</h3>
            <p className="text-gray-600 text-sm">Access services anywhere, anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}