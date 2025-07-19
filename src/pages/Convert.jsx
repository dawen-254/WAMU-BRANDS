// Convert.jsx
import React from 'react';

export default function Convert() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">File Conversion Tools</h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Select conversion type:</label>
          <select className="w-full p-2 border rounded">
            <option>PDF to Word</option>
            <option>Word to PDF</option>
            <option>JPG to PDF</option>
            <option>PDF to JPG</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Upload file:</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p>Drag and drop files here or click to browse</p>
            <input type="file" className="hidden" />
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Convert Now
        </button>
      </div>
    </main>
  );
}