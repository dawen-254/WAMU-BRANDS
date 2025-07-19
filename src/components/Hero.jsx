// Hero.jsx
import React from 'react';

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="bg-blue-600 text-white rounded-lg p-8 text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl mb-6 max-w-2xl mx-auto">{subtitle}</p>
      <div className="flex justify-center">
        <a
          href={ctaLink}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg inline-block"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}