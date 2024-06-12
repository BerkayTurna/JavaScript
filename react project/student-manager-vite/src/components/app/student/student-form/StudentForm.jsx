import { createRef, useContext, useReducer } from "react";
import { StudentContext } from "../../../../context/student/studentContext";

const initialState = {
  studentInput: {
    name: "",
    course: "",
    instructor: "",
  },
  errors: {
    name: false,
    course: false,
    instructor: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "STUDENT_INPUT":
      return {
        ...state,
        studentInput: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        errors: { ...state.errors, ...action.payload },
      };
    case "RESET":
      return {
        ...state,
        studentInput: {
          name: "",
          course: "",
          instructor: "",
        },
        errors: {
          name: false,
          course: false,
          instructor: false,
        },
      };
    default:
      return state;
  }
};
const StudentForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleReset = () => {
    dispatch({ type: "RESET" });
    nameRef.current.value = "";
    courseRef.current.value = "";
    instructorRef.current.value = "";
  };
  const addStudent = (event) => {
    event.preventDefault();
    console.log(state.studentInput);
    if (
      state.studentInput.name.trim() &&
      state.studentInput.course.trim() &&
      state.studentInput.instructor.trim()
    ) {
      createStudent(state.studentInput);
      handleReset();
    } else {
      !state.studentInput.name.trim()
        ? dispatch({ type: "ERROR", payload: { name: true } })
        : dispatch({ type: "ERROR", payload: { name: false } });
      !state.studentInput.course.trim()
        ? dispatch({ type: "ERROR", payload: { course: true } })
        : dispatch({ type: "ERROR", payload: { course: false } });
      !state.studentInput.instructor.trim()
        ? dispatch({ type: "ERROR", payload: { instructor: true } })
        : dispatch({ type: "ERROR", payload: { instructor: false } });
    }
  };
  const { createStudent, isLoading } = useContext(StudentContext);
  const nameRef = createRef();
  const courseRef = createRef();
  const instructorRef = createRef();

  return (
    <form action="">
      <input
        type="text"
        placeholder="Name"
        onChange={() =>
          dispatch({
            type: "STUDENT_INPUT",
            payload: { ...state.studentInput, name: nameRef.current.value },
          })
        }
        ref={nameRef}
      />
      {state.errors.name && <p>Enter Student Name</p>}
      <input
        type="text"
        placeholder="Course"
        onChange={() =>
          dispatch({
            type: "STUDENT_INPUT",
            payload: { ...state.studentInput, course: courseRef.current.value },
          })
        }
        ref={courseRef}
      />
      {state.errors.course && <p>Enter Course Name</p>}
      <input
        type="text"
        placeholder="Instructor"
        onChange={() =>
          dispatch({
            type: "STUDENT_INPUT",
            payload: {
              ...state.studentInput,
              instructor: instructorRef.current.value,
            },
          })
        }
        ref={instructorRef}
      />
      {state.errors.instructor && <p>Enter Instructor Name</p>}
      {isLoading ? (
        <input type="submit" value="Add Student" disabled />
      ) : (
        <input type="submit" value="Add Student" onClick={addStudent} />
      )}
    </form>
  );
};

export default StudentForm;
