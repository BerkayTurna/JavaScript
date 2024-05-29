import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate(); // bileşen içerisinde çağrıldığında parametre olarak aldığı URL'ye gitmemizi sağlar.

  useEffect(() => {
    if (time === 0) {
      navigate("/");
    }
    //setInterval fonksiyonu 1000 değeri vermemiz dolayısıyla saniyede bir çalışır.
    const countdown = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(countdown); //setIntervali durdurmak için kullanılır.
  }, [time, navigate]);
  //Yukarıdaki girişimde NotFoundPage renderlama yaparken BrowserRouter update
  //edilemiyor.

  //Aşağıdaki girişimde time 0'dan büyük olduğu sürece setTimeout ile saniyede
  //bir işlem yapılırken clearTimeout zamanlayıcıyı durdurur. time 0'a geldiğinde
  //else devreye girerek useNavigate'i çağırıp anasayfaya döndürür.
  // useEffect(() => {
  //   if (time > 0) {
  //     const countdown = setTimeout(() => {
  //       setTime((prevTime) => prevTime - 1);
  //     }, 1000);
  //     return () => clearTimeout(countdown); //syntax clearTimeout(setTimeoutId) şeklindedir.
  //   } else {
  //     navigate("/");
  //   }
  // }, [time, navigate]); // useEffect time her değiştiğinde yeniden çalışır ve
  //time=0 olduğunda navigate çalışır. Bu nedenle her iki dependency yazılmalıdır.
  return (
    <div>
      <h1>OOoopps...</h1>
      <h2>There's nothing here!</h2>
      <h3>You will be directed to home page in {time} seconds</h3>
    </div>
  );
};

export default NotFoundPage;
