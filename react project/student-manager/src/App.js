import './App.css';
import { useState } from 'react';
import Header from './header.js';

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
      // return
    } else {
      //studentsList state güncelleme
      setStudentsList(
        function (prevStudentList) {
          return [...prevStudentList, {
            ...student,
            id: Math.random().toString()
          }]
        },

      );
      //input içeriğini temizleme - two way binding
      setStudent({ name: "", course: "", instructor: "" });
    }
  }
  const removeStudent = (id) => {
    setStudentsList(prevStudentsList => {
      // Filter metoduyla belirli bir öğrenciyi listeden kaldırma
      return prevStudentsList.filter(student => student.id !== id);
    });
  };
  return (
    <div className="app">
      <Header />
      <h3>Enter Student Data</h3>
      <form action="" className="student-form" >
        <div className="input-control">
          <input type="text" placeholder="student name" value={student.name}
            onChange={(event) => setStudent({ ...student, name: event.target.value })}
          />
          {/*nameError koşulu meydana geldiğinde string yazma - conditional rendering*/}
          {allError.name && <p>İsim alanı boş olamaz!</p>}
        </div>
        <div className="input-control">
          <input type="text" placeholder="course" value={student.course}
            onChange={(event) => setStudent({ ...student, course: event.target.value })} />
          {allError.course && <p>Course alanı boş olamaz!</p>}
        </div>
        <div className="input-control">
          <input type="text" placeholder="instructor" value={student.instructor}
            onChange={(event) => setStudent({ ...student, instructor: event.target.value })} />
          {allError.instructor && <p>Instructor alanı boş olamaz!</p>}
        </div>
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
                  <ul>
                    <li><em>Name:</em> {student.name}</li>
                    <li><em>Course:</em> {student.course}</li>
                    <li><em>Instructor:</em> {student.instructor}</li>
                  </ul>
                  <button onClick={() => removeStudent(student.id)}>Kaldır</button>
                </div>
              )
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
