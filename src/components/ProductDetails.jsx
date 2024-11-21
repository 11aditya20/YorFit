import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const product = location.state;
  return (
    <div className="min-h-screen flex justify-center items-center mt-20">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-96 w-full object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-lg mt-2">{product.color}</p>
              <p className="mt-4 text-gray-900 text-3xl font-semibold">
                {product.price}
              </p>
            </div>
          </div>
        </div>

      
        <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Enter Your Details
          </h2>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="size"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Size
              </label>
              <select
                id="size"
                className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
              </select>
            </div>
            <div className="flex gap-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-6 py-3 text-white text-lg font-medium rounded-md bg-custom-purple shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <img
                src="/images/virtualtryon.png"
                alt="Tryon Logo"
                className="h-5 w-5"
              />
              Virtual Try-On
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-6 py-3 text-white text-lg font-medium rounded-md bg-custom-purple shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

