// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import PopularCourses from '../components/PopularCourses';
import ConversionToolPreview from '../components/ConversionToolPreview';
import ButtonForm from '../components/ButtonForm';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section - full viewport height */}
      <Hero
        title="Welcome to Online Cyber"
        subtitle="Your one-stop portal for government services, online courses, file conversion tools, and premium products"
        ctaText="Get Started Today"
        ctaLink="/services" // Edit this link as needed
      />

      {/* Independent Content Sections */}
      
      {/* Featured Products Section - Independent Card */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our curated selection of premium products and services
            </p>
            <a
              href="/shop" // Edit this link as needed
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-block shadow-md hover:shadow-lg"
            >
              View All Products
            </a>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Popular Courses Section - Independent Card */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Advance your skills with our expert-led online courses
            </p>
            <a
              href="/courses" // Edit this link as needed
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-block shadow-md hover:shadow-lg"
            >
              Browse All Courses
            </a>
          </div>
          <PopularCourses />
        </div>
      </section>

      {/* Conversion Tools Section - Independent Card */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              File Conversion Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Convert your files quickly and securely with our professional tools
            </p>
            <a
              href="/convert" // Edit this link as needed
              className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors inline-block shadow-md hover:shadow-lg"
            >
              Start Converting
            </a>
          </div>
          <ConversionToolPreview />
        </div>
      </section>

      {/* Government Services Section - New Independent Card */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Government Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Access essential government services from the comfort of your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/government-services" // Edit this link as needed
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-block shadow-md hover:shadow-lg"
              >
                View Services
              </a>
              <a
                href="/register" // Edit this link as needed
                className="bg-white text-blue-500 border-2 border-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors inline-block shadow-md hover:shadow-lg"
              >
                Register Account
              </a>
            </div>
          </div>
          
          {/* Government Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🆔</div>
              <h3 className="text-xl font-semibold mb-2">ID Services</h3>
              <p className="text-gray-600 text-sm">Apply for national ID, replacement, and updates</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-semibold mb-2">Certificates</h3>
              <p className="text-gray-600 text-sm">Birth, death, and marriage certificates</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">Licenses</h3>
              <p className="text-gray-600 text-sm">Business licenses and permits</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-2">Tax Services</h3>
              <p className="text-gray-600 text-sm">KRA services and tax compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Contact Section - Independent Card */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Get the latest updates on new services, features, and government announcements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <a
              href="/newsletter-signup" // Edit this link as needed
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-block whitespace-nowrap"
            >
              Subscribe
            </a>
          </div>
          <div className="mt-8">
            <a
              href="/contact" // Edit this link as needed
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              Need help? Contact our support team
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Online Cyber</h3>
              <p className="text-gray-300">Your trusted partner for digital government services in Kenya.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/government-services" className="hover:text-white transition-colors">Government Services</a></li>
                <li><a href="/shop" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="/courses" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="/convert" className="hover:text-white transition-colors">File Conversion</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Online Cyber. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;