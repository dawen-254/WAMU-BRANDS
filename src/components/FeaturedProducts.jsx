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
        imageSrc: " /ecitizen.png",
      },
      {
        title: "NSSF",
        description: "National Social Security Fund.",
        buttons: ["Member Login", "New Registration"],
        imageSrc: " /nssf.jpeg",
      },
      {
        title: "eTIMS",
        description: "Kenya Revenue Authority system.",
        buttons: ["eTIMS Login", "Support"],
        imageSrc: " /etims.png",
      },
    ],
    // Row 2
    [
      {
        title: "KUCCPS",
        description: "University and college admissions.",
        buttons: ["Apply Now", "Check Status"],
        imageSrc: "/kuccps.png",
      },
      {
        title: "Good Conduct",
        description: "Apply for police clearance.",
        buttons: ["Apply", "Track Application"],
        imageSrc: " /good.jpeg",
      },
      {
        title: "HELB",
        description: "Higher Education Loans Board.",
        buttons: ["Loan Application", "Loan Status"],
        imageSrc: "/helb.jpeg",
      },
    ],
    // Row 3
    [
      {
        title: "NTSA",
        description: "National Transport & Safety Authority.",
        buttons: ["Vehicle Registration", "Driving License"],
        imageSrc: " /ntsa.png",
      },
      {
        title: "NTSA Licensing",
        description: "Licensing and permits.",
        buttons: ["Apply for Permit", "Renew License"],
        imageSrc: " /ntsa.png",
      },
      {
        title: "Passport",
        description: "Apply for a new passport.",
        buttons: ["Book Appointment", "Check Status"],
        imageSrc: " /passport.jpeg",
      },
    ],
    // Row 4
    [
      {
        title: "Form 1 Admission",
        description: "Late admission applications.",
        buttons: ["Apply Now", "Check Requirements"],
        imageSrc: " /knec.jpeg",
      },
      {
        title: "KCSE Results",
        description: "Check and download KCSE results.",
        buttons: ["Download Results", "Verify Certificate"],
        imageSrc: " /kcse.png",
      },
      {
        title: "Type Setting",
        description: "Document formatting and typesetting.",
        buttons: ["Upload Document", "Get Quote"],
        imageSrc: " /type.jpeg",
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