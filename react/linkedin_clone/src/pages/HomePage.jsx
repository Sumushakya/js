import Nav from "../components/Nav/Nav";
import Detail from "../components/Detail/Detail";
import PostList from "../components/PostList/PostList";
// import Modal from "../components/Modal/modal";
// import Post from "..components/Post/Post";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div
        style={{
          display: "flex",
          gap: "25px",
          padding: "20px",
        }}
      >
        <Detail />
        <PostList />
      </div>
      {/* <Post /> */}
    </>
  );
};

export default HomePage;
