import { createContext, useEffect } from "react";
import useStudent from "../../hooks/student/useStudent";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const { studentList, getStudentList, createStudent, removeStudent } =
    useStudent();

  useEffect(() => {
    getStudentList();
  }, []);
  const contextValue = {
    studentList,
    getStudentList,
    createStudent,
    removeStudent,
  };

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};
