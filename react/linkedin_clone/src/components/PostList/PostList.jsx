import styles from "./postlist.module.css";
import person from "../../assets/person.png";
import { useState, useEffect } from "react";
// import Post from "../Post/Post";
import { useNavigate } from "react-router-dom";
import Icon from "../IconBar/Icon";
import { FaEllipsis } from "react-icons/fa6";

const PostList = () => {
  const [postData, setPostData] = useState([]);
  console.log("data", postData);

  const [isVisible, setIsVisible] = useState(false);

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

  const handleSave = (id) => {
    console.log("ddd", id, postData);
  };

  const handleDelete = (id) => {
    console.log("oooooooooooooooo", id, postData);
    const del = postData.filter((idvpostList) => idvpostList.id !== id);
    setPostData(del);
    // localStorage.setItem("postList", JSON.stringify(del));
  };

  return (
    <div className={styles.container} style={{ flex: 4 }}>
      {postData.map((idvpostList) => (
        <div key={idvpostList.id} className={styles.innerbox}>
          <div className={styles.contain}>
            <div>
              {console.log("iiiiiiiiiiiiiiiiiiiii", idvpostList)}
              <div
                style={{ display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <img src={person} alt="person" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <text style={{ fontSize: "16px", fontWeight: 600 }}>
                    {idvpostList.name}
                  </text>
                  <text
                    style={{ fontSize: "12px", fontWeight: 500, color: "grey" }}
                  >
                    {idvpostList.headline}
                  </text>
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <button
                onClick={() =>
                  setIsVisible({
                    ...isVisible,
                    [idvpostList.id]: !isVisible[idvpostList.id],
                  })
                }
              >
                <FaEllipsis />
              </button>
              <div
                key={idvpostList.id}
                className={styles.modal}
                style={{
                  display: isVisible[idvpostList.id] ? "block" : "none",
                }}
              >
                <div className={styles.modalContent}>
                  <span
                    className={styles.close}
                    onClick={() => setIsVisible(false)}
                  >
                    &times;
                  </span>

                  <div className={styles.button}>
                    <button
                      style={{ background: "none", border: "none" }}
                      onClick={() => handleSave(idvpostList.id)}
                    >
                      Save
                    </button>
                    <button
                      style={{ background: "none", border: "none" }}
                      onClick={() => handleDelete(idvpostList.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <text>{idvpostList.des}</text>
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
          <div>
            <Icon />
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
