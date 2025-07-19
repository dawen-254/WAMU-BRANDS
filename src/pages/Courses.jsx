// Courses.jsx
import React from 'react';

export default function Courses() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {["Cyber Security", "Web Development", "Data Science", "Digital Marketing"].map((course) => (
          <div key={course} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{course}</h2>
            <p className="text-gray-600 mb-4">Comprehensive course on {course.toLowerCase()}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">$99.99</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}