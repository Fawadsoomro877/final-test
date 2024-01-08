import { BrowserRouter, Routes, Route } from "react-router-dom";
import Poetry from "./pages/Poetry";
import CreatePoetry from "./pages/CreatePoetry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Poetry />} />
        <Route path="/create-poetry" element={<CreatePoetry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
