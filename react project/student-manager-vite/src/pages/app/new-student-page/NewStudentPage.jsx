import React, { useEffect } from "react";
import StudentForm from "../../../components/app/student/student-form/StudentForm";

const NewStudentPage = () => {
  useEffect(() => {
    console.log("New student page mounted");

    return () => console.log("New student page unmounted");
  }, []);
  return (
    <div>
      <StudentForm />
    </div>
  );
};

export default NewStudentPage;
