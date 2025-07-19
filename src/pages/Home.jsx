// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import PopularCourses from '../components/PopularCourses';
import ConversionToolPreview from '../components/ConversionToolPreview';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section with full viewport height */}
      <section className="flex-grow">
        <Hero
          title="Welcome to Online Cyber"
          subtitle="Your one-stop portal for government services and more"
          ctaText="Explore Shop"
          ctaLink="/shop"
        />
      </section>

      {/* Content sections with proper spacing */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <FeaturedProducts />
        <PopularCourses />
        <ConversionToolPreview />
      </div>

      {/* Optional: If you want a footer to stick to bottom */}
      {/* <footer className="mt-auto">
        Your footer content here
      </footer> */}
    </div>
  );
};

export default Home;