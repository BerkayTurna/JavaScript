import React, { useEffect } from "react";
import StudentList from "../../../components/app/student/student-list/StudentList";

const StudentListPage = () => {
  useEffect(() => {
    console.log("Student list page mounted");
    return () => console.log("Student list page unmounted");
  }, []);
  return (
    <div>
      <StudentList />
    </div>
  );
};

export default StudentListPage;
