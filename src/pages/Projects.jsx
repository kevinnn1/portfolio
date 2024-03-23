import {ProjectItem}  from '../components/ProjectItem'
import {GrProjects} from 'react-icons/gr'
import birdGameImg from '../assets/birdgame.png'
import portfolioImg from "../assets/portfolio.png";
import cppGameImg from '../assets/phantoms.png'
import puzzleImg from '../assets/puzzle.png'

export const Projects = () => {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-24'>
        <span className='md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center pb-8'>
          <GrProjects />
          <h1 className='pl-4' >Projects</h1>
        </span>
      <p className='text-textSub dark:text-textSub-dark pb-8'>
        A small collection of my projects that I worked on for college and for my personal development. 
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={birdGameImg} title='The Bird Game (WIP)' description='A Unity game based on Flappy Bird' link='project1'/>
        <ProjectItem img={portfolioImg} title='Portfolio Website' description='The website you are looking at' link='project2'/>
        <ProjectItem img={cppGameImg} title='C++ Game Collection' description='A collection of games written in C++' link='project3'/>
        <ProjectItem img={puzzleImg} title='AI Puzzle Solver' description='Solves a given sliding puzzle' link='project4'/>
      </div>
    </div>
  )
}

