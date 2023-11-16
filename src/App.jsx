import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VerticalNav from "./components/VerticalNav";
import Contenido from "./components/Contenido";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerticalNav />}>
          <Route index element={<Contenido />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
