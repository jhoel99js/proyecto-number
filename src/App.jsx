import { Routes, Route } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { HomePage } from "./pages/HomePage";
import { NumberDetail } from "./pages/NumberDetail";
import { NumberPage } from "./pages/NumberPage";

function App() {
  return (
    <div >
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NumberPage" element={<NumberPage />} />
          <Route path="/NumberDetail" element={<NumberDetail />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
     
    </div>
  );
}

export default App
