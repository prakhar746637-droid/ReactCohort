
import React from "react";
import {useNavigate} from 'react-router'

const CartScreen = ({ product }) => {
  let navigate = useNavigate()
  return (
    <div className="  bg-gray-100 rounded-2xl">

      {/* Product Card */}
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

        {/* Product Image */}
        <div onClick={()=>navigate(`/detail/${product.id}`)} className="h-64 bg-gray-50 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="p-5">

          {/* Category */}
          <p className="text-sm text-blue-600 font-semibold uppercase mb-2">
            {product.category}
          </p>

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800 line-clamp-2 mb-3">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-md">
              ★ {product.rating.rate}
            </span>

            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>

            <span className="text-sm text-green-600 font-medium">
              In Stock
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">

            <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition cursor-pointer">
              Add to Cart
            </button>

            <button className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition cursor-pointer">
              ♡
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default CartScreen;

