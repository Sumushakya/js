/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaPaperPlane, FaRetweet } from "react-icons/fa";
import person2 from "../../assets/person2.png";
import { LikeCommentContext } from "../../context/Icon/LikeCommentContext";
import { Box, Heading, Input, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";
import { FaXmark } from "react-icons/fa6";

const Icons = ({ id }) => {
  const { likes, likePost, comments, addComment } =
    useContext(LikeCommentContext);
  console.log("postid", id);

  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCommentClick = () => {
    setShowComments(!showComments);
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
  const handleRepostClick = () => {
    setIsModalOpen(true);
    console.log("open modal");
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          onClick={handleRepostClick}
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
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        size="lg"
        isCentered={true}
        title="Do you want to repost?"
        bodyContent={
          <>
            <Input placeholder="Start Writing..." type="text" />
          </>
        }
        footerButtons={
          <>
            <CustomButton
              btnLabel="Repost"
              btnLeftIcon={<FaRetweet />}
              regularBtnStyle={{
                bg: "blue",
                color: "white",
                _hover: { bg: "#1264b6" },
                mr: "10px",
              }}
            />

            <CustomButton
              btnLabel="Close"
              btnLeftIcon={<FaXmark />}
              regularBtnStyle={{
                bg: "red",
                color: "white",
                _hover: { bg: "tomato" },
              }}
              onClick={handleCloseModal}
            />
          </>
        }
      />
    </Box>
  );
};

export default Icons;
