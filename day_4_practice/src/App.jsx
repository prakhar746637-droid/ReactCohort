import React from 'react'
import ProductsCard from './ProductsCard'

const App = () => {
   let productData = [
    
  {
    id: 1,
    name: "Wireless Mousee",
    category: "Electronics",
    price: 799,
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 2499,
    image: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "Gaming Headset",
    category: "Electronics",
    price: 2799,
    image: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1899,
    image: "https://picsum.photos/200?random=4",
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Accessories",
    price: 4999,
    image: "https://picsum.photos/200?random=5",
  },
  {
    id: 6,
    name: "USB-C Charger",
    category: "Electronics",
    price: 999,
    image: "https://picsum.photos/200?random=6",
  },
  {
    id: 7,
    name: "Laptop Stand",
    category: "Accessories",
    price: 1499,
    image: "https://picsum.photos/200?random=7",
  },
  {
    id: 8,
    name: "Running Shoes",
    category: "Footwear",
    price: 3499,
    image: "https://picsum.photos/200?random=8",
  },
  {
    id: 9,
    name: "Casual Sneakers",
    category: "Footwear",
    price: 2299,
    image: "https://picsum.photos/200?random=9",
  },
  {
    id: 10,
    name: "Leather Wallet",
    category: "Accessories",
    price: 899,
    image: "https://picsum.photos/200?random=10",
  },
  {
    id: 11,
    name: "Cotton T-Shirt",
    category: "Clothing",
    price: 599,
    image: "https://picsum.photos/200?random=11",
  },
  {
    id: 12,
    name: "Denim Jeans",
    category: "Clothing",
    price: 1599,
    image: "https://picsum.photos/200?random=12",
  },
  {
    id: 13,
    name: "Hoodie",
    category: "Clothing",
    price: 1999,
    image: "https://picsum.photos/200?random=13",
  },
  {
    id: 14,
    name: "Backpack",
    category: "Bags",
    price: 1299,
    image: "https://picsum.photos/200?random=14",
  },
  {
    id: 15,
    name: "Travel Duffel Bag",
    category: "Bags",
    price: 2399,
    image: "https://picsum.photos/200?random=15",
  },
  {
    id: 16,
    name: "Water Bottle",
    category: "Home & Kitchen",
    price: 349,
    image: "https://picsum.photos/200?random=16",
  },
  {
    id: 17,
    name: "Coffee Mug",
    category: "Home & Kitchen",
    price: 299,
    image: "https://picsum.photos/200?random=17",
  },
  {
    id: 18,
    name: "Desk Lamp",
    category: "Home & Kitchen",
    price: 899,
    image: "https://picsum.photos/200?random=18",
  },
  {
    id: 19,
    name: "Notebook",
    category: "Stationery",
    price: 199,
    image: "https://picsum.photos/200?random=19",
  },
  {
    id: 20,
    name: "Ball Pen Set",
    category: "Stationery",
    price: 249,
    image: "https://picsum.photos/200?random=20",
  },
  {
    id: 21,
    name: "Office Chair",
    category: "Furniture",
    price: 6999,
    image: "https://picsum.photos/200?random=21",
  },
  {
    id: 22,
    name: "Study Table",
    category: "Furniture",
    price: 4999,
    image: "https://picsum.photos/200?random=22",
  },
  {
    id: 23,
    name: "Table Fan",
    category: "Appliances",
    price: 1799,
    image: "https://picsum.photos/200?random=23",
  },
  {
    id: 24,
    name: "Electric Kettle",
    category: "Appliances",
    price: 1499,
    image: "https://picsum.photos/200?random=24",
  },
  {
    id: 25,
    name: "Air Fryer",
    category: "Appliances",
    price: 5499,
    image: "https://picsum.photos/200?random=25",
  },
  {
    id: 26,
    name: "Yoga Mat",
    category: "Fitness",
    price: 999,
    image: "https://picsum.photos/200?random=26",
  },
  {
    id: 27,
    name: "Dumbbell Set",
    category: "Fitness",
    price: 2999,
    image: "https://picsum.photos/200?random=27",
  },
  {
    id: 28,
    name: "Cricket Bat",
    category: "Sports",
    price: 2199,
    image: "https://picsum.photos/200?random=28",
  },
  {
    id: 29,
    name: "Football",
    category: "Sports",
    price: 899,
    image: "https://picsum.photos/200?random=29",
  },
  {
    id: 30,
    name: "Tennis Racket",
    category: "Sports",
    price: 3299,
    image: "https://picsum.photos/200?random=30",
  },
];
  return (
    <div>
      <h1>Hey I am App</h1>
      <div>
        {
          productData.map((elem)=>{
            return <ProductsCard key={elem.id} product={elem}/>
            
            
          })
        }
      </div>
    </div>
  )
}

export default App
