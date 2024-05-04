import './App.css';
import { useState } from 'react';
import Header from './components/header/header/Header.js';
import StudentList from './components/app/student_list/StudentList.js';
import StudentForm from './components/app/student_list/StudentForm.jsx';

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
      // return(early)
    } else {
      //studentsList state güncelleme
      setStudentsList(
        function (prevStudentList) {
          return [...prevStudentList, {
            ...student,
            id: Math.random().toString()
          }]
        },
        //length değiştiğinde saçmalıyor
        // setStudentsList(prevStudentList => {
        //   const newStudent = {
        //     ...student,
        //     // Yeni öğrenci için bir artan ID ataması yap
        //     id: prevStudentList.length + 1
        //   };
        //   return [...prevStudentList, newStudent];
        // });
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
      <Header
        title={"Student Manager"}
        navElements={["Home", "About", "Contact"]} />
      <StudentForm
        addStudent={addStudent}
        setStudent={setStudent}
        student={student}
        allError={allError} />
      < StudentList
        studentsList={studentsList}
        removeStudent={removeStudent} />
      {/* <div className="student-list">
        <div className='student-container'>
          <h3>Student List</h3>
          {studentsList.map(
            (student) => {
              return (
                <div className="student-card" key={student.id}>
                  <button className='remove-button' onClick={() => removeStudent(student.id)}>X</button>
                  <ul>
                    <li><em>Name:</em> {student.name}</li>
                    <li><em>Course:</em> {student.course}</li>
                    <li><em>Instructor:</em> {student.instructor}</li>
                  </ul>
                </div>
              )
            }
          )}
        </div>
      </div> */}
    </div >
  );
}

export default App;
