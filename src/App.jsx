import { Home } from "./pages/Home.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Experience } from "./pages/Experience.jsx";
import { Nopage } from "./pages/Nopage.jsx";
import { Sidenav } from "./components/Sidenav.jsx";
import { Routes, Route } from "react-router-dom";
import { ProjectPage } from "./components/ProjectPage.jsx";
import { CgGames } from "react-icons/cg";
import { MdWeb } from "react-icons/md";
import birdGameImg from './assets/birdgame.png'

const toolsData = [
  {
    label: 'The Bird Game',
    tools: ['C#', 'Unity', 'GitHub']
  },
  {
    label: 'Portfolio Website',
    tools: ['HTML', 'Tailwind', 'JavaScript', 'React', 'GitHub Pages', 'NPM']
  },
  {
    label: 'C++ Game Collection',
    tools: ['a', 'b', 'c', 'd']
  },
  {
    label: 'The Bird Game',
    tools: ['a', 'b', 'c', 'd']
  },
]

function App() {
  return (
    <div className="min-h-screen bg-bgMain dark:bg-bgMain-dark">
      <Sidenav />

      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/home" element={<Home />} />

        <Route path="/portfolio/projects/">
          <Route index element={<Projects />} />
          <Route
            path="project1"
            element={
              <ProjectPage
                icon={CgGames}
                name="The Bird Game"
                image = {birdGameImg}
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia illo harum adipisci hic architecto excepturi vitae ex dolorum distinctio sed repellat blanditiis dolorem similique debitis quisquam quis, voluptate doloribus pariatur?"
                link="https://github.com/kevinnn1/Flappy-Bird-With-Guns/tree/master"
                tools={toolsData[0]}
              />
            }
          />
          <Route
            path="project2"
            element={
              <ProjectPage
                icon={MdWeb}
                name="Portfolio Website"
                image = {birdGameImg}
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia illo harum adipisci hic architecto excepturi vitae ex dolorum distinctio sed repellat blanditiis dolorem similique debitis quisquam quis, voluptate doloribus pariatur?"
                link="https://www.github.com"
                tools={toolsData[1]}
              />
            }
          />
          <Route
            path="project3"
            element={
              <ProjectPage
                icon={CgGames}
                name="project1"
                image = {birdGameImg}
                description="description"
                link="https://www.github.com"
                tools={toolsData[1]}
              />
            }
          />
          <Route
            path="project4"
            element={
              <ProjectPage
                icon={CgGames}
                name="project1"
                image = {birdGameImg}
                description="loris ipsum"
                link="https://www.github.com"
                tools={toolsData[1]}
              />
            }
          />
        </Route>

        <Route path="/portfolio/experience/" element={<Experience />} />

        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
