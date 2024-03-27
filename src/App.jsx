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
import portfolioImg from './assets/portfolio.png'
import cppGameImg from './assets/phantoms.png'
import puzzleImg from './assets/puzzle.png'

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
    tools: ['C++']
  },
  {
    label: 'AI Puzzle Solver',
    tools: ['C++']
  },
]

function App() {
  return (
    <div className="min-h-screen bg-bgMain dark:bg-bgMain-dark">
      <Sidenav />

      <Routes>
      <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/projects/">
          <Route index element={<Projects />} />
          <Route
            path="project1"
            element={
              <ProjectPage
                icon={CgGames}
                name="The Bird Game (WIP)"
                image = {birdGameImg}
                description="The Bird Game is a work-in-progress game built using the Unity Game Engine. It is based on Flappy Bird. You try to get through pipes to achieve the highest score possible. The bird can also shoot small and large lasers. More functionality to be added soon!"
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
                image = {portfolioImg}
                description="It might be considered cheating to include your portfolio in your portfolio, but it's an important project! The project is built using React and Vite, uses Tailwind as the CSS framework, and is hosted on GitHub pages. It contains my experience and a small subset of my projects. It might be expanded to include more or branched off to make other sites."
                link="https://github.com/kevinnn1/portfolio"
                tools={toolsData[1]}
              />
            }
          />
          <Route
            path="project3"
            element={
              <ProjectPage
                icon={CgGames}
                name="C++ Games Collection"
                image = {cppGameImg}
                description="A collection of a few games built using only C++. Contains a game of Pong, a 2D platformer, and an 2D overhead game (think Legend of Zelda). "
                link="https://github.com/kevinnn1/Game-Progrmming"
                tools={toolsData[2]}
              />
            }
          />
          <Route
            path="project4"
            element={
              <ProjectPage
                icon={CgGames}
                name="AI Puzzle Solver"
                image = {puzzleImg}
                description="Solves a given sliding puzzle from an input file. The input file contains the start and end states of the puzzle. The program returns each step taken and the number of moves. Utilizes the A* algorithm to implement a fast solution for the puzzle."
                link="https://github.com/kevinnn1/AI"
                tools={toolsData[3]}
              />
            }
          />
        </Route>

        <Route path="/experience/" element={<Experience />} />
        <Route path="/404" element={<Nopage />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
