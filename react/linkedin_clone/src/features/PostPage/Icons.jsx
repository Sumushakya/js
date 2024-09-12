/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaPaperPlane, FaRetweet } from "react-icons/fa";
import person2 from "../../assets/person2.png";
import { LikeCommentContext } from "../../context/Icon/LikeCommentContext";
import { Box, Heading, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";

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
      {likes[id] > 0 && <Box> {likes[id]} Likes</Box>}
      <Box className={styles.iconBar}>
        <CustomButton
          variant="ghost"
          onClick={handleLikeClick}
          btnLabel="Like"
          btnLeftIcon={<FaThumbsUp />}
        />
        <CustomButton
          variant="ghost"
          btnLabel="Comment"
          onClick={handleCommentClick}
          btnLeftIcon={<FaComment />}
        />
        <CustomButton
          variant="ghost"
          btnLabel="Repost"
          btnLeftIcon={<FaRetweet />}
        />
        <CustomButton
          variant="ghost"
          btnLabel="Share"
          btnLeftIcon={<FaPaperPlane />}
        />
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
                <CustomButton btnLabel="Submit" type="submit" />
              </Box>
            </form>
            <Box>
              <Heading as="h2" size="sm" mt="10px">
                Comments
              </Heading>
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
