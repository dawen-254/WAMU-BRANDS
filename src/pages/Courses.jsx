import React, { useState } from 'react';
import ButtonForm from '../components/ButtonForm';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      name: "Cyber Security",
      description: "Master the fundamentals of cybersecurity, ethical hacking, and network protection",
      price: 149.99,
      duration: "12 weeks",
      level: "Intermediate",
      students: 2847,
      rating: 4.8,
      image: "https://via.placeholder.com/400x250?text=Cyber+Security"
    },
    {
      name: "Web Development",
      description: "Learn full-stack web development with modern frameworks and technologies",
      price: 129.99,
      duration: "16 weeks",
      level: "Beginner",
      students: 3921,
      rating: 4.9,
      image: "https://via.placeholder.com/400x250?text=Web+Development"
    },
    {
      name: "Data Science",
      description: "Dive deep into data analysis, machine learning, and statistical modeling",
      price: 179.99,
      duration: "20 weeks",
      level: "Advanced",
      students: 1856,
      rating: 4.7,
      image: "https://via.placeholder.com/400x250?text=Data+Science"
    },
    {
      name: "Digital Marketing",
      description: "Master digital marketing strategies, SEO, social media, and analytics",
      price: 99.99,
      duration: "8 weeks",
      level: "Beginner",
      students: 4203,
      rating: 4.6,
      image: "https://via.placeholder.com/400x250?text=Digital+Marketing"
    },
    {
      name: "Cloud Computing",
      description: "Learn AWS, Azure, and Google Cloud platforms with hands-on projects",
      price: 159.99,
      duration: "14 weeks",
      level: "Intermediate",
      students: 2134,
      rating: 4.8,
      image: "https://via.placeholder.com/400x250?text=Cloud+Computing"
    },
    {
      name: "Mobile App Development",
      description: "Build native and cross-platform mobile applications with React Native",
      price: 139.99,
      duration: "18 weeks",
      level: "Intermediate",
      students: 1675,
      rating: 4.7,
      image: "https://via.placeholder.com/400x250?text=Mobile+Development"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">

        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Available Courses
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advance your career with our comprehensive online courses designed by industry experts
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-blue-600 font-semibold">6 Courses Available</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-green-600 font-semibold">Lifetime Access</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-purple-600 font-semibold">Certificate Included</span>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course) => (
            <div key={course.name} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                  {course.level}
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {course.duration}
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900">
                  {course.name}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👥</span>
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-3xl font-bold text-blue-600">
                      ${course.price}
                    </span>
                    <span className="text-gray-500 ml-2 line-through">
                      ${(course.price * 1.5).toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Form */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-xl relative">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Enroll in {selectedCourse.name}
              </h3>
              <ButtonForm courseName={selectedCourse.name} />
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
