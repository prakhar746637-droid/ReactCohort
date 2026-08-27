// also install lucide-react (npm i lucide-react)
import React, { useContext } from "react";
import { MyStory } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  let { setCartItems } = useContext(MyStory);

  const addToCart = () => {
    setCartItems((prev) => [...prev, product]);
    alert("Product added into art");
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Product Image */}
      <div className="h-72 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain mix-blend-multiply"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mt-2 text-xl font-bold text-gray-900 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="font-semibold text-gray-800">
              {product.rating.rate}
            </span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>
        </div>
        

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          {isInCart ? (
            <button
              onClick={addToCart}
              className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              <span className="text-4xl text-red-600">+</span>
              <span className="text-5xl">1</span>
              <span className="text-4xl text-green-300">-</span>

            </button>
          ) : (
            <button
              onClick={addToCart}
              className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Add to Cart
            </button>
          )}

          <button className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
            ♡
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
