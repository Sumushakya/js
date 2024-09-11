import { Box } from "@chakra-ui/react";
import Nav from "../../components/Nav";
import Detail from "../Detailpage/Detail";
import PostList from "../PostPage/ListPostPage";
// import Modal from "../components/Modal/modal";
// import Post from "..components/Post/Post";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Box
        style={{
          display: "flex",
          gap: "30px",
          padding: "20px",
        }}
      >
        <Detail />
        <PostList />
      </Box>
    </>
  );
};

export default HomePage;
