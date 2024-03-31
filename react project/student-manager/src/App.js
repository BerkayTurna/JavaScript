import './App.css';
import { useState } from 'react';

function App() {

  //data state
  //Liste oluşturma hooku
  const [studentsList, setStudentsList] = useState([]);

  //input state
  const [student, setStudent] = useState({ name: "", course: "", instructor: "" })

  //error state

  const [allError, setAllError] = useState(
    {
      name: false,
      course: false,
      instructor: false,
    }
  )

  const addStudent = (event) => {
    event.preventDefault();

    //Hatalı giriş olmadığını varsayarak başlama
    //Hataları silme
    setAllError({
      name: false,
      course: false,
      instructor: false,
    });


    if (!student.name.trim() || !student.course.trim() || !student.instructor.trim()) {
      //Error varsa yazdırma
      setAllError(
        {
          name: !student.name.trim(),
          course: !student.course.trim(),
          instructor: !student.instructor.trim(),
        }
      );
    }

    //studentsList güncelleme
    setStudentsList(
      [
        ...studentsList,
        {
          ...student,
          id: Math.random().toString()
        }
      ]
    );
    //input içeriğini temizleme - two way binding
    setStudent({ name: "", course: "", instructor: "" });

  }
  return (
    /* JSX */
    <div className="app">
      <h2>Student Manager</h2>
      <h3>Enter Data</h3>
      <form action="" className="student-form" >
        <input type="text" placeholder="student name" value={student.name}
          onChange={(event) => setStudent({ ...student, name: event.target.value })} />
        {/*nameError koşulu meydana geldiğinde string yazma - conditional rendering*/}
        {allError.name && <p>İsim alanı boş olamaz!</p>}
        <input type="text" placeholder="course" value={student.course}
          onChange={(event) => setStudent({ ...student, course: event.target.value })} />
        {allError.course && <p>Course alanı boş olamaz!</p>}
        <input type="text" placeholder="instructor" value={student.instructor}
          onChange={(event) => setStudent({ ...student, instructor: event.target.value })} />
        {allError.instructor && <p>Instructor alanı boş olamaz!</p>}
        <input
          type="submit"
          onClick={addStudent} />
      </form>
      <div className="student-list">
        <div className="student-card">
          <h3>Student List</h3>
          {studentsList.map(
            (student) => {
              return (
                <div className="student-card" key={student.id}>
                  <ul style={{
                    listStyle: "none",
                    border: "2px solid green",
                    borderRadius: "8px",
                    padding: "6px",
                    textAlign: "left"
                  }}>
                    <li><em>Name:</em> {student.name}</li>
                    <li>Course: {student.course}</li>
                    <li>Instructor: {student.instructor}</li>
                  </ul>
                </div>
              )
            }
          )}
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
