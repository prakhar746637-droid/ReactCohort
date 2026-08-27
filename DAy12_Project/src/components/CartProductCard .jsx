import React from "react";

const CartProductCard = ({ product }) => {
  return (
    <div className="flex items-center gap-5 p-4 bg-white rounded-xl shadow-md border">

      {/* Product Image */}
      <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>

        <p className="text-xl font-bold text-green-600 mt-2">
          ${product.price}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-3">
          <button
            className="px-3 py-1 bg-gray-200 rounded"
          >
            -
          </button>

          <span className="font-semibold">
            {product.quantity || 1}
          </span>

          <button
            className="px-3 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default CartProductCard;