import { useState } from "react";
import { PostlistContext } from "./PostlistContext";

// eslint-disable-next-line react/prop-types
export const PostlistProvider = ({ children }) => {
  const [postlistDetails, setPostlistDetails] = useState([
    // {
    //   name: "",
    //   headline: "",
    //   des: "",
    //   image: "",
    // },
  ]);
  const [postId, setPostId] = useState(1);

  const addPost = (newPostData) => {
    const updatedPostList = [
      { id: postId, ...newPostData },
      ...postlistDetails,
    ];
    setPostlistDetails(updatedPostList);
    setPostId((prevId) => prevId + 1);
  };

  const editPost = (id, updatedData) => {
    const updatedPostList = postlistDetails.map((post) =>
      post.id === id ? { ...post, ...updatedData } : post
    );
    setPostlistDetails(updatedPostList);
  };

  return (
    <PostlistContext.Provider
      value={{ postlistDetails, setPostlistDetails, addPost, editPost }}
    >
      {children}
    </PostlistContext.Provider>
  );
};
