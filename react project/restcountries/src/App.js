// import { useState } from 'react';
import Header from './Header';
import './App.css';
import ListOfCountries from './ListOfCountries';

function App() {
  // const [countryList, setCountryList] = useState('')
  return (
    <div className="App">
      <Header />
      <ListOfCountries />
    </div>
  );
}

export default App;
