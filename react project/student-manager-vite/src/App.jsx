import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student/student-list/StudentList";
import StudentForm from "./components/app/student/student-form/StudentForm";

function App() {
  const [studentList, setStudentList] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5050/students`)
  //     .then((response) => response.json())
  //     .then((data) => setStudentList(data));
  // }, []);

  useEffect(() => {
    const getStudentList = async () => {
      try {
        const res = await fetch(`http://localhost:3000/students`);
        const data = await res.json();
        setStudentList(data);
      } catch {
        console.error("Cannot fetch data", error);
      }
    };
    getStudentList();
  }, []);

  const createStudent = (newStudent) => {
    setStudentList((prevState) => [
      ...prevState,
      { ...newStudent, id: Date.now().toString() },
    ]);
  };
  const removeStudent = (id) => {
    setStudentList((prevList) => {
      return prevList.filter((student) => student.id !== id);
    });
  };
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
