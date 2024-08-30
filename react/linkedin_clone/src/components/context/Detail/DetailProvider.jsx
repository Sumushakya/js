import { useState } from "react";
import { DetailContext } from "./DetailContext";

// eslint-disable-next-line react/prop-types
export const DetailProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    headline: "",
    about: "",
    skill: [],
    education: [],
  });
  return (
    <DetailContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </DetailContext.Provider>
  );
};
