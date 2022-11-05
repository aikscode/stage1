import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" exact element={<ContactMe />} />
    </Routes>
  );
}

export default App;
