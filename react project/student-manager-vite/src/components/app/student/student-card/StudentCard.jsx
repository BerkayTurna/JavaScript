import { useContext, useEffect } from "react";
import { StudentContext } from "../../../../context/student/studentContext";

const StudentCard = ({ student }) => {
  useEffect(() => {
    console.log(`${student.id} mounted`);
    return () => console.log(`${student.id} unmounted`);
  }, []);
  const { removeStudent } = useContext(StudentContext);
  return (
    <div className="student-card-list">
      <span className="btn" onClick={() => removeStudent(student.id)}>
        X
      </span>
      <ul className="student-card">
        <li>
          <em>Name:</em>
          {student.name}
        </li>
        <li>
          <em>Course:</em>
          {student.course}
        </li>
        <li>
          <em>Instructor:</em>
          {student.instructor}
        </li>
      </ul>
    </div>
  );
};

export default StudentCard;
