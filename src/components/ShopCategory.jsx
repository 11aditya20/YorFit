import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Shirt',
    href: '#',
    imageSrc: '/images/fullshirt.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹650',
    color: 'Dark Green',
  },
  {
    id: 2,
    name: 'Half Shirt',
    href: '#',
    imageSrc: '/images/halfshirt.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹499',
    color: 'Aspen White',
  },
  {
    id: 3,
    name: 'Hoodie',
    href: '#',
    imageSrc: '/images/hoodie.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹870',
    color: 'Dark Pink',
  },
  {
    id: 4,
    name: 'Top',
    href: '#',
    imageSrc: '/images/girlstop.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹745',
    color: 'Maroon',
  },
];

function ShopCategory() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Link to={`/product/${product.id}`} state={product}>
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${product.id}`} state={product}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
