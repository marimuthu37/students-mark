import React, { useState } from "react";
import "./index.css";

const StudentForm = ({ students, setStudents }) => {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState({ english: "", maths: "", physics: "", chemistry: "" });

  const handleSubmit = () => {
    setStudents([...students, { name, ...marks }]);
    setName("");
    setMarks({ english: "", maths: "", physics: "", chemistry: "" });
  };

  return (
    <div className="container">
      <div className="input-container">
        <h2>Enter Student Details</h2>
        <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        {Object.keys(marks).map((subject) => (
          <input key={subject} type="number" placeholder={subject} value={marks[subject]} onChange={(e) => setMarks({ ...marks, [subject]: e.target.value })} />
        ))}
        <button onClick={handleSubmit}>Add Student</button>
      </div>
      <div className="students-container">
        <h2>Student Marks List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>English</th>
              <th>Maths</th>
              <th>Physics</th>
              <th>Chemistry</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.english}</td>
                <td>{student.maths}</td>
                <td>{student.physics}</td>
                <td>{student.chemistry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentForm;