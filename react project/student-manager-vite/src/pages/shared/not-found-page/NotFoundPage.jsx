import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  //   const timer = () => {
  //     if (time > 0) {
  //       setTime(time - 1);
  //     }
  //     return console.log(time);
  //   };

  useEffect(() => {
    const countdown = setTimeout(() => {
      setTime((prevTime) => {
        return prevTime - 1;
      });
      if (time === 0) {
        navigate("/");
      }
    }, 1000);
  }, []);
  return (
    <div>
      <h1>OOoopps...</h1>
      <h2>There's nothing here!</h2>
      <h3>You will be directed to home page in {time} seconds</h3>
    </div>
  );
};

export default NotFoundPage;
