import StudentCard from "../student-card/StudentCard";

const StudentList = ({ studentList, removeStudent }) => {
  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <div className="student-list">
        {studentList.map((student) => (
          <StudentCard
            student={student}
            removeStudent={removeStudent}
            key={student.id}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
