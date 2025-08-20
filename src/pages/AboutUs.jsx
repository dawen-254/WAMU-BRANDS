// AboutUs.jsx
import React from 'react';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Sarah Wanjiku",
      role: "Chief Executive Officer",
      image: "https://via.placeholder.com/300x300?text=Sarah+W",
      description: "Leading digital transformation in Kenya's government services sector"
    },
    {
      name: "David Kimani",
      role: "Chief Technology Officer",
      image: "https://via.placeholder.com/300x300?text=David+K",
      description: "Building scalable solutions for millions of Kenyan citizens"
    },
    {
      name: "Grace Achieng",
      role: "Head of Customer Success",
      image: "https://via.placeholder.com/300x300?text=Grace+A",
      description: "Ensuring exceptional user experience for all our services"
    },
    {
      name: "Michael Ochieng",
      role: "Lead Developer",
      image: "https://via.placeholder.com/300x300?text=Michael+O",
      description: "Creating innovative technical solutions for complex challenges"
    }
  ];

  const achievements = [
    { number: "500K+", label: "Users Served", icon: "👥" },
    { number: "2M+", label: "Services Processed", icon: "⚡" },
    { number: "47", label: "Counties Reached", icon: "🗺️" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "🔒" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Continuously improving our platform with cutting-edge technology to serve Kenyans better",
      icon: "💡"
    },
    {
      title: "Accessibility",
      description: "Making government services accessible to everyone, regardless of location or technical expertise",
      icon: "🌍"
    },
    {
      title: "Transparency",
      description: "Maintaining clear communication and honest practices in all our operations",
      icon: "🔍"
    },
    {
      title: "Excellence",
      description: "Delivering high-quality services that exceed expectations and build trust",
      icon: "⭐"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Online Cyber
          </h1>
          <p className="text-lg lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transforming how Kenyans access government services through innovative digital solutions
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2020, Online Cyber emerged from a simple yet powerful vision: to bridge 
                  the gap between Kenyan citizens and essential government services through technology.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into Kenya's leading 
                  digital government services platform, serving over 500,000 users across all 47 counties.
                </p>
                <p>
                  We recognized the challenges faced by ordinary Kenyans - long queues, bureaucratic 
                  delays, and the need to travel long distances for simple services. Our solution? 
                  A comprehensive digital platform that brings government services directly to your fingertips.
                </p>
              </div>
              <div className="mt-8">
                <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold text-lg">
                  Learn More About Our Services
                </button>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="/about.jpg"
                alt="Online Cyber Office"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl lg:text-5xl mb-4">{achievement.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-semibold">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <div className="text-5xl mb-6">🎯</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg lg:text-xl leading-relaxed text-blue-100">
              To revolutionize access to government services in Kenya by providing secure, 
              efficient, and user-friendly digital solutions that save time, reduce costs, 
              and eliminate bureaucratic barriers for all citizens.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <div className="text-5xl mb-6">🔮</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg lg:text-xl leading-relaxed text-green-100">
              To become East Africa's premier digital government services platform, 
              setting the standard for citizen-centric technology solutions and 
              contributing to Kenya's digital transformation agenda.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Passionate professionals dedicated to transforming Kenya's digital landscape
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl shadow-2xl p-8 lg:p-16 text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join hundreds of thousands of Kenyans who have simplified their lives with our digital services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">
              Explore Our Services
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-bold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}