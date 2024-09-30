import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
// import styles from "./detailform.module.css";
import { DetailContext } from "../../context/Detail/DetailContext";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";
import * as Yup from "yup";
import { Field, FieldArray, Formik, ErrorMessage, Form } from "formik";
import { Box, Heading } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";
import { styles } from "./styles";

const CreateEditDetailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    headline: "",
    about: "",
    skill: [],
    education: [],
  });
  console.log("detailformdata", formData);

  const { userDetails, setUserDetails } = useContext(DetailContext);

  useEffect(() => {
    if (userDetails) {
      setFormData(userDetails);
    }
  }, [userDetails]);

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setUserDetails(values);
    navigate("/");
  };

  const ValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    headline: Yup.string().required("Headline is required"),
    about: Yup.string().required("About is required"),
    skill: Yup.array()
      .of(Yup.string().required("Skill is required"))
      .min(1, "atleast 1 skill is required"),
    education: Yup.array()
      .of(Yup.string().required("Education is required"))
      .min(1, "atleast 1 education is required"),
  });

  return (
    <Box>
      <Nav />
      <Box style={styles.formContainer}>
        <Formik
          initialValues={formData}
          enableReinitialize
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, isSubmitting, setFieldValue }) => (
            <Form>
              <Heading as="h6" size="md" margin="auto">
                Detail Form
              </Heading>
              <br />
              <label>
                Name:
                <Field type="text" placeholder="Name" name="name" />
                <ErrorMessage
                  name="name"
                  component="Box"
                  style={styles.error}
                />
              </label>
              <br />
              <label>
                Headline
                <Field type="text" placeholder="Headline" name="headline" />
                <ErrorMessage
                  name="headline"
                  component="Box"
                  style={styles.error}
                />
              </label>
              <br />
              <label>
                About:
                <Field type="text" placeholder="About" name="about" />
                <ErrorMessage
                  name="about"
                  component="Box"
                  style={styles.error}
                />
              </label>
              <br />
              <label>
                Skills:
                <FieldArray
                  name="skill"
                  render={(arrayHelpers) => (
                    <Box>
                      <Field
                        type="text"
                        name="newSkill"
                        placeholder="Add a skill"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="skill"
                        component="Box"
                        style={styles.error}
                      />

                      <CustomButton
                        btnLabel="Add Skills"
                        btnRightIcon={<FaCirclePlus />}
                        regularBtnStyle={{
                          bg: "blue",
                          _hover: { bg: "#1264b6" },
                        }}
                        btnSxProps={{
                          color: "white",
                          mt: "8px",
                        }}
                        onClick={() => {
                          if (values.newSkill) {
                            arrayHelpers.push(values.newSkill);
                            setFieldValue("newSkill", "");
                          }
                        }}
                      />
                      {values.skill.map((indvSkill, index) => (
                        <Box key={index} style={styles.skill}>
                          <li>{indvSkill}</li>
                          <FaCircleXmark
                            style={{ cursor: "pointer" }}
                            onClick={() => arrayHelpers.remove(index)}
                          />
                        </Box>
                      ))}
                    </Box>
                  )}
                />
              </label>
              <br />
              <label>
                Education:
                <FieldArray
                  name="education"
                  render={(arrayHelpers) => (
                    <Box>
                      <Field
                        type="text"
                        name="newEducation"
                        placeholder="Add education"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="education"
                        component="Box"
                        style={styles.error}
                      />

                      <CustomButton
                        enableHover={true}
                        btnLabel="Add Education"
                        btnRightIcon={<FaCirclePlus />}
                        // tooltipLabel="Remove"
                        regularBtnStyle={{
                          bg: "blue",
                          _hover: { bg: "#1264b6" },
                        }}
                        btnSxProps={{
                          color: "white",
                          mt: "8px",
                        }}
                        onClick={() => {
                          if (values.newEducation) {
                            arrayHelpers.push(values.newEducation);
                            setFieldValue("newEducation", "");
                          }
                        }}
                      />
                      {values.education.map((indvEducation, index) => (
                        <Box key={index} style={styles.skill}>
                          <li>{indvEducation}</li>
                          <FaCircleXmark
                            style={{ cursor: "pointer" }}
                            onClick={() => arrayHelpers.remove(index)}
                          />
                        </Box>
                      ))}
                      {console.log("valueseducation", values.education)}
                    </Box>
                  )}
                />
              </label>
              <Box pt="10px">
                <CustomButton
                  type="submit"
                  isSubmitting={isSubmitting}
                  btnLabel="Submit"
                  regularBtnStyle={{
                    bg: "blue",
                    color: "white",
                    _hover: { bg: "#1264b6" },
                  }}
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateEditDetailForm;
