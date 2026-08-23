import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Shopping Cart
        </h1>

        <p className="text-slate-500 mt-1">
          {cartItems.length} items in your cart
        </p>
      </div>

      {/* Cart */}
      <div className="max-w-6xl mx-auto">

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-semibold text-slate-800">
              Your cart is empty
            </h2>

            <p className="text-slate-500 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {cartItems.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row gap-5 items-center"
              >

                {/* Product Image */}
                <div className="w-32 h-32 bg-slate-100 rounded-xl flex items-center justify-center p-4 shrink-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 w-full">

                  <p className="text-xs uppercase text-amber-600 font-semibold">
                    {product.category}
                  </p>

                  <h2 className="text-lg font-bold text-slate-900 mt-1 line-clamp-2">
                    {product.title}
                  </h2>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-amber-100 text-slate-800 px-2 py-1 rounded-md text-sm font-semibold">
                      ⭐ {product.rating.rate}
                    </span>

                    <span className="text-sm text-slate-400">
                      ({product.rating.count} reviews)
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-slate-900 mt-3">
                    ${product.price}
                  </p>

                </div>

                {/* Actions */}
                <div className="flex sm:flex-col gap-2 w-full sm:w-auto">

                  <button className="flex-1 bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition">
                    Buy Now
                  </button>

                  <button className="flex-1 bg-red-100 text-red-600 px-5 py-2 rounded-lg hover:bg-red-200 transition">
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;