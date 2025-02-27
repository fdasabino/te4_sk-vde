import { createContext, useState } from "react";

export const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  return <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>;
};

export default CountProvider;
