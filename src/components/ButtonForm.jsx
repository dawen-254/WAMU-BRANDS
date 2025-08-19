import React, { useState } from 'react';

const ButtonForm = ({ courseName }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    idNumber: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, idNumber } = formData;
    const message = `Hello, I want to enroll in *${courseName}*.\n\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nID Number: ${idNumber}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '254797537766'; // Replace with your number
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        required
        value={formData.fullName}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
      />

      <img
        src="/mpesa.png"
        alt="Course"
        className="w-full h-auto rounded"
      />

      <input
        type="text"
        name="idNumber"
        placeholder="ID Number"
        required
        value={formData.idNumber}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Submit via WhatsApp
      </button>
    </form>
  );
};

export default ButtonForm;
