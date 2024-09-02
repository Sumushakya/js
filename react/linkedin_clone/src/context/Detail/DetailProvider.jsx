import { useEffect, useState } from "react";
import { DetailContext } from "./DetailContext";

// eslint-disable-next-line react/prop-types
export const DetailProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    if (userDetails) {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
  }, [userDetails]);

  useEffect(() => {
    const savedUser = localStorage.getItem("userDetails");
    if (savedUser) {
      setUserDetails(JSON.parse(savedUser));
    }
  }, []);

  return (
    <DetailContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </DetailContext.Provider>
  );
};
