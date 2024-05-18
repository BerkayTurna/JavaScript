import { useContext } from "react";
import StudentCard from "../student-card/StudentCard";
import { StudentContext } from "../../../../context/student/studentContext";

const StudentList = () => {
  const { studentList, isLoading } = useContext(StudentContext);
  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <div className="student-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          studentList.map((student) => (
            <StudentCard student={student} key={student.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default StudentList;
