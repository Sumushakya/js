/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
// import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaPaperPlane, FaRetweet } from "react-icons/fa";
import person2 from "../../assets/person2.png";
import { LikeCommentContext } from "../../context/Icon/LikeCommentContext";
import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";
import { FaXmark } from "react-icons/fa6";
import { styles } from "./styles";
import axios from "axios";

const Icons = ({ id }) => {
  const { likes, comments, addComment, likePost } =
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
    // const updatedLikes = (likes[id] || 0) + 1;
    // likePost(id);
    // const currentLikes = likes[id] || 0;
    // const updatedLikes = currentLikes + 1;
  };

  const handleRepostClick = () => {
    setIsModalOpen(true);
    console.log("open modal");
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // useEffect(() => {
  //   // const article = { title: "tdghhd" };
  //   axios
  //     .put(`http://localhost:5000/posts/${id}`, { likes: updatedLikes })
  //     .then((res) => {
  //       console.log("Like updated:", res.data);
  //       likePost(id);
  //     });
  // }, []);

  return (
    <Box>
      <Flex direction="column">
        {likes[id] > 0 && <Box> {likes[id]} Likes</Box>}
        <Box style={styles.iconBar}>
          <Flex align="center" justify="space-around">
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
          </Flex>
        </Box>
        <Box>
          {showComments && (
            <Box>
              <form onSubmit={handleCommentSubmit} style={styles.commentForm}>
                <Box style={styles.formContainer}>
                  <Flex justify="space-between" gap={4}>
                    <img src={person2} alt="image" width="40px" height="40px" />
                    <Input
                      type="text"
                      size="md"
                      placeholder="Add a comment"
                      value={newComment}
                      onChange={handleChange}
                    />
                    <CustomButton btnLabel="Submit" type="submit" />
                  </Flex>
                </Box>
              </form>
              <Box>
                <Heading as="h2" size="sm" mt="10px" ml="10px">
                  Comments
                </Heading>
                {(comments[id] || []).map((comment, index) => (
                  <Box style={styles.commentBox} key={index}>
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
      </Flex>
    </Box>
  );
};

export default Icons;
