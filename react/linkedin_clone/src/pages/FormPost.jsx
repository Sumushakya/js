import { useState } from "react";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";

const FormPost = () => {
  // const [enteries, setEnteries] = useState([]);
  const [postData, setPostData] = useState({
    name: "",
    headline: "",
    des: "",
  });
  console.log("ss", postData);

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log("input", e.target.name, e.target.value);
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPostData(postData);
    localStorage.setItem("postFormData", JSON.stringify(postData));
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

// FormPage.jsx
// import { useState } from "react";
// import Nav from "../components/Nav/Nav";

// import { useNavigate } from "react-router-dom";

// const FormPage = () => {
//   const [name, setName] = useState("");
//   const [headline, setHeadline] = useState("");
//   const [description, setDescription] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get existing posts from local storage or initialize an empty array
//     const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

//     // Add new post to the array
//     const newPost = { name, headline, description };
//     existingPosts.push(newPost);

//     // Store updated array in local storage
//     localStorage.setItem("posts", JSON.stringify(existingPosts));

//     // Redirect to the display page
//     navigate("/");
//   };

//   return (
//     <div>
//       <Nav />

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Headline:</label>
//           <input
//             type="text"
//             value={headline}
//             onChange={(e) => setHeadline(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormPage;
