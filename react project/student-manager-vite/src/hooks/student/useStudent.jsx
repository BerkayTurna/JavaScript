import { useState } from "react";
import axios from "axios";

const useStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiURL = import.meta.env.VITE_API_URL;
  console.log(apiURL);
  const getStudentList = async () => {
    try {
      setIsLoading(true);
      const res = await axios(`${apiURL}/students`);
      if (res.status !== 200) {
        throw new Error("Student list couldn't be created");
      }
      setStudentList(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createStudent = async (newStudent) => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${apiURL}/students`, newStudent);
      if (res.status !== 201) {
        throw new Error("Student couldn't be created");
      }
      setStudentList((prevState) => [...prevState, res.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const removeStudent = async (id) => {
    try {
      setIsLoading(true);
      const res = await axios.delete(`${apiURL}/students/${id}`);
      if (res.status !== 200) {
        throw new Error("Student couldn't be deleted");
      }
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
