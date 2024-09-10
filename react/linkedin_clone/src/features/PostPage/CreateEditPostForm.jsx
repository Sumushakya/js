import { useContext, useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./postlistform.module.css";
import { PostlistContext } from "../../context/PostList/PostlistContext";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { commons } from "../../constants/commons";
import { Box } from "@chakra-ui/react";

const { CREATE } = commons;

const FormPost = () => {
  const [initialValues, setInitialValues] = useState({
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
    <Box>
      <Nav />
      <Box className={styles.formContainer}>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={ValidationSchema}
          onSubmit={submitActions[actionType]}
        >
          {({ isSubmitting, isValid, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <label>
                Name:
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage
                  name="name"
                  component="Box"
                  className={styles.error}
                />
              </label>
              <label>
                Headline:
                <Field type="text" name="headline" placeholder="Headline" />
                <ErrorMessage
                  name="headline"
                  component="Box"
                  className={styles.error}
                />
              </label>
              <label>
                Post Description:
                <Field type="text" name="des" placeholder="Description" />
                <ErrorMessage
                  name="des"
                  component="Box"
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
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
export default FormPost;
