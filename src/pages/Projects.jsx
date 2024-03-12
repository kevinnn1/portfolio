import React from 'react'
import {ProjectItem}  from '../components/ProjectItem'
import mayaImg from '../assets/project1.jpg'

export const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-textHead dark:text-textHead-dark text-4xl font-bold text-center'>Projects</h1>
        <p className='text-textSub dark:text-textSub-dark text-center py-8'>
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

