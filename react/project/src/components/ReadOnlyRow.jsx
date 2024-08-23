import React from "react";

const ReadOnlyRow = ({ idvstudent }) => {
  return (
    <div>
      <tr>
        <td>{idvstudent.id}</td>
        <td>{idvstudent.name}</td>
        <td>{idvstudent.address}</td>
        <td>{idvstudent["roll number"]}</td>
        <td>{idvstudent["total marks"]}</td>
        <td>
          <button onClick={() => handleEditStudent(idvstudent.id)}>Edit</button>
          <button onClick={() => handleDeleteStudent(idvstudent.id)}>
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
};

export default ReadOnlyRow;
