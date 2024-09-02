import { useEffect, useState } from "react";
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
  console.log("uddddd", userDetails);

  useEffect(() => {
    if (userDetails.length) {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
  }, [userDetails]);

  useEffect(() => {
    const savedUserDetails = localStorage.getItem("userDetails");
    if (!!savedUserDetails) {
      setUserDetails(JSON.parse(savedUserDetails));
    }
  }, []);

  return (
    <DetailContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </DetailContext.Provider>
  );
};
