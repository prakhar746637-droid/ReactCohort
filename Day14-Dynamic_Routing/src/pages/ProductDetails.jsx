import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [singlePageData, setSinglePageData] = useState({});

  let { id } = useParams();

  let getSingleProductsData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);

      setSinglePageData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getSingleProductsData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      {/* Product Details Card */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-xl flex items-center justify-center p-8">
            <img
              src={singlePageData.image}
              alt={singlePageData.title}
              className="w-full max-w-sm h-96 object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-3">
              {singlePageData.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {singlePageData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-yellow-500 text-xl">★</span>

              <span className="font-semibold text-gray-700">
                {singlePageData.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singlePageData.rating?.count} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-3xl font-bold text-gray-900 mb-5">
              ${singlePageData.price}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-7 mb-8">
              {singlePageData.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition">
                Add to Cart
              </button>

              <button className="flex-1 border-2 border-gray-800 hover:bg-gray-800 hover:text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
