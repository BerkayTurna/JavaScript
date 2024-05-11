const StudentCard = ({ student, removeStudent }) => {
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
