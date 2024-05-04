import StudentCard from "../student-card/StudentCard";

const StudentList = ({ studentList }) => {
  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <div className="student-list">
        {studentList.map((student) => (
          <StudentCard student={student} key={student.id} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
