import { useState } from "react";
import "./App.css";
import Header from "./components/app/header/Header";
import StudentList from "./components/app/student/student-list/StudentList";
import StudentForm from "./components/app/student/student-form/StudentForm";

function App() {
  const [studentList, setStudentList] = useState([]);

  const createStudent = (newStudent) => {
    setStudentList((prevState) => [
      ...prevState,
      { ...newStudent, id: Date.now().toString() },
    ]);
  };
  return (
    <div>
      <Header
        title={"Student Manager"}
        navElements={["Home", "Contact", "About Us"]}
      />
      <main>
        <StudentForm createStudent={createStudent} />
        <StudentList studentList={studentList} />
      </main>
    </div>
  );
}

export default App;
