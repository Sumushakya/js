import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import styles from "./detailform.module.css";
import { DetailContext } from "../../context/Detail/DetailContext";
import { FaCircleXmark } from "react-icons/fa6";
import * as Yup from "yup";

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

  // const ValidationSchema = Yup.object({
  //   name: Yup.string().
  // });

  useEffect(() => {
    if (userDetails) {
      setFormData(userDetails);
    }
  }, []);

  const [tempSkill, setTempSkill] = useState("");
  console.log("skilssss", tempSkill);

  const [tempEducation, setTempEducation] = useState("");
  const [skillMessage, setSkillMessage] = useState("");
  const [educationMessage, setEducationMessage] = useState("");

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log("input", e.target.name, e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInputSkill = (e) => {
    setTempSkill(e.target.value);
  };

  const handleAddSkill = () => {
    setFormData((prev) => ({ ...prev, skill: [...prev.skill, tempSkill] }));
    setSkillMessage("Skill Added!");
    setTempSkill("");
    setTimeout(() => {
      setSkillMessage("");
    }, 10000);
  };

  const handleInputEducation = (e) => {
    setTempEducation(e.target.value);
    console.log("education", tempEducation);
  };

  const handleAddEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, tempEducation],
    }));
    setEducationMessage(" Education Added!");
    setTimeout(() => {
      setEducationMessage("");
    }, 10000);
    setTempEducation("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("userData", JSON.stringify(formData));
    setUserDetails(formData);
    navigate("/");
    console.log("submit", formData);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkill = formData.skill.filter((_, it) => it !== index);
    setFormData((prev) => ({ ...prev, skill: updatedSkill }));
  };

  const handleDeleteEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((education, i) => i !== index),
    }));
  };

  return (
    <div>
      <Nav />
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1>Detail Form</h1>
          <br />
          <label>
            Name:
            <input
              required
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInput}
            />
          </label>
          <br />
          <label>
            Headline
            <input
              required
              type="text"
              placeholder="Headline"
              name="headline"
              value={formData.headline}
              onChange={handleInput}
            />
          </label>
          <br />
          <label>
            About:
            <input
              required
              type="text"
              placeholder="About"
              name="about"
              value={formData.about}
              onChange={handleInput}
            />
          </label>
          <br />

          <label>
            Skills:
            {skillMessage && (
              <p style={{ color: "green", fontWeight: "bold" }}>
                {skillMessage}
              </p>
            )}
            <input
              type="text"
              placeholder="Skills"
              name="skill"
              value={tempSkill}
              onChange={handleInputSkill}
            />
          </label>
          <button type="button" onClick={handleAddSkill}>
            Add Skill
          </button>
          {formData?.skill?.map((skill, index) => (
            <div className={styles.skill} key={index}>
              <li>{skill}</li>
              <FaCircleXmark
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteSkill(index)}
              />
            </div>
          ))}

          <label style={{ paddingTop: "15px" }}>
            Education:
            {educationMessage && (
              <p style={{ color: "green", fontWeight: "bold" }}>
                {educationMessage}
              </p>
            )}
            <input
              type="text"
              placeholder="Education"
              name="education"
              value={tempEducation}
              onChange={handleInputEducation}
            />
          </label>
          <button type="button" onClick={handleAddEducation}>
            Add Education
          </button>
          {formData?.education?.map((education, index) => (
            <div className={styles.skill} key={index}>
              <li>{education}</li>
              <FaCircleXmark
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteEducation(index)}
              />
            </div>
          ))}

          <div style={{ paddingTop: "10px" }}>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
