import { useState } from "react";

const StudentForm = ({ createStudent }) => {
  const [studentInput, setStudentInput] = useState({
    name: "",
    course: "",
    instructor: "",
  });
  const [error, setError] = useState({
    name: false,
    course: false,
    instructor: false,
  });
  const addStudent = (event) => {
    event.preventDefault();
    setError({
      name: false,
      course: false,
      instructor: false,
    });
    if (
      studentInput.name.trim() &&
      studentInput.course.trim() &&
      studentInput.instructor.trim()
    ) {
      createStudent({ ...studentInput, id: Date.now().toString() });
      setStudentInput({
        name: "",
        course: "",
        instructor: "",
      });
    } else {
      !studentInput.name.trim() &&
        setError((prevState) => ({ ...prevState, name: true }));
      !studentInput.course.trim() &&
        setError((prevState) => ({ ...prevState, course: true }));
      !studentInput.instructor.trim() &&
        setError((prevState) => ({ ...prevState, instructor: true }));
    }
  };
  return (
    <form action="">
      <input
        type="text"
        placeholder="Name"
        onChange={(event) =>
          setStudentInput((prevState) => ({
            ...prevState,
            name: event.target.value,
          }))
        }
        value={studentInput.name}
      />
      {error.name && <p>Enter Student Name</p>}
      <input
        type="text"
        placeholder="Course"
        onChange={(event) =>
          setStudentInput((prevState) => ({
            ...prevState,
            course: event.target.value,
          }))
        }
        value={studentInput.course}
      />
      {error.course && <p>Enter Course Name</p>}
      <input
        type="text"
        placeholder="Instructor"
        onChange={(event) =>
          setStudentInput((prevState) => ({
            ...prevState,
            instructor: event.target.value,
          }))
        }
        value={studentInput.instructor}
      />
      {error.instructor && <p>Enter Instructor Name</p>}
      <input type="submit" onClick={addStudent} />
    </form>
  );
};

export default StudentForm;
