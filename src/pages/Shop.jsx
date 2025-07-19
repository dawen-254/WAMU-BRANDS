// Shop.jsx
import React from 'react';

export default function Shop() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={` https://via.placeholder.com/300x200?text=Product+${item}`}
              alt={`Product ${item}`}
              className="w-full h-48 object-cover mb-4 rounded"
              loading="lazy"
            />
            <h2 className="text-xl font-semibold mb-2">Product {item}</h2>
            <p className="text-gray-600 mb-4">Description of product {item}</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}