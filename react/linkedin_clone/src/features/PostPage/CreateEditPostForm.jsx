import { useContext, useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import { PostlistContext } from "../../context/PostList/PostlistContext";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { commons } from "../../constants/commons";
import { Box } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";
import { styles } from "./styles";
import axios from "axios";

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

  const ValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    headline: Yup.string().required("Headline is required"),
    des: Yup.string().required("Post description is required"),
  });

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
    const newPost = { id: newId, ...value };
    axios
      .post(`http://localhost:5000/posts`, newPost)
      .then((res) => {
        const updatedPostList = [...postlistDetails, res.data];
        setPostlistDetails(updatedPostList);
        navigate("/");
      })
      .catch((error) => {
        console.log("post is not added", error);
      });
  };

  const handleEditSubmit = (value) => {
    axios
      .put(`http://localhost:5000/posts/${id}`, value)
      .then(() => {
        const updatedPostList = postlistDetails.map((post) =>
          post.id === id ? value : post
        );
        setPostlistDetails(updatedPostList);
        navigate("/");
      })

      .catch((error) => {
        console.log("post is not updated", error);
      });
  };
  const submitActions = {
    CREATE: handleCreateSubmit,
    EDIT: handleEditSubmit,
  };

  return (
    <Box>
      <Nav />
      <Box style={styles.formContainer}>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={ValidationSchema}
          onSubmit={submitActions[actionType]}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit} style={styles.form}>
              <label style={styles.label}>
                Name:
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  style={styles.input}
                />
                <ErrorMessage
                  name="name"
                  component="Box"
                  style={styles.error}
                />
              </label>
              <label style={styles.label}>
                Headline:
                <Field
                  type="text"
                  name="headline"
                  placeholder="Headline"
                  style={styles.input}
                />
                <ErrorMessage
                  name="headline"
                  component="Box"
                  style={styles.error}
                />
              </label>
              <label style={styles.label}>
                Post Description:
                <Field
                  type="text"
                  name="des"
                  placeholder="Description"
                  style={styles.input}
                />
                <ErrorMessage name="des" component="Box" style={styles.error} />
              </label>
              <CustomButton
                type="submit"
                regularBtnStyle={{ bg: "blue", _hover: { bg: "#1264b6" } }}
                isSubmitting={isSubmitting}
                btnLabel={actionType === CREATE ? "Add Post" : "Edit Post"}
                btnSxProps={{ backgroundColor: "blue", color: "white" }}
              />
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
export default FormPost;

// axios
//   .put(`http://localhost:5000/posts/${id}`, value)
//   .then((response) => {
//     if (response.status === 200) {
//       const updatedPostList = postlistDetails.map((post) =>
//         post.id === id ? value : post
//       );
//       setPostlistDetails(updatedPostList);
//       navigate("/");
//     } else {
//       console.error("Failed to update the post. Please try again.");
//     }
//   });
