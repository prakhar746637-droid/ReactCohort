import React from "react";

const ProductCard = ({ product,setCartItems }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-slate-200">
      
      {/* Product Image */}
      <div className="h-64 bg-slate-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-bold text-slate-900 line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-500 mt-3 line-clamp-3 min-h-[60px]">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1 bg-amber-100 px-2 py-1 rounded-md">
            <span className="text-amber-500">★</span>
            <span className="text-sm font-semibold text-slate-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-slate-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-xs text-slate-400">Price</p>
            <p className="text-2xl font-bold text-slate-900">
              ${product.price}
            </p>
          </div>

          <button 
          onClick={()=>setCartItems((prev)=>[...prev,product])}
          className="bg-amber-400 text-slate-900 font-semibold px-4 py-2.5 rounded-lg hover:bg-amber-500 transition duration-200 shadow-sm">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;