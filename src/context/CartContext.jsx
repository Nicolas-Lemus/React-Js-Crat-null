import React, { useState, createContext } from 'react';

export const CardContext = createContext();

export const CartProvider = ({ children }) => {
  //cambie de [] a {} y ahora me aparece la pagina de productos e demas 21:33hs.
  const {count, setCount} = useState({ qtyItems: 0, Tecnologia: []});

  return (
    <CardContext.Provider value={{count, setCount}}>
      {children}
    </CardContext.Provider>
  );
};
