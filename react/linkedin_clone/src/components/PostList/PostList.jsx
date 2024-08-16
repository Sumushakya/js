import styles from "./postlist.module.css";
import person from "../../assets/person.png";
import { useState, useEffect } from "react";
// import Post from "../Post/Post";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [postData, setPostData] = useState([]);
  console.log("data", postData);

  const [openModal, setOpenModal] = useState(false);

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
  const handleClick = () => {
    alert("clicked");
  };

  return (
    <div className={styles.container} style={{ flex: 4 }}>
      {postData.map((postList) => (
        <div key={postList.id} className={styles.innerbox}>
          <div className={styles.contain}>
            <div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <img src={person} alt="person" />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <text style={{ fontSize: "18px", fontWeight: 800 }}>
                    {postList.name}
                  </text>
                  <text
                    style={{ fontSize: "12px", fontWeight: 500, color: "grey" }}
                  >
                    {postList.headline}
                  </text>
                </div>
              </div>
            </div>
            <div>
              <button
                style={{
                  padding: "2px 4px",
                  cursor: "pointer",
                  // backgroundColor: "white",
                  // color: "black",
                  // borderStyle: "none",
                }}
                onClick={handleClick}
              >
                menu
              </button>
              {/* <button
                style={{
                  padding: "2px 4px",
                  backgroundColor: "white",
                  borderStyle: "none",
                }}
                onClick={handleClick}
              >
                ❌
              </button> */}
            </div>
          </div>

          <br />
          <div>
            <text>{postList.des}</text>
            <br />
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src="https://media.licdn.com/dms/image/sync/v2/D5610AQHE2Iekrl59Ug/image-shrink_800/image-shrink_800/0/1718625253794/LoL-SC-AdOptimization-JobAlerts-Textpng?e=1724306400&v=beta&t=jfSv4-RNYwNGroG_eh0R5YjcnQp1ULg7V717BTCOnsM"
                alt="dummy"
                style={{
                  width: "inherit",
                  height: "inherit",
                }}
              />
            </div>
          </div>
          <hr />
          <div className={styles.actionButton}>
            <button
              style={{
                padding: "8px 12px",
                color: "black",
                borderStyle: "none",
                fontSize: "16px",
              }}
            >
              Like
            </button>
            <button style={{ padding: "8px 12px", border: "none" }}>
              Comment
            </button>
            <text
              // style={{ padding: "8px 12px", borderStyle: "none" }}
              className={styles.share}
            >
              Share
            </text>
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
