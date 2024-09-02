import { LikeCommentContext } from "./LikeCommentContext";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const LikeCommentProvider = ({ children }) => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    const storedLikes = localStorage.getItem("likes");
    const storedComments = localStorage.getItem("comments");

    if (!!storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }

    if (!!storedComments) {
      setLikes(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

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
