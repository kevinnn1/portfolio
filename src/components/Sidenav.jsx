import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import  Resume from '../assets/Kevin_Grajeda_Resume_2024.pdf'
import {WideNavItem}  from './WideNavItem'

export const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div>
        <AiOutlineMenu size={20} onClick={handleNav} className='text-[#CCCCCC] fixed top-4 right-4 z-[99] md:hidden cursor-pointer hover:scale-150 ease-in duration-300'  / >
        {
          nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 '>
                <Link to="portfolio/home" onClick={handleNav} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration '>
                  <AiOutlineHome size = {20} />
                  <span className='pl-4'>Home</span>
                </Link>

              <Link to="portfolio/work" onClick={handleNav}  className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration '>
                <GrProjects size = {20} />
                <span className='pl-4'>Work</span>
              </Link>

              <Link to="portfolio/projects" onClick={handleNav} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration '>
                <AiOutlineProject size = {20} />
                <span className='pl-4'>Projects</span>
              </Link>

              <a href={Resume} without rel="noopener noreferrer" target="_blank"  onClick={handleNav} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration '>
                <BsPerson size = {20} />
                <span className='pl-4'>Resume</span>
              </a>
              
              <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration '>
                <AiOutlineMail size = {20} />
                <span className='pl-4'>Contact</span>
              </a>

            </div>

          )
          : (
            ''
          )
        }

        <div className='md:block hidden fixed  z-10'>
          <div className='bg-bgSecondary dark:bg-bgSecondary-dark fixed flex  w-full shadow-lg shadow-gray-400 dark:shadow-gray-900 '>
            <WideNavItem icon={AiOutlineHome} link="/portfolio/home" title="Home" />
            <WideNavItem icon={GrProjects} link="/portfolio/work" title="Work/Skills" />
            <WideNavItem icon={AiOutlineProject} link="/portfolio/projects" title="Projects" />
            
            <a href={Resume} without rel="noopener noreferrer" target="_blank" className='bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark space-x-2 flex  shadow-lg shadow-gray-400 dark:shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsPerson size={20}/ >
              <span>Resume</span>
            </a>

            <a href="#contact" className='bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark space-x-2 flex  shadow-lg shadow-gray-400 dark:shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={20}/ >
              <span>Contact</span>
            </a>
          </div>
        </div>

    </div>
  )
}

