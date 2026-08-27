import { createContext, useState } from "react";

export const MyStory = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStory.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems }}
    >
      {children}
    </MyStory.Provider>
  );
};
