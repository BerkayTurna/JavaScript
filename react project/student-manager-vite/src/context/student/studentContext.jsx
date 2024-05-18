import { createContext, useEffect } from "react";
import useStudent from "../../hooks/student/useStudent";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const {
    studentList,
    isLoading,
    getStudentList,
    createStudent,
    removeStudent,
  } = useStudent();

  useEffect(() => {
    getStudentList();
  }, []);
  const contextValue = {
    studentList,
    isLoading,
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
