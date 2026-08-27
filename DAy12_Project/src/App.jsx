import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";
import { MyStory } from "./context/MyContext";


const App = () => {

  let {isCartOpen, cartItems} = useContext(MyStory)
  const [productsData, setProductsData] = useState([]);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      // axios bydefaut axios.get ki pass karta hai 
       // kisi dur files se data lane ke liye
      // axios, fetch etc jo bahar se data laati hai to vo promish return karti hai
      // promish return karne se rokne ke liye function ko async do then
      // jo line promish return kar rahi hoti hai uske aage await ka use karte hai
      // axios ke jagah fetch likhne per response milega jisme body hogi aur usme 
      // ReadableStream hogi jo read nahi ki ja sakti issliye ise jsonon mein convert karna padega


      setProductsData(res.data);
      console.log(productsData);
    } catch (error) {
      console.log("Error in api", error);
    }
  };

  // function ki rerendering control karne ke liye
  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div className="h-screen p-2">
      <Navbar/>

      {isCartOpen ? (
        <div className="p-3 flex flex-wrap gap-5 justify-center">
          {<CartScreen/>}
        </div>
      ) : (
        <div className="p-3 flex flex-wrap gap-5 justify-center">
          {productsData.map((elem) => {
            let isInCart = cartItems.find((val)=>val.id === elem.id)
            
            return (
              <ProductCard
                product={elem}
                key={elem.id}
                isInCart={isInCart}
                
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
