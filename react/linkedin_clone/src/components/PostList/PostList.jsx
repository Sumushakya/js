import styles from "./postlist.module.css";
import person from "../../assets/person.png";
import { useState, useEffect } from "react";
// import Post from "../Post/Post";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [postData, setPostData] = useState([]);
  console.log("data", postData);

  useEffect(() => {
    const localStoragePostList = JSON.parse(localStorage.getItem("postList"));
    if (localStoragePostList) {
      setPostData((prev) => localStoragePostList);
    }
  }, []);

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/postform");
  };

  return (
    <div className={styles.container} style={{ flex: 4 }}>
      {postData.map((postList) => (
        <div key={postList.id} className={styles.innerbox}>
          <div className={styles.contain}>
            <img src={person} alt="person" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ fontSize: "18px", fontWeight: 800 }}>
                {postList.name}
              </text>
              <text style={{ fontSize: "12px", fontWeight: 500 }}>
                {postList.headline}
              </text>
            </div>
          </div>
          <div>
            <text>Post Description:{postList.des}</text>
            <p>Image:{postList.image}</p>
          </div>
          <hr />
          <div
            className={styles.actionButton}
            // style={{ display: "flex", gap: "8px" }}
          >
            <button className={styles.like}>Like</button>
            <button>Comment</button>
            <button>Share</button>
            {/* <button>Repost</button> */}
          </div>
        </div>
      ))}
      <br />
      <br />
      <div>
        <button className={styles.btn} onClick={handleAdd}>
          Add post
        </button>
      </div>
    </div>
  );
};

export default PostList;
