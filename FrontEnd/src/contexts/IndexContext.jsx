import { createContext, useState } from "react";

export const IndexContext = createContext();

const IndexProvider = ({ children }) => {
  const [index, setIndex] = useState();
  const newIndex = (i) => setIndex(i);
  return (
    <IndexContext.Provider value={{ index, newIndex }}>
      {children}
    </IndexContext.Provider>
  );
};
export default IndexProvider;
