// PopularCourses.jsx
import React from 'react';

export default function PopularCourses() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Popular Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {["Cyber Security", "Web Development", "Data Science", "Digital Marketing", "Cloud Computing", "Artificial Intelligence"].map((course) => (
          <div key={course} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{course}</h3>
            <p className="text-gray-600 mb-4">Comprehensive course on {course.toLowerCase()}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-600">$99.99</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}