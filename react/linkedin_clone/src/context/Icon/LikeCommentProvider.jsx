import { LikeCommentContext } from "./LikeCommentContext";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const LikeCommentProvider = ({ children }) => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  const likePost = (id) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const addComment = (id, comment) => {
    setComments((prev) => ({ ...prev, [id]: [comment, ...(prev[id] || [])] }));
  };
  return (
    <LikeCommentContext.Provider
      value={{ likes, setLikes, comments, setComments, likePost, addComment }}
    >
      {children}
    </LikeCommentContext.Provider>
  );
};

// const addComment = (id, comment) => {
//   setComments((prev) => ({
//     ...prev,
//     [id]: [comment, ...(prev[id] || [])],
//   }));
// };

// const likePost = (id) => {
//   setLikes((prev) => ({
//     ...prev,
//     [id]: (prev[id] || 0) + 1,
//   }));
// };
