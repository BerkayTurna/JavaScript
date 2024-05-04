const StudentList = ({ studentsList }) => {
    return (
        <div className="student-list">
            <div className='student-container'>
                <h3>Student List</h3>
                {studentsList.map(
                    (student) => {
                        return (
                            <StudentCard />
                            // <div className="student-card" key={student.id}>
                            //     <button className='remove-button' onClick={() => removeStudent(student.id)}>X</button>
                            //     <ul>
                            //         <li><em>Name:</em> {student.name}</li>
                            //         <li><em>Course:</em> {student.course}</li>
                            //         <li><em>Instructor:</em> {student.instructor}</li>
                            //     </ul>
                            // </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default StudentList;