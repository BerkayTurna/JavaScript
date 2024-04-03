import './App.css';
import { useState } from 'react';

function App() {
  const number = 0;
  const [num, setNum] = useState(number);
  const numIncrease = () => setNum(num + 10);
  const numDecrease = () => setNum(num - 10);
  const incHundred = () => {
    //prev state örnek amaçlı
    // setNum(prevNum => prevNum + 50)
    // setNum(prevNum => prevNum + 50)

    //for döngüsüyle de belirlemek mümkün :)
    for (let i = 0; i < 5; i++) {
      setNum(prevNum => prevNum + 20)
    }
  }

  return (
    <div className="App">
      <h1>Merhaba</h1>

      <p>{num}</p>
      <button onClick={() => setNum(number)}>Sıfırla</button>
      <button onClick={numIncrease}>+10</button>
      <button onClick={numDecrease}>-10</button>
      <button onClick={incHundred}>+100</button>
    </div>
  );
}

export default App;
