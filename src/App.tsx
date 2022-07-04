import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "components/Navbar/Navbar";
import { Home } from "containers/Home/Home";
import { Graphs } from "containers/Graphs/Graphs";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/graphs" element={<Graphs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
