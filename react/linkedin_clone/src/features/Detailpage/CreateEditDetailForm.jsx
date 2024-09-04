import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import styles from "./detailform.module.css";
import { DetailContext } from "../../context/Detail/DetailContext";
import { FaCircleXmark } from "react-icons/fa6";
import * as Yup from "yup";
import { Field, FieldArray, Formik, ErrorMessage } from "formik";

const Form = () => {
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
  }, []);

  // const [tempSkill, setTempSkill] = useState("");
  // console.log("skilssss", tempSkill);

  // const [tempEducation, setTempEducation] = useState("");
  // const [skillMessage, setSkillMessage] = useState("");
  // const [educationMessage, setEducationMessage] = useState("");

  const navigate = useNavigate();

  // const handleInput = (e) => {
  //   console.log("input", e.target.name, e.target.value);
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleInputSkill = (e) => {
  //   setTempSkill(e.target.value);
  // };

  // const handleAddSkill = () => {
  //   setFormData((prev) => ({ ...prev, skill: [...prev.skill, tempSkill] }));
  //   setSkillMessage("Skill Added!");
  //   setTempSkill("");
  //   setTimeout(() => {
  //     setSkillMessage("");
  //   }, 10000);
  // };

  // const handleInputEducation = (e) => {
  //   setTempEducation(e.target.value);
  //   console.log("education", tempEducation);
  // };

  // const handleAddEducation = () => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     education: [...prev.education, tempEducation],
  //   }));
  //   setEducationMessage(" Education Added!");
  //   setTimeout(() => {
  //     setEducationMessage("");
  //   }, 10000);
  //   setTempEducation("");
  // };

  const handleSubmit = (values) => {
    // e.preventDefault();
    // localStorage.setItem("userData", JSON.stringify(formData));
    setUserDetails(values);
    navigate("/");
    // console.log("submit", formData);
  };

  // const handleDeleteSkill = (index) => {
  //   const updatedSkill = formData.skill.filter((_, it) => it !== index);
  //   setFormData((prev) => ({ ...prev, skill: updatedSkill }));
  // };

  // const handleDeleteEducation = (index) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     education: prev.education.filter((education, i) => i !== index),
  //   }));
  // };

  const ValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    headline: Yup.string().required("Headline is required"),
    about: Yup.string().required("About is required"),
    skill: Yup.array()
      .of(Yup.string().required("Skill is required"))
      .min(1, "atleast 1 skill is required"),
    education: Yup.array()
      .of(Yup.string().required("Education is required"))
      .min(1, "atleast 1 skill is required"),
  });

  return (
    <div>
      <Nav />
      <div className={styles.formContainer}>
        <Formik
          initialValues={formData}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <form>
              <h1>Detail Form</h1>
              <br />
              <label>
                Name:
                <Field
                  type="text"
                  placeholder="Name"
                  name="name"
                  // value={formData.name}
                  // onChange={handleInput}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </label>
              <br />
              <label>
                Headline
                <Field
                  type="text"
                  placeholder="Headline"
                  name="headline"
                  // value={formData.headline}
                  // onChange={handleInput}
                />
              </label>
              <br />
              <label>
                About:
                <Field
                  type="text"
                  placeholder="About"
                  name="about"
                  // value={formData.about}
                  // onChange={handleInput}
                />
                <ErrorMessage
                  name=""
                  component="div"
                  className={styles.error}
                />
              </label>
              <br />
              <label>
                Skills:
                {/* {skillMessage && (
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    {skillMessage}
                  </p>
                )} */}
                <FieldArray name="skill">
                  {({ ArrayHelpers }) => (
                    <div>
                      <Field
                        type="text"
                        placeholder="Skills"
                        name="skill"
                        // value={tempSkill}
                        onChange={(e) =>
                          setFieldValue("tempSkill", e.target.value)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => {
                          ArrayHelpers.push(formData.tempSkill);
                          setFieldValue("tempSkill", "");
                        }}
                      >
                        Add Skill
                      </button>
                      {formData?.skill?.map((skill, index) => (
                        <div className={styles.skill} key={index}>
                          <li>{skill}</li>
                          <FaCircleXmark
                            style={{ cursor: "pointer" }}
                            onClick={() => ArrayHelpers.remove(index)}
                          />
                        </div>
                      ))}
                      <ErrorMessage name="skill" component="div" />
                    </div>
                  )}
                </FieldArray>
              </label>

              {/* <label>
                Skills:
                <FieldArray name="skill">
                  {({ push, remove }) => (
                    <>
                      <Field
                        type="text"
                        placeholder="Skills"
                        onChange={(e) => setFieldValue("tempSkill", e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          push(formData.tempSkill);
                          setFieldValue("tempSkill", ""); // Clear tempSkill field
                        }}
                      >
                        Add Skill
                      </button>
                      {formData.skill.map((skill, index) => (
                        <div className={styles.skill} key={index}>
                          <li>{skill}</li>
                          <FaCircleXmark
                            style={{ cursor: "pointer" }}
                            onClick={() => remove(index)}
                          />
                        </div>
                      ))}
                      <ErrorMessage name="skill" component="div" />
                    </>
                  )}
                </FieldArray>
              </label> */}
              <label style={{ paddingTop: "15px" }}>
                Education:
                {/* {educationMessage && (
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    {educationMessage}
                  </p>
                )} */}
                <FieldArray>
                  {({ ArrayHelpers }) => (
                    <div>
                      <Field
                        type="text"
                        placeholder="Education"
                        name="education"
                        // value={tempEducation}
                        onChange={(e) =>
                          setFieldValue("tempEducation", e.target.value)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => {
                          ArrayHelpers.push(formData.education);
                          setFormData("tempEducation", "");
                        }}
                      >
                        Add Education
                      </button>
                      {formData?.education?.map((education, index) => (
                        <div className={styles.skill} key={index}>
                          <li>{education}</li>
                          <FaCircleXmark
                            style={{ cursor: "pointer" }}
                            onClick={() => ArrayHelpers.remove(index)}
                          />
                        </div>
                      ))}
                      <ErrorMessage name="education" component="div" />
                    </div>
                  )}
                </FieldArray>
              </label>

              <div style={{ paddingTop: "10px" }}>
                <button className={styles.button} type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
