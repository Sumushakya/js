import { useEffect, useState } from "react";
import { PostlistContext } from "./PostlistContext";

// eslint-disable-next-line react/prop-types
export const PostlistProvider = ({ children }) => {
  const [postlistDetails, setPostlistDetails] = useState([]);

  console.log("post", postlistDetails);
  useEffect(() => {
    if (postlistDetails.length) {
      localStorage.setItem("postlistDetails", JSON.stringify(postlistDetails));
    }
  }, [postlistDetails]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("postlistDetails");
    console.log("save", JSON.parse(savedPosts));
    if (savedPosts) {
      setPostlistDetails(JSON.parse(savedPosts));
    }
  }, []);

  return (
    <PostlistContext.Provider value={{ postlistDetails, setPostlistDetails }}>
      {children}
    </PostlistContext.Provider>
  );
};
