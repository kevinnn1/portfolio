import React from 'react'
import ProjectItem  from './ProjectItem'
import mayaImg from '../assets/project1.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus placeat dicta, rerum neque adipisci illum, ducimus ad maiores, odit cumque itaque reprehenderit. Esse quibusdam quisquam temporibus inventore quo assumenda quidem?
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={mayaImg} title='Maya Amano' />
            <ProjectItem img={mayaImg} title='Maya Amano' />
            <ProjectItem img={mayaImg} title='Maya Amano' />
            <ProjectItem img={mayaImg} title='Maya Amano' />
        </div>
    </div>
  )
}

export default Projects