import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Video from "./components/Video";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
