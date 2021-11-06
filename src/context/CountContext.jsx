import React, { createContext, useState } from "react";

export const CountContext = createContext(0);

export const CountProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <CountContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};
