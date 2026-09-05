
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [productsData, setProductsData] = useState([]);

  const getProductsData = async () => {
    try {
      let res = await axios.get(
        "https://fakestoreapi.com/products"
      );

      console.log(res);

      setProductsData(res.data);
    } catch (error) {
      console.log("Errors in ProductsPage api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden bg-gray-100">

      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Store
            </p>

            <h1 className="text-3xl font-bold text-gray-800 mt-1">
              Products
            </h1>

            <p className="text-gray-500 mt-1">
              Explore our collection of products
            </p>
          </div>

          {/* Product Count */}
          <div className="bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Products
            </p>

            <p className="text-2xl font-bold text-gray-800">
              {productsData.length}
            </p>
          </div>

        </div>

      </div>

      {/* Products Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">

        <div className="max-w-7xl mx-auto">

          {productsData.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {productsData.map((val) => (
                <ProductCard
                  key={val.id}
                  product={val}
                />
              ))}

            </div>

          ) : (

            /* Loading */
            <div className="h-[60vh] flex flex-col items-center justify-center">

              <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

              <p className="text-gray-500 mt-4">
                Loading products...
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default ProductsPage;

