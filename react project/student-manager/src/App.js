import './App.css';
import { useState } from 'react';

function App() {
  // let studentName1 = "Barkın Onay Sayın";
  // let studentName2 = "Mert Ders Kırant";
  // let studentName3 = "Onur Ege Ercallbeck";

  //hooks
  //useState ekranı yeniden yazdırır
  // console.log(useState("Cenk Grid Kaynak"));

  //destructuring ile...
  // const [studentName1, setStudentName1] = useState("Barkın Onay Sayın");
  // const [studentName2, setStudentName2] = useState("Mert Ders Kırant");
  // const [studentName3, setStudentName3] = useState("Onur Ege Ercallbeck");

  //data state
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");

  //input state
  const [nameInput, setNameInput] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [instructorInput, setInstructorInput] = useState("");
  return (
    /* JSX */
    <div className="app">
      <h2>Student Manager</h2>
      <h3>Enter Data</h3>
      <form action="" style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignItems: "center",
      }}>
        <input type="text" placeholder="student name"
          onChange={(event) => setNameInput(event.target.value)} />
        <input type="text" placeholder="course"
          onChange={(event) => setCourseInput(event.target.value)} />
        <input type="text" placeholder="instructor"
          onChange={(event) => setInstructorInput(event.target.value)} />
        <input
          type="submit"
          onClick={
            (event) => {
              event.preventDefault();
              // console.log(nameInput, courseInput, instructorInput)}
              setName(nameInput);
              setCourse(courseInput);
              setInstructor(instructorInput);
            }
          } />
      </form>
      <div className="student-list">
        <div className="student-card" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <h3>Student Data</h3>
          <ul style={{
            listStyle: "none"
          }}>
            <li>{name}</li>
            <li>{course}</li>
            <li>{instructor}</li>
          </ul>
        </div>
      </div>

      {/* <p>{studentName1}</p>
      <button style={{
        color: "red",
        backgroundColor: "aliceblue",
        borderRadius: "5px",
      }}
      className="change-student-name"
        onClick={
          () => {
            setStudentName1("Cenk Grid Kaynak");
          }
        }
      >
        Change Student Name
      </button>
      <p>{studentName2}</p>
      <button className="change-student-name"
        onClick={
          () => {
            setStudentName2("Berkay Turna");
          }
        }
      >
        Change Student Name
      </button>
      <p>{studentName3}</p>
      <button className="change-student-name"
        onClick={
          () => {
            setStudentName3("Ali Rıza Taşkıran");
          }
        }
      >
        Change Student Name
      </button> */}
    </div>
  );
}

export default App;
