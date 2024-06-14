import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/header/Header";
import { StudentProvider } from "./context/student/studentContext";
import NewStudentPage from "./pages/app/new-student-page/NewStudentPage";
import StudentListPage from "./pages/app/student-list-page/StudentListPage";
import LandingPage from "./pages/shared/landing-page/LandingPage";
import NotFoundPage from "./pages/shared/not-found-page/NotFoundPage";
import ReducerPage from "./pages/app/reducer-test-page/ReducerPage";
import MemoPage from "./pages/app/useMemo-useCallback-page/MemoPage";

function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/students" element={<StudentListPage />} />
          <Route path="/students/new" element={<NewStudentPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/reducer" element={<ReducerPage />} />
          <Route path="/memo" element={<MemoPage />} />
        </Routes>
      </StudentProvider>
    </BrowserRouter>
  );
}

export default App;
