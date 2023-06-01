import "./App.scss";
import Crousel from "./components/Crousel/Crousel";
import OnScroll from "./components/ScrollBar/OnScroll";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <OnScroll />
      <Crousel/>
      <Slider/>
    </>
  );
}

export default App;
