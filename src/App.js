import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Form/Register";
import Home_layout from "./containers/Home_layout/Home_layout";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/*"} element={<Home_layout />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
