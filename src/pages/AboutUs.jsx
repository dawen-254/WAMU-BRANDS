// AboutUs.jsx
import React from 'react';

export default function AboutUs() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, Online Cyber has been helping Kenyans access government services
              conveniently from the comfort of their homes or offices.
            </p>
            <p className="text-gray-700">
              We started with a simple mission: to make bureaucratic processes easier for everyone.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src=" https://via.placeholder.com/600x400?text=Our+Team"
              alt="Our Team"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To simplify access to government services through technology, saving our users time and reducing the hassle of physical queues.
          </p>
        </div>
      </div>
    </main>
  );
}