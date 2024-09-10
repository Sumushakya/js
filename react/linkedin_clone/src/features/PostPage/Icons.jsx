/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaPaperPlane, FaRetweet } from "react-icons/fa";
import person2 from "../../assets/person2.png";
import { LikeCommentContext } from "../../context/Icon/LikeCommentContext";
import { Box, Button, Text } from "@chakra-ui/react";

const Icons = ({ id }) => {
  const { likes, likePost, comments, addComment } =
    useContext(LikeCommentContext);
  console.log("postid", id);

  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleCommentClick = () => {
    setShowComments(!showComments); //toggle show section
  };

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };
  // useEffect(() => {
  //   const savedComments = JSON.parse(localStorage.getItem("comments")) || {};
  //   const savedLikes = JSON.parse(localStorage.getItem("likes")) || {};
  //   if (savedComments[id]) {
  //     setComments(savedComments);
  //   }
  //   if (savedLikes[id]) {
  //     setLikes(savedLikes);
  //   }
  // }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    addComment(id, newComment);
    setNewComment("");
    // const postComments = comments[id] || [];
    // const updatedComments = {
    //   ...comments,
    //   [id]: [newComment, ...postComments],
    // };
    // setComments(updatedComments);
    // localStorage.setItem("comments", JSON.stringify(updatedComments));
    // setNewComment("");
    // console.log("uc", updatedComments);
  };

  const handleLikeClick = () => {
    // const postLikes = likes[id] || 0;
    // const updatedLikes = { ...likes, [id]: parseInt(postLikes + 1) };
    // setLikes(updatedLikes);
    // localStorage.setItem("likes", JSON.stringify(updatedLikes));
    // console.log("like", updatedLikes);
    likePost(id);
  };

  return (
    <Box className={styles.container}>
      {likes[id] > 0 && <Box>{likes[id]} Likes</Box>}
      <Box className={styles.iconBar}>
        <Button
          border="none"
          background="none"
          // className={styles.iconItem}
          onClick={handleLikeClick}
        >
          <FaThumbsUp />
          <span>Like</span>
        </Button>
        <Button
          border="none"
          background="none"
          // className={styles.iconItem}
          onClick={handleCommentClick}
        >
          <FaComment />
          <span>Comment</span>
        </Button>
        <Button border="none" background="none">
          <FaRetweet />
          <span>Repost</span>
        </Button>
        <Button border="none" background="none">
          <FaPaperPlane />

          <span>Share</span>
        </Button>
      </Box>
      <Box>
        {showComments && (
          <Box className={styles.commentSection}>
            <form onSubmit={handleCommentSubmit} className={styles.form}>
              <Box className={styles.formContainer}>
                <img src={person2} alt="image" width="40px" height="40px" />
                <input
                  className={styles.commentInput}
                  type="text"
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={handleChange}
                />
                <Button className={styles.btnSubmit} type="submit">
                  Submit
                </Button>
              </Box>
            </form>
            <Box>
              <h4>Comments</h4>
              {(comments[id] || []).map((comment, index) => (
                <Box className={styles.commentBox} key={index}>
                  <Text key={index}>{comment}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Icons;
