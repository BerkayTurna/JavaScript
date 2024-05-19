import { useState } from "react";
import axios from "axios";

const useStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getStudentList = async () => {
    try {
      setIsLoading(true);
      const res = await axios(`http://localhost:3000/students`);
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
      const res = await axios.post(
        "http://localhost:3000/students",
        newStudent
      );
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
      const res = await axios.delete(`http://localhost:3000/students/${id}`);
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
