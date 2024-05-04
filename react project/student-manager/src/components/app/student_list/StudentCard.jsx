const StudentCard = ({ student, removeStudent }) => {
  return (
    <div className="student-card" key={student.id}>
      <button
        className="remove-button"
        onClick={() => removeStudent(student.id)}
      >
        X
      </button>
      <ul>
        <li>
          <em>Name:</em> {student.name}
        </li>
        <li>
          <em>Course:</em> {student.course}
        </li>
        <li>
          <em>Instructor:</em> {student.instructor}
        </li>
      </ul>
    </div>
  );
};

export default StudentCard;
