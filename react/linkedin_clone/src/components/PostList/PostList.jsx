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

  const [visible, setVisible] = useState(false);

  // const handleClose = () => {
  //   setVisible(false);
  // };

  useEffect(() => {
    const localStoragePostList = JSON.parse(localStorage.getItem("postList"));
    if (localStoragePostList) {
      setPostData(() => localStoragePostList);
    }
  }, []);

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/postform");
  };
  const handleCloseOutsideClick = (e, id) => {
    if (e.target.classList.contains(styles.modal)) {
      setVisible((prevVisible) => ({ ...prevVisible, [id]: false }));
    }
  };

  const handleEdit = (id) => {
    console.log("edit", id, postData);
    {
      postData.find((indvpostList) => indvpostList.id === id);
    }
    // navigate("/postform", { state: { key: id } });

    navigate("/postform", { state: { actionType: "EDIT", id: id } });
  };

  const handleDelete = (id) => {
    console.log("oooooooooooooooo", id, postData);
    const deleteData = postData.filter(
      (indvpostList) => indvpostList.id !== id
    );
    setPostData(deleteData);
  };

  return (
    <div className={styles.container} style={{ flex: 4 }}>
      {postData.length &&
        postData.map((indvpostList) => (
          <div key={indvpostList.id} className={styles.innerbox}>
            <div className={styles.contain}>
              <div>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
                  <img src={person} alt="person" />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <text style={{ fontSize: "16px", fontWeight: 600 }}>
                      {indvpostList.name}
                    </text>
                    <text
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      {indvpostList.headline}
                    </text>
                  </div>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <button
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    setVisible({
                      ...visible,
                      [indvpostList.id]: !visible[indvpostList.id],
                    })
                  }
                >
                  <FaEllipsis />
                </button>
                {visible[indvpostList.id] && (
                  <div
                    key={indvpostList.id}
                    className={styles.modal}
                    onClick={(e) => handleCloseOutsideClick(e, indvpostList.id)}
                    style={{ display: "block" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        className={styles.close}
                        // onClick={() => setVisible(false)}
                        onClick={() =>
                          setVisible((prevVisible) => ({
                            ...prevVisible,
                            [indvpostList.id]: false,
                          }))
                        }
                      >
                        &times;
                      </button>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.modalBtnWrapper}>
                        <button
                          className={styles.btnEdit}
                          onClick={() => handleEdit(indvpostList.id)}
                        >
                          Edit
                        </button>
                      </div>
                      <div className={styles.modalBtnWrapper}>
                        <button
                          className={styles.btnDelete}
                          onClick={() => handleDelete(indvpostList.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <br />
            <div>
              <text>{indvpostList.des}</text>
              <br />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src="https://st.depositphotos.com/1927453/1975/i/380/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg"
                  alt="dummy"
                  style={{
                    width: "inherit",
                    height: "inherit",
                  }}
                />
              </div>
            </div>
            <div>
              <Icon id={indvpostList.id} />
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
