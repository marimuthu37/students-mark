import React, { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import StudentForm from "./StudentForm";
import "./index.css";

const App = () => {
  const [students, setStudents] = useState([]);

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student-form" element={<StudentForm students={students} setStudents={setStudents} />} />
      </Routes>
  );
};

export default App;
