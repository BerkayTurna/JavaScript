import "./App.css";
import CalcForm from "./components/calc-form/CalcForm";
import CalcList from "./components/calc-list/CalcList";
import Header from "./components/header/Header";
import { CalcProvider } from "./contexts/CalcContext";
function App() {
  return (
    <>
      <CalcProvider>
        <Header />
        <main>
          <CalcForm />
          <CalcList />
        </main>
      </CalcProvider>
    </>
  );
}
export default App;
