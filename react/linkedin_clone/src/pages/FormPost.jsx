import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";

const FormPost = () => {
  const [postData, setPostData] = useState({
    id: "",
    name: "",
    headline: "",
    des: "",
    image: "",
  });
  console.log("ss", postData);

  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem("currentId");
    if (storedId) {
      setPostData((prevData) => ({ ...prevData, id: storedId }));
    } else {
      localStorage.setItem("currentId", "1");
      setPostData((prevData) => ({ ...prevData, id: "1" }));
    }
  }, []);

  const handleInput = (e) => {
    console.log("input", e.target.name, e.target.value);
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = (
      parseInt(localStorage.getItem("currentId"), 10) + 1
    ).toString();
    localStorage.setItem("currentId", newId);
    const updatedPostData = { ...postData, id: newId };

    // const newId = (
    //   parseInt(localStorage.getItem("currentId"), 10) + 1
    // ).toString();
    // localStorage.setItem("currentId", newId);;
    // const updatedPostData = { ...postData, id: newId };

    const temp = JSON.parse(localStorage.getItem("postList")) || [];

    localStorage.setItem(
      "postList",
      JSON.stringify([updatedPostData, ...temp])
    );
    navigate("/");
    console.log("submit", postData);
  };
  const handleImageChange = (e) => {};

  return (
    <div>
      <Nav />
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={postData.name}
              placeholder="Name"
              onChange={handleInput}
            />
          </label>
          <label>
            Headline:
            <input
              type="text"
              name="headline"
              value={postData.headline}
              placeholder="Headline"
              onChange={handleInput}
            />
          </label>
          <label>
            Post Description:
            <input
              type="text"
              name="des"
              value={postData.des}
              placeholder="Description"
              onChange={handleInput}
            />
          </label>
          <label>
            Image:
            <input
              type="file"
              // accept="image/*"
              name="image"
              value={postData.image}
              onChange={handleImageChange}
            />
          </label>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default FormPost;
