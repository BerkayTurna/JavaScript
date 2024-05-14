import { useEffect } from "react";
import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student/student-list/StudentList";
import StudentForm from "./components/app/student/student-form/StudentForm";
import { StudentProvider } from "./context/student/studentContext";
function App() {
  return (
    <StudentProvider>
      <Header
        title={"Student Manager"}
        navElements={["Home", "Contact", "About Us"]}
      />
      <main>
        <StudentForm />
        <StudentList />
      </main>
    </StudentProvider>
  );
}

export default App;
