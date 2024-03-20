import {ProjectItem}  from '../components/ProjectItem'
import {GrProjects} from 'react-icons/gr'
import mayaImg from '../assets/project1.jpg'
import { Routes, Route, Navigate } from "react-router-dom";
import { ProjectPage } from '../components/ProjectPage';
import { HashLink as Link } from 'react-router-hash-link';

export const Projects = () => {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-24'>
        <span className='md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center pb-12'>
            <GrProjects />
            <h1 className='pl-4' >Projects</h1>
        </span>
      <p className='text-textSub dark:text-textSub-dark pb-8'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus placeat dicta, rerum neque adipisci illum, ducimus ad maiores, odit cumque itaque reprehenderit. Esse quibusdam quisquam temporibus inventore quo assumenda quidem?
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={mayaImg} title='Project 1' description='Programming Tools' link='project1'/>
        <ProjectItem img={mayaImg} title='Project 2' description='Programming Tools' link='project2'/>
        <ProjectItem img={mayaImg} title='Project 3' description='Programming Tools' link='project3'/>
        <ProjectItem img={mayaImg} title='Project 4' description='Programming Tools' link='project4'/>
      </div>
    </div>
  )
}

