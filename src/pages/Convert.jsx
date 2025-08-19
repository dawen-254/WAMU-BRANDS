// Convert.jsx
import React, { useState } from 'react';

export default function Convert() {
  const [selectedConversion, setSelectedConversion] = useState('PDF to Word');
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const conversionTypes = [
    { value: 'PDF to Word', icon: '📄➜📝', description: 'Convert PDF documents to editable Word files' },
    { value: 'Word to PDF', icon: '📝➜📄', description: 'Convert Word documents to PDF format' },
    { value: 'JPG to PDF', icon: '🖼️➜📄', description: 'Convert images to PDF documents' },
    { value: 'PDF to JPG', icon: '📄➜🖼️', description: 'Extract images from PDF files' },
    { value: 'PNG to PDF', icon: '🖼️➜📄', description: 'Convert PNG images to PDF format' },
    { value: 'Excel to PDF', icon: '📊➜📄', description: 'Convert spreadsheets to PDF documents' },
    { value: 'PowerPoint to PDF', icon: '📽️➜📄', description: 'Convert presentations to PDF format' },
    { value: 'HTML to PDF', icon: '🌐➜📄', description: 'Convert web pages to PDF documents' }
  ];

  const recentConversions = [
    { file: 'document.pdf', type: 'PDF to Word', time: '2 minutes ago', status: 'completed' },
    { file: 'presentation.pptx', type: 'PowerPoint to PDF', time: '5 minutes ago', status: 'completed' },
    { file: 'image.jpg', type: 'JPG to PDF', time: '10 minutes ago', status: 'completed' }
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            File Conversion Tools
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Convert your files quickly and securely with our professional-grade conversion tools. 
            Support for all major file formats with lightning-fast processing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
              <span className="text-green-600 font-semibold">✓ 100% Secure</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
              <span className="text-blue-600 font-semibold">⚡ Lightning Fast</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
              <span className="text-purple-600 font-semibold">🔒 Privacy Protected</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Conversion Panel */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Convert Your Files
              </h2>

              {/* Conversion Type Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  Select conversion type:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {conversionTypes.map((type) => (
                    <div
                      key={type.value}
                      onClick={() => setSelectedConversion(type.value)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedConversion === type.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{type.icon}</span>
                        <span className="font-semibold text-gray-900">{type.value}</span>
                      </div>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* File Upload Area */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  Upload your file:
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 ${
                    dragActive
                      ? 'border-blue-500 bg-blue-50'
                      : uploadedFile
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {uploadedFile ? (
                    <div className="space-y-4">
                      <div className="text-6xl">✅</div>
                      <div>
                        <p className="text-xl font-semibold text-green-700">{uploadedFile.name}</p>
                        <p className="text-gray-600">
                          {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={() => setUploadedFile(null)}
                        className="text-red-500 hover:text-red-700 font-medium"
                      >
                        Remove file
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="text-6xl text-gray-400">📁</div>
                      <div>
                        <p className="text-xl font-semibold text-gray-700 mb-2">
                          Drag and drop your file here
                        </p>
                        <p className="text-gray-500">or click to browse from your device</p>
                      </div>
                      <input
                        type="file"
                        onChange={handleFileSelect}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Convert Button */}
              <button
                className={`w-full py-4 lg:py-5 rounded-xl font-bold text-lg transition-all duration-200 ${
                  uploadedFile
                    ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!uploadedFile}
              >
                {uploadedFile ? '🚀 Convert Now' : 'Select a file to convert'}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conversion Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Files converted today</span>
                  <span className="font-bold text-blue-600">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average processing time</span>
                  <span className="font-bold text-green-600">&lt; 30s</span>

                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success rate</span>
                  <span className="font-bold text-purple-600">99.9%</span>
                </div>
              </div>
            </div>

            {/* Recent Conversions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Conversions</h3>
              <div className="space-y-3">
                {recentConversions.map((conversion, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{conversion.file}</p>
                      <p className="text-sm text-gray-600">{conversion.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{conversion.time}</p>
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-blue-100 mb-4">
                Our support team is available 24/7 to assist you with any conversion needs.
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 lg:mt-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Conversion Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🔒', title: 'Secure & Private', description: 'Your files are encrypted and automatically deleted after conversion' },
              { icon: '⚡', title: 'Lightning Fast', description: 'Advanced algorithms ensure rapid processing without quality loss' },
              { icon: '🌍', title: 'No Installation', description: 'Works directly in your browser on any device, anywhere' },
              { icon: '💎', title: 'Premium Quality', description: 'Maintain original formatting and quality in all conversions' }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}