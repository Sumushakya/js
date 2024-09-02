import { useContext, useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./postlistform.module.css";
import { PostlistContext } from "../../context/PostList/PostlistContext";

const FormPost = () => {
  const [postData, setPostData] = useState({
    // id: null,
    name: "",
    headline: "",
    des: "",
    image: "",
  });
  const { postlistDetails, setPostlistDetails } = useContext(PostlistContext);
  console.log("ss", postlistDetails);

  const navigate = useNavigate();

  const location = useLocation();

  const { id, actionType } = location.state || {
    id: null,
    actionType: "CREATE",
  };

  useEffect(() => {
    if (actionType === "EDIT" && id) {
      // const postList = JSON.parse(localStorage.getItem("postList"));
      const editPost = postlistDetails.find((post) => post.id === id);
      if (editPost) {
        setPostData(editPost);
      }
    }
  }, [id, actionType, postlistDetails]);

  const handleInput = (e) => {
    console.log("input", e.target.name, e.target.value);
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const getNextId = () => {
    const storedId = localStorage.getItem("nextId");
    if (storedId) {
      const nextId = parseInt(storedId, 10) + 1;
      localStorage.setItem("nextId", nextId);
      return nextId;
    } else {
      localStorage.setItem("nextId", "1");
      return 1;
    }
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    // const newId = getNextId();
    // const newPost = { ...postData, id: newId };
    // const updatedPostList = [newPost, ...postlistDetails];
    // setPostlistDetails(updatedPostList);
    // localStorage.setItem("nextId", newId + 1);
    // navigate("/");
    e.preventDefault();
    const newId = getNextId();
    const newPost = { ...postData, id: newId };
    const updatedPostList = [newPost, ...postlistDetails];
    setPostlistDetails(updatedPostList);
    navigate("/");
    // e.preventDefault();
    // const newId = postlistDetails.length > 0 ? postlistDetails[0].id + 1 : 1; // Generate new ID
    // const newPost = { ...postData, id: newId };
    // setPostlistDetails([newPost, ...postlistDetails]);
    // // setPostlistDetails([postData, ...postlistDetails]);
    // navigate("/");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // const restPostList = postlistDetails.filter(
    //   (post) => post.id === postData.id
    // );
    // setPostlistDetails([...restPostList, postData]);
    const updatedPostList = postlistDetails.map((post) =>
      post.id === id ? postData : post
    );
    setPostlistDetails(updatedPostList);
    navigate("/");
  };

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
          {/* <label>
            Image:
            <input
              type="file"
              // accept="image/*"
              name="image"
              value={postData.image}
              onChange={handleImageChange}
            />
          </label> */}
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
