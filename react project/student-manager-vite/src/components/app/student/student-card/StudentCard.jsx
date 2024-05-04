const StudentCard = ({ student }) => {
  return (
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
  );
};

export default StudentCard;
