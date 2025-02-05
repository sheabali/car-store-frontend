import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ProductDetails() {
  const [product] = useState({
    id: 1,
    name: 'Awesome Gadget',
    price: '$199.99',
    description: 'A high-tech gadget that improves your daily life.',
    image:
      'https://demo1.leotheme.com/leo_rent_car_demo/32-large_default/brown-bear-printed-sweater.jpg',
  });

  const handleBuyNow = () => {
    window.location.href = `/checkout?product=${product.id}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
            {product.price}
          </p>
          <Button
            onClick={handleBuyNow}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
