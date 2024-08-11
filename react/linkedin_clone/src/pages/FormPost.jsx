import { useState } from "react";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";

const FormPost = () => {
  const [postData, setPostData] = useState({
    name: "",
    headline: "",
    des: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log("input", e.target.name, e.target.value);
    setPostData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(postData));
    navigate("/");
    console.log("submit", postData);
  };

  return (
    <div>
      <Nav />
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
        {/* <label>
          Image:
          <input type="file" name="image" placeholder="Image" onChange={handleInput}/>
        </label> */}
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPost;
