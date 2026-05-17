import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
      <h1 className="text-3xl font-extrabold">Product Details</h1>
      <p className="text-neutral-500 max-w-md mx-auto">
        Product ID: <span className="text-brand font-bold">#{id}</span> is loading. The dynamic product specification view, multiple angle galleries, and interactive sizing selectors will be fully operational in the product detail phase!
      </p>
    </div>
  );
}
