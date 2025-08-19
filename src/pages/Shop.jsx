import React from 'react';

// Individual Product Component
const Product = ({ product }) => {
  const handleBuyNow = () => {
    const message = `Hi! I'm interested in buying the ${product.name} (Product ID: ${product.id}) for KSh ${product.price.toLocaleString()}. Please let me know how to proceed with the purchase.`;
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            New
          </div>
        )}
        {product.discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
      </div>
      
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 flex-1">
            {product.name}
          </h2>
          <span className="text-sm text-gray-500 ml-2">
            #{product.id}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mb-4">
          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm mr-2 mb-2">
            {product.category}
          </span>
          <span className="text-sm text-gray-500">
            Stock: {product.stock}
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-600">
              KSh {product.price.toLocaleString()}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-400 line-through">
                KSh {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>
        
        <button 
          onClick={handleBuyNow}
          disabled={product.stock === 0}
          className={`w-full py-3 lg:py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
            product.stock === 0 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700'
          }`}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default function Shop() {
  // Independent product data - Electronic Computer Accessories
  const products = [
    {
      id: 'PRD001',
      name: 'Gaming Mechanical Keyboard',
      description: 'RGB backlit mechanical keyboard with Cherry MX switches, perfect for gaming and professional typing.',
      price: 12500,
      originalPrice: 16000,
      category: 'Input Devices',
      stock: 15,
      rating: 5,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
      isNew: true,
      discount: 22
    },
    {
      id: 'PRD002',
      name: 'Wireless Gaming Mouse',
      description: 'High-precision wireless gaming mouse with 16000 DPI sensor and customizable RGB lighting.',
      price: 8500,
      category: 'Input Devices',
      stock: 8,
      rating: 4,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
      isNew: false,
      discount: 0
    },
    {
      id: 'PRD003',
      name: 'USB-C Hub 7-in-1',
      description: 'Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and 60W power delivery for laptops.',
      price: 6800,
      category: 'Connectivity',
      stock: 5,
      rating: 5,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=300&fit=crop',
      isNew: true,
      discount: 0
    },
    {
      id: 'PRD004',
      name: 'Laptop Cooling Pad',
      description: 'Adjustable laptop cooling pad with dual fans, LED lighting, and ergonomic design for better airflow.',
      price: 4200,
      originalPrice: 5500,
      category: 'Cooling',
      stock: 22,
      rating: 4,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=400&h=300&fit=crop',
      isNew: false,
      discount: 24
    },
    {
      id: 'PRD005',
      name: 'External SSD 1TB',
      description: 'Portable external SSD with USB 3.1 Gen 2 interface, up to 540MB/s read speed for fast data transfer.',
      price: 15800,
      category: 'Storage',
      stock: 0,
      rating: 4,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop',
      isNew: false,
      discount: 0
    },
    {
      id: 'PRD006',
      name: 'Monitor Stand with USB Hub',
      description: 'Adjustable monitor stand with built-in 4-port USB hub and cable management for organized workspace.',
      price: 7200,
      category: 'Desk Accessories',
      stock: 12,
      rating: 5,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
      isNew: true,
      discount: 0
    },
    {
      id: 'PRD007',
      name: 'Webcam 4K Ultra HD',
      description: '4K Ultra HD webcam with auto-focus, noise-canceling microphone, and privacy shutter for video calls.',
      price: 11500,
      originalPrice: 14500,
      category: 'Video',
      stock: 18,
      rating: 4,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop',
      isNew: false,
      discount: 21
    },
    {
      id: 'PRD008',
      name: 'Bluetooth Audio Adapter',
      description: 'Wireless Bluetooth 5.0 transmitter/receiver for converting wired audio devices to wireless.',
      price: 3200,
      category: 'Audio',
      stock: 25,
      rating: 5,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1609635026523-1f84d9417dcc?w=400&h=300&fit=crop',
      isNew: true,
      discount: 0
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Shop
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium computer accessories
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <Product 
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
            Load More Products
          </button>
        </div>
      </div>
    </main>
  );
}