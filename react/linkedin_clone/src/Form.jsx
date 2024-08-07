import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    headline: "",
    about: "",
    skill: "",
    education: "",
  });

  const handleInput = (e) => {
    console.log("input", e.target.name, e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
        <br />
        <label>Headline</label>
        <br />
        <input
          type="text"
          placeholder="Headline"
          name="headline"
          value={formData.headline}
          onChange={handleInput}
        />
        <br />
        <label>About:</label>
        <br />
        <input
          type="text"
          placeholder="About"
          name="about"
          value={formData.about}
          onChange={handleInput}
        />
        <br />
        <label>Skill:</label>
        <br />
        <input
          type="text"
          placeholder="Skill"
          name="skill"
          value={formData.skill}
          onChange={handleInput}
        />
        <br />
        <label>Education:</label>
        <br />
        <input
          type="text"
          placeholder="Education"
          name="education"
          value={formData.education}
          onChange={handleInput}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
