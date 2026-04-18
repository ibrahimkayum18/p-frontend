import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminProjects from "./pages/AdminProjects";
import AdminBlogs from "./pages/AdminBlogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/blogs" element={<AdminBlogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
