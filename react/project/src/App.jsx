import React, { useState } from "react";

const studentArray = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Maple Street, Springfield",
    rollNumber: "A001",
    totalMarks: 450,
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Oak Avenue, Shelbyville",
    rollNumber: "A002",
    totalMarks: 470,
  },
  {
    id: 3,
    name: "Alice Johnson",
    address: "789 Pine Road, Capital City",
    rollNumber: "A003",
    totalMarks: 460,
  },
];

const App = () => {
  const [studentList, setStudentList] = useState(studentArray);
  const [newValue, setNewValue] = useState();

  const handleChange = (e) => {
    console.log("input", e.target.name, e.target.value);
    setNewValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("length", studentList.length);
    setStudentList((prev) => [
      ...prev,
      { ...newValue, id: studentList.length + 1 },
    ]);
  };

  const handleDelete = (id) => {
    const del = studentList.filter((student) => student.id !== id);
    setStudentList(del);
  };

  console.log("sd", studentList);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>FullName</td>
            <td>Address</td>
            <td>RollNumber</td>
            <td>Total Marks</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student.rollNumber}</td>
              <td>{student.totalMarks}</td>
              <td>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleChange}
          />
          <br />
          <label>Address: </label>
          <input
            type="text"
            placeholder="Enter address"
            name="address"
            onChange={handleChange}
          />
          <br />
          <label>Roll Number: </label>
          <input
            type="text"
            placeholder="Enter roll number"
            name="rollNumber"
            onChange={handleChange}
          />
          <br />
          <label>Total Marks: </label>
          <input
            type="text"
            placeholder="Enter total marks"
            name="totalMarks"
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
