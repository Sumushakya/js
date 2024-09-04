import { useContext, useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./postlistform.module.css";
import { PostlistContext } from "../../context/PostList/PostlistContext";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";
import { commons } from "../../constants/commons";

const { CREATE } = commons;

const FormPost = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    headline: "",
    des: "",
    image: "",
  });
  // const [initialValues, setInitialValues] = useState({
  //   name: "",
  //   headline: "",
  //   des: "",
  //   // image: "",
  // });

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
        setInitialValues(editPost);
      }
    }
  }, [id, actionType, postlistDetails]);
  // console.log("editdataaaaa", initialValues);

  const ValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    headline: Yup.string().required("Headline is required"),
    des: Yup.string().required("Post description is required"),
  });

  // const initialValues = {
  //   name: "",
  //   headline: "",
  //   des: "",
  // };

  // const handleInput = (e) => {
  //   console.log("input", e.target.name, e.target.value);
  //   setPostData({ ...postData, [e.target.name]: e.target.value });
  // };

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

  const handleCreateSubmit = (value) => {
    // e.preventDefault();
    const newId = getNextId();
    const newPost = { ...value, id: newId };
    const updatedPostList = [newPost, ...postlistDetails];
    setPostlistDetails(updatedPostList);
    navigate("/");
  };
  const handleEditSubmit = (value) => {
    const updatedPostList = postlistDetails.map((post) =>
      post.id === id ? value : post
    );
    setPostlistDetails(updatedPostList);
    navigate("/");
  };

  const submitActions = {
    CREATE: handleCreateSubmit,
    EDIT: handleEditSubmit,
  };

  return (
    <div>
      <Nav />
      <div className={styles.formContainer}>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={ValidationSchema}
          onSubmit={submitActions[actionType]}
        >
          {({ isSubmitting, isValid, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <Field
                  type="text"
                  name="name"
                  // value={initialValues.name}
                  placeholder="Name"
                  // onChange={handleInput}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </label>
              <label>
                Headline:
                <Field
                  type="text"
                  name="headline"
                  // value={initialValues.headline}
                  placeholder="Headline"
                  // onChange={handleInput}
                />
                <ErrorMessage
                  name="headline"
                  component="div"
                  className={styles.error}
                />
              </label>
              <label>
                Post Description:
                <Field
                  type="text"
                  name="des"
                  // value={initialValues.des}
                  placeholder="Description"
                  // onChange={handleInput}
                />
                <ErrorMessage
                  name="des"
                  component="div"
                  className={styles.error}
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
          </label>  */}

              <button
                className={styles.button}
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                {actionType === CREATE ? "Add Post" : "Edit Post"}
                {/* Submit */}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default FormPost;
