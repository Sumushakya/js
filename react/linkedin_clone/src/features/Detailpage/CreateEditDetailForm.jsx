import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import styles from "./detailform.module.css";
import { DetailContext } from "../../context/Detail/DetailContext";
import { FaCircleXmark } from "react-icons/fa6";
import * as Yup from "yup";
import { Field, FieldArray, Formik, ErrorMessage, Form } from "formik";

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
    <div>
      <Nav />
      <div className={styles.formContainer}>
        <Formik
          initialValues={formData}
          enableReinitialize
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, isSubmitting, setFieldValue }) => (
            <Form>
              <h1>Detail Form</h1>
              <br />
              <label>
                Name:
                <Field type="text" placeholder="Name" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </label>
              <br />
              <label>
                Headline
                <Field type="text" placeholder="Headline" name="headline" />
                <ErrorMessage
                  name="headline"
                  component="div"
                  className={styles.error}
                />
              </label>
              <br />
              <label>
                About:
                <Field type="text" placeholder="About" name="about" />
                <ErrorMessage
                  name="about"
                  component="div"
                  className={styles.error}
                />
              </label>
              <br />
              <label>
                Skills:
                <FieldArray
                  name="skill"
                  render={(arrayHelpers) => (
                    <div>
                      <Field
                        type="text"
                        name="newSkill"
                        placeholder="Add a skill"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="skill"
                        component="div"
                        className={styles.error}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (values.newSkill) {
                            arrayHelpers.push(values.newSkill);
                            setFieldValue("newSkill", "");
                          }
                        }}
                        className={styles.addButton}
                      >
                        Add Skill
                      </button>
                      {values.skill.map((indvSkill, index) => (
                        <div key={index} className={styles.skill}>
                          <li>{indvSkill}</li>
                          <FaCircleXmark
                            style={{ cursor: "pointer" }}
                            onClick={() => arrayHelpers.remove(index)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                />
              </label>
              <label>
                Education:
                <FieldArray
                  name="education"
                  render={(arrayHelpers) => (
                    <div>
                      <Field
                        type="text"
                        name="newEducation"
                        placeholder="Add education"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="education"
                        component="div"
                        className={styles.error}
                      />
                      <button
                        type="button"
                        className={styles.addButton}
                        onClick={() => {
                          if (values.newEducation) {
                            arrayHelpers.push(values.newEducation);
                            setFieldValue("newEducation", "");
                          }
                        }}
                      >
                        Add education
                      </button>
                      {values.education.map((indvEducation, index) => (
                        <div key={index} className={styles.skill}>
                          <li>{indvEducation}</li>
                          <FaCircleXmark
                            styles={{ cursor: "pointer" }}
                            onClick={() => arrayHelpers.remove(index)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                />
              </label>
              <div style={{ paddingTop: "10px" }}>
                <button
                  className={styles.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateEditDetailForm;
