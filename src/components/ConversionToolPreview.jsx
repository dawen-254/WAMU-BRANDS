// ConversionToolPreview.jsx
import React from 'react';

export default function ConversionToolPreview() {
  return (
    <section className="bg-gray-50 p-8 rounded-lg mb-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Try Our Conversion Tool</h2>
        <p className="text-gray-600 mb-6">Experience the power of our conversion utility</p>
        <a
          href="/convert"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md"
        >
          Try Now
        </a>
      </div>
    </section>
  );
}