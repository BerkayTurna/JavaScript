import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student/student-list/StudentList";
import StudentForm from "./components/app/student/student-form/StudentForm";
import { StudentProvider } from "./context/student/studentContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/shared/landing-page/LandingPage";
import NotFoundPage from "./pages/shared/not-found-page/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/new" element={<StudentForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </StudentProvider>
    </BrowserRouter>
  );
}

export default App;
