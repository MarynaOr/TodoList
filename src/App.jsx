import { Route, Router, Routes } from "react-router-dom";
import Todos from "./components/Todos/Todos";
import LayOut from "./Layout.jsx";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
