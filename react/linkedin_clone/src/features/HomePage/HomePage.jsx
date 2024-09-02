import Nav from "../../components/Nav/Nav";
import Detail from "../Detailpage/Detail";
import PostList from "../PostPage/ListPostPage";
// import Modal from "../components/Modal/modal";
// import Post from "..components/Post/Post";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div
        style={{
          display: "flex",
          gap: "30px",
          padding: "20px",
        }}
      >
        <Detail />
        <PostList />
      </div>
    </>
  );
};

export default HomePage;
