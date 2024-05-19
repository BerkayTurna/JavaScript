import { useState } from "react";
import axios from "axios";
import {
  deleteStudent,
  getStudent,
  postStudent,
} from "../../network/requests/studentRequests";

const useStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiURL = import.meta.env.VITE_API_URL;

  const getStudentList = async () => {
    try {
      setIsLoading(true);
      const student = await getStudent();
      setStudentList(student);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createStudent = async (student) => {
    try {
      setIsLoading(true);
      const newStudent = await postStudent(student);
      setStudentList((prevState) => [...prevState, newStudent]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const removeStudent = async (id) => {
    try {
      setIsLoading(true);
      await deleteStudent(id);
      setStudentList((prevList) => {
        return prevList.filter((student) => student.id !== id);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    studentList,
    isLoading,
    getStudentList,
    createStudent,
    removeStudent,
  };
};

export default useStudent;
