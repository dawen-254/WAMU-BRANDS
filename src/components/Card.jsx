import React, { useState } from 'react';

export default function Card({ title, description, buttons, imageSrc }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    email: '',
    serviceDescription: ''
  });

  const handleButtonClick = (buttonText) => {
    setSelectedService(buttonText);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.idNumber || !formData.email || !formData.serviceDescription) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Create WhatsApp message
    const message = `🔔 New Service Request

📋 Service: ${selectedService}

👤 Personal Information:
• Name: ${formData.name}
• ID Number: ${formData.idNumber}
• Email: ${formData.email}

📝 Service Description:
${formData.serviceDescription}

---
Sent from our website form`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with your WhatsApp number (include country code without + sign)
    const phoneNumber = "254797537766"; // Replace with actual number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      name: '',
      idNumber: '',
      email: '',
      serviceDescription: ''
    });
    setShowForm(false);
  };

  const handleClose = () => {
    setShowForm(false);
    setFormData({
      name: '',
      idNumber: '',
      email: '',
      serviceDescription: ''
    });
  };

  return (
    <>
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
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Service Request: {selectedService}
                </h2>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 text-xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    ID Number *
                  </label>
                  <input
                    type="text"
                    id="idNumber"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                    placeholder="Enter your ID number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="serviceDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Description *
                  </label>
                  <textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    value={formData.serviceDescription}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-black placeholder-gray-400"
                    placeholder="Describe the service you need..."
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Send via WhatsApp</span>
                    <span>💬</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}