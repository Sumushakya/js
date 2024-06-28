import { useEffect, useState } from "react";
import data from "./data.json";
function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, []);

  function handleEdit(id) {
    alert(id);
  }

  function handleDelete(id) {
    if (id > 0);
  }

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>S.N</td>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.id}</td>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.age}</td>
              <td>
                <button
                  onClick={() => handleEdit(data.id)}
                  className="btn btn-primary"
                >
                  Edit
                </button>
                &nbsp;
                <button
                  onClick={() => handleDelete(data.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
