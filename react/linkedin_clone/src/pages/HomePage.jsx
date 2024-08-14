import Nav from "../components/Nav/Nav";
import Detail from "../components/Detail/Detail";
import PostList from "../components/PostList/PostList";
// import Post from "..components/Post/Post";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div
        style={{
          display: "flex",
          gap: "12px",
          padding: "12px",
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
