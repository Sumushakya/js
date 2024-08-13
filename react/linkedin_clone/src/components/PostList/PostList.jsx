import styles from "./postlist.module.css";
import person from "../../assets/person.png";
import { useState, useEffect } from "react";
// import Post from "../Post/Post";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [postData, setPostData] = useState([
    {
      name: "su",
      headline: "dhgd",
      des: "kdj",
    },
    {
      name: "dd",
      headline: "dd",
      des: "dd",
    },
  ]);
  console.log("data", postData);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("postFormData"));
    console.log("s", savedData);
    if (savedData) {
      setPostData((prev) => [...prev, savedData]);
    }
  }, []);

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/postform");
  };
  // const a = [
  //   { name: "ram", age: 20 },
  //   { name: "shyam", age: 14 },
  // ];

  return (
    <div className={styles.container}>
      {/* {a.map((x) => (
        <>
          <p style={{ color: "red" }}>{x.name}</p>
          <p style={{ color: "red" }}>{x.age}</p>
        </>
      ))} */}

      <h1 className={styles.heading}>PostList</h1>
      {postData.map((postData) => (
        <div key={postData.id} className={styles.innerbox}>
          <img src={person} alt="person" />
          <div className={styles.details}>
            <p>Name:{postData.name}</p>
            <p>Headline:{postData.headline}</p>
            <p>Post Description:{postData.des}</p>
          </div>
          <button className={styles.like}>Like</button>
          <button className={styles.comment}>Comment</button>
        </div>
      ))}
      <div>
        <button className={styles.btn} onClick={handleAdd}>
          Add post
        </button>
      </div>
    </div>
  );
};

export default PostList;
