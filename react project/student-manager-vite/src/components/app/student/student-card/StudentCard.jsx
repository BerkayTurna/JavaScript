import { useContext, useEffect } from "react";
import { StudentContext } from "../../../../context/student/studentContext";

const StudentCard = ({ student }) => {
  // useEffect(() => {
  //   console.log(`${student.id} mounted`);
  //   return () => console.log(`${student.id} unmounted`);
  // }, []);
  const { removeStudent, isLoading } = useContext(StudentContext);

  const handleDelete = () => {
    try {
      removeStudent(student.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="student-card-list">
      {isLoading ? (
        <p>Deleting...</p>
      ) : (
        <span className="btn" onClick={handleDelete}>
          X
        </span>
      )}
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
