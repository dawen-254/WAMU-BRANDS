// Card.jsx
import React from 'react';
import ButtonForm from '../components/ButtonForm';

export default function Card({ title, description, buttons, imageSrc }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-center font-medium text-gray-800">{title}</h3>
        <p className="text-center text-gray-500 text-sm mt-1">{description}</p>
        <div className="mt-4 space-y-2">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
              onClick={() => alert(`${btn} clicked`)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}