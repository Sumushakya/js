import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import styles from "./form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    headline: "",
    about: "",
    skill: [],
    education: [],
    // educations: [],
  });
  console.log("detailformdata", formData);
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
    // setTempSkill((prev) => prev + e.target.value);
    // setFormData((prev) => ({ ...prev, skill: [...prev.skill, tempSkill] }));
    // console.log("s", tempSkill);
  };

  const handleAddSkill = () => {
    setFormData((prev) => ({ ...prev, skill: [...prev.skill, tempSkill] }));
    setSkillMessage("Skill Added!");
    setTempSkill("");
    setTimeout(() => {
      setSkillMessage("");
    }, 5000);
    // console.log("add", setFormData);
  };
  const handleInputEducation = (e) => {
    setTempEducation(e.target.value);
    console.log("educatio", tempEducation);
  };
  const handleAddEducation = () => {
    setEducationMessage("Added!");
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, tempEducation],
    }));
    setTempEducation("");
    setTimeout(() => {
      setEducationMessage("");
    }, 5000);
    // console.log("add", setFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/");
    console.log("submit", formData);
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
            Skill:
            <input
              type="text"
              placeholder="Skill"
              name="skill"
              value={tempSkill}
              onChange={handleInputSkill}
            />
          </label>
          <button type="button" onClick={handleAddSkill}>
            Add Skill
          </button>
          {skillMessage && (
            <p style={{ color: "green", fontWeight: "bold" }}>{skillMessage}</p>
          )}
          <label style={{ paddingTop: "15px" }}>
            Education:
            <input
              type="text"
              placeholder="Education"
              name="education"
              value={tempEducation}
              onChange={handleInputEducation}
            />
          </label>
          <button onClick={handleAddEducation}>Add Education</button>
          {educationMessage && (
            <p style={{ color: "green", fontWeight: "bold" }}>
              {educationMessage}
            </p>
          )}
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
