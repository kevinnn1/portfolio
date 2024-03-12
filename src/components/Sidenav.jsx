import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import  Resume from '../assets/Kevin_Grajeda_Resume_2024.pdf'

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' / >
        {
          nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
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
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <Link to="/portfolio/home" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome size={20}/ >
            </Link>
            <Link to="/portfolio/work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <GrProjects size={20}/ >
            </Link>
            <Link to="/portfolio/projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineProject size={20}/ >
            </Link>
            <a href={Resume} without rel="noopener noreferrer" target="_blank" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsPerson size={20}/ >
            </a>
            <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={20}/ >
            </a>
          </div>
        </div>

    </div>
  )
}

export default Sidenav