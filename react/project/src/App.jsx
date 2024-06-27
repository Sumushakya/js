import { useState, useEffect } from "react";
import students from "./students.json";

function App() {
  const [studentsData, setStudentsData] = useState([]);
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    address: "",
    "roll number": "",
    "total marks": "",
  });

  useEffect(() => {
    //load data from json file
    setStudentsData(students);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudentData = { ...newStudent, id: studentsData.length + 1 };
    setStudentsData([...studentsData, newStudentData]);
    setNewStudent({
      id: "",
      name: "",
      address: "",
      "roll number": "",
      "total marks": "",
    });
  };

  const handleEditStudent = (id) => {};

  const handleDeleteStudent = (id) => {
    setStudentsData(studentsData.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h1>Students Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Roll Number</th>
            <th>Total Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student["roll number"]}</td>
              <td>{student["total marks"]}</td>
              <td>
                <button onClick={() => handleEditStudent(student.id)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Add new Student</h2>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input
              type="number"
              placeholder="Enter id"
              value={newStudent.id}
              onChange={(e) =>
                setNewStudent({ ...newStudent, id: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              placeholder="Enter Name"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              placeholder="Enter Address"
              value={newStudent.address}
              onChange={(e) =>
                setNewStudent({ ...newStudent, address: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Roll Number:
            <input
              type="text"
              placeholder="Enter rollnumber"
              value={newStudent["roll number"]}
              onChange={(e) =>
                setNewStudent({ ...newStudent, "roll number": e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Total Marks:
            <input
              type="number"
              placeholder="Enter total marks"
              value={newStudent["total marks"]}
              onChange={(e) =>
                setNewStudent({ ...newStudent, "total marks": e.target.value })
              }
            />
          </label>
          <br />
          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  );
}
export default App;
