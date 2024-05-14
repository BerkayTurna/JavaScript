import { useState } from "react";
import axios from "axios";

const useStudent = () => {
  const [studentList, setStudentList] = useState([]);

  const getStudentList = async () => {
    try {
      const res = await axios(`http://localhost:3000/students`);
      setStudentList(res.data);
    } catch {
      console.error("Cannot fetch data", error);
    }
  };

  const createStudent = async (newStudent) => {
    const res = await axios.post("http://localhost:3000/students", newStudent);
    setStudentList((prevState) => [...prevState, res.data]);
  };
  const removeStudent = async (id) => {
    const res = await axios.delete(`http://localhost:3000/students/${id}`, id);
    setStudentList((prevList) => {
      return prevList.filter((student) => student.id !== id);
    });
  };
  return { studentList, getStudentList, createStudent, removeStudent };
};

export default useStudent;
