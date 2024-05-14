import { useEffect } from "react";
import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student/student-list/StudentList";
import StudentForm from "./components/app/student/student-form/StudentForm";
// import axios from "axios";
import useStudent from "./hooks/student/useStudent";
function App() {
  const { studentList, getStudentList, createStudent, removeStudent } =
    useStudent();

  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <div>
      <Header
        title={"Student Manager"}
        navElements={["Home", "Contact", "About Us"]}
      />
      <main>
        <StudentForm createStudent={createStudent} />
        <StudentList studentList={studentList} removeStudent={removeStudent} />
      </main>
    </div>
  );
}

export default App;
