import axios from "axios";
import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import ProductsCard from "../components/CartScreen";
import CartScreen from "../components/CartScreen";

const Home = () => {
  let { productsData, setProductsData } = useContext(MyStore);
  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data)
      
    } catch (error) {
      console.log("error in Api", error);
    }
  };
  useEffect(()=>{
    getProductsData()
  },[])
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {
        productsData.map((val)=>{
            return <CartScreen product={val} key={val.id}/>
        })
      }
    </div>
  );
};

export default Home;
