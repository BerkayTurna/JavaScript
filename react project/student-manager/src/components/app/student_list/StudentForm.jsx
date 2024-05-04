const StudentForm = ({ addStudent, setStudent, student, allError }) => {
  return (
    <div>
      <h3>Enter Student Data</h3>
      <form action="" className="student-form">
        <div className="input-control">
          <input
            type="text"
            placeholder="student name"
            value={student.name}
            onChange={(event) =>
              setStudent({ ...student, name: event.target.value })
            }
          />
          {/*nameError koşulu meydana geldiğinde string yazma - conditional rendering*/}
          {allError.name && <p>İsim alanı boş olamaz!</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder="course"
            value={student.course}
            onChange={(event) =>
              setStudent({ ...student, course: event.target.value })
            }
          />
          {allError.course && <p>Course alanı boş olamaz!</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder="instructor"
            value={student.instructor}
            onChange={(event) =>
              setStudent({ ...student, instructor: event.target.value })
            }
          />
          {allError.instructor && <p>Instructor alanı boş olamaz!</p>}
        </div>
        <input type="submit" onClick={addStudent} />
      </form>
    </div>
  );
};

export default StudentForm;
