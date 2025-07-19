// FeaturedProducts.jsx
import React from 'react';
import Card from './Card';

export default function FeaturedProducts() {
  const cardData = [
    // Row 1
    [
      {
        title: "e-citizen",
        description: "Apply for services online.",
        buttons: ["Register", "Login"],
        imageSrc: " https://via.placeholder.com/300x200?text=e-Citizen",
      },
      {
        title: "NSSF",
        description: "National Social Security Fund.",
        buttons: ["Member Login", "New Registration"],
        imageSrc: " https://via.placeholder.com/300x200?text=NSSF",
      },
      {
        title: "eTIMS",
        description: "Kenya Revenue Authority system.",
        buttons: ["eTIMS Login", "Support"],
        imageSrc: " https://via.placeholder.com/300x200?text=eTIMS",
      },
    ],
    // Row 2
    [
      {
        title: "KUCCPS",
        description: "University and college admissions.",
        buttons: ["Apply Now", "Check Status"],
        imageSrc: " https://via.placeholder.com/300x200?text=KUCCPS",
      },
      {
        title: "Good Conduct",
        description: "Apply for police clearance.",
        buttons: ["Apply", "Track Application"],
        imageSrc: " https://via.placeholder.com/300x200?text=Good+Conduct",
      },
      {
        title: "HELB",
        description: "Higher Education Loans Board.",
        buttons: ["Loan Application", "Loan Status"],
        imageSrc: " https://via.placeholder.com/300x200?text=HELB",
      },
    ],
    // Row 3
    [
      {
        title: "NTSA",
        description: "National Transport & Safety Authority.",
        buttons: ["Vehicle Registration", "Driving License"],
        imageSrc: " https://via.placeholder.com/300x200?text=NTSA",
      },
      {
        title: "NTSA Licensing",
        description: "Licensing and permits.",
        buttons: ["Apply for Permit", "Renew License"],
        imageSrc: " https://via.placeholder.com/300x200?text=NTSA+Licensing",
      },
      {
        title: "Passport",
        description: "Apply for a new passport.",
        buttons: ["Book Appointment", "Check Status"],
        imageSrc: " https://via.placeholder.com/300x200?text=Passport",
      },
    ],
    // Row 4
    [
      {
        title: "Form 1 Admission",
        description: "Late admission applications.",
        buttons: ["Apply Now", "Check Requirements"],
        imageSrc: " https://via.placeholder.com/300x200?text=Form+1",
      },
      {
        title: "KCSE Results",
        description: "Check and download KCSE results.",
        buttons: ["Download Results", "Verify Certificate"],
        imageSrc: " https://via.placeholder.com/300x200?text=KCSE",
      },
      {
        title: "Type Setting",
        description: "Document formatting and typesetting.",
        buttons: ["Upload Document", "Get Quote"],
        imageSrc: " https://via.placeholder.com/300x200?text=Type+Setting",
      },
    ],
  ];

  return (
    <div className="space-y-12 mb-12">
      {cardData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {row.map((card, cardIndex) => (
            <Card key={`${rowIndex}-${cardIndex}`} {...card} />
          ))}
        </div>
      ))}
    </div>
  );
}