
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-[520px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col">

      {/* Image */}
      <div className="h-56 shrink-0 bg-gray-50 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">

        {/* Category */}
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-semibold">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-auto pt-5 gap-2">

          <div>
            <p className="text-xs text-gray-400">
              Price
            </p>

            <p className="text-2xl font-bold text-gray-800">
              ${product.price}
            </p>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition whitespace-nowrap">
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;

