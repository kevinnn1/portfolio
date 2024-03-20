import { Home } from "./pages/Home.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Work } from "./pages/Work.jsx";
import { Nopage } from "./pages/Nopage.jsx";
import { Sidenav } from "./components/Sidenav.jsx";
import { Routes, Route } from "react-router-dom";
import { ProjectPage } from "./components/ProjectPage.jsx";

function App() {
  return (
    <div className="min-h-screen bg-bgMain dark:bg-bgMain-dark">
      <Sidenav />

      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/home" element={<Home />} />

        <Route path="/portfolio/projects/" >
          <Route index element={<Projects />} />
          <Route path="project1" element={<ProjectPage name='project1' />} />
          <Route path="project2" element={<ProjectPage name='project2' />} />
          <Route path="project3" element={<ProjectPage name='project3' />} />
          <Route path="project4" element={<ProjectPage name='project4' />} />
        </Route>

        <Route path="/portfolio/work/" element={<Work />} />

        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
