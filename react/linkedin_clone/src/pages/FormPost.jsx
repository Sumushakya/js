import { useContext, useState } from "react";
import Nav from "../components/Nav/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./form.module.css";
import { useEffect } from "react";
import { PostlistContext } from "../components/context/PostList/PostlistContext";

const FormPost = () => {
  const [postData, setPostData] = useState({
    name: "",
    headline: "",
    des: "",
    image: "",
  });
  const { postlistDetails, addPost, editPost } = useContext(PostlistContext);
  console.log("ss", postData);

  const navigate = useNavigate();

  const location = useLocation();

  const { id, actionType } = location.state || {
    id: null,
    actionType: "CREATE",
  };

  useEffect(() => {
    if (actionType === "EDIT") {
      const editPost = postlistDetails.find((post) => post.id === id);
      setPostData(editPost);
    }
  }, []);

  const handleInput = (e) => {
    console.log("input", e.target.name, e.target.value);
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    // const postId = localStorage.getItem("postId") || 0;
    // const newPostId = parseInt(postId) + 1;
    // localStorage.setItem("postId", newPostId);
    // const newPostData = { id: newPostId, ...postData };
    // const postList = JSON.parse(localStorage.getItem("postList")) || [];
    // const updatedPostList = [newPostData, ...postList];
    // localStorage.setItem("postList", JSON.stringify(updatedPostList));
    addPost(postData);
    navigate("/");
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // const postList = JSON.parse(localStorage.getItem("postList"));
    // const updatedPostList = postList.map((post) =>
    //   post.id === id ? { ...post, ...postData } : post
    // );
    // localStorage.setItem("postList", JSON.stringify(updatedPostList));
    editPost(id, postData);
    navigate("/");
  };

  const handleImageChange = () => {};

  return (
    <div>
      <Nav />
      <div className={styles.formContainer}>
        <form
          onSubmit={
            actionType === "CREATE" ? handleCreateSubmit : handleEditSubmit
          }
        >
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
            {actionType === "CREATE" ? "Add Post" : "Edit Post"}
            {/* Submit */}
          </button>
        </form>
      </div>
    </div>
  );
};
export default FormPost;

//comment out
// useEffect(() => {
//   const storedId = localStorage.getItem("currentId");
//   if (storedId) {
//     setPostData((prevData) => ({ ...prevData, id: storedId }));
//   } else {
//     localStorage.setItem("currentId", "0");
//     setPostData((prevData) => ({ ...prevData, id: "1" }));
//   }
// }, []);

// const handleSubmit = (e) => {
// e.preventDefault();
//   localStorage.setItem('id', id);
//   // Store the form data in local storage
//   localStorage.setItem('formData', JSON.stringify(formData));
//   // Increment the ID for the next submission
//   setId(id + 1);
// // };
// const newId = parseInt(localStorage.getItem("currentId"), 10);

// const updatedPostData = { ...postData, id: newId + 1 };
// const temp = JSON.parse(localStorage.getItem("postList")) || [];
// localStorage.setItem(
//   "postList",
//   JSON.stringify([updatedPostData, ...temp])
// );
// localStorage.setItem("currentId", newId + 1);
// navigate("/");
// console.log("submit", postData);

// const updatedPostList = postList.map((post) => {
//   if (post.id === id) {
//     return { ...postData };
//   }
//   return post;
// });
// localStorage.setItem("postList", JSON.stringify(updatedPostList));
// navigate("/");

// const [actionType, setActionType] = useState("CREATE");

//handleSubmit
// const handleEditSubmit = (e) => {
//   e.preventDefault();
//   // const postList = JSON.parse(localStorage.getItem("postList"));
//   // const updatedPost = postList.map((post) => {});
//   // localStorage.setItem("postList", JSON.stringify(updatedPost));
//   navigate("/");

// console.log("update", id, updatedPost);

// const handleImageChange = (e) => {};

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const postId = localStorage.getItem("postId") || 0;
//   const newPostId = parseInt(postId) + 1;
//   localStorage.setItem("postId", newPostId);
//   const newPostData = { id: newPostId, ...postData };
//   const postList = JSON.parse(localStorage.getItem("postList")) || [];
//   const updatedPostList = [newPostData, ...postList];
//   localStorage.setItem("postList", JSON.stringify(updatedPostList));
//   navigate("/");
// };

// let id = null;
// if (location.state) {
//   id = location.state.key;
//   setActionType("EDIT");
// }
