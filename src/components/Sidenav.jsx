import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import  Resume from '../assets/Kevin_Grajeda_Resume_2024.pdf'
import { useEffect } from 'react'
import { FaSun, FaMoon } from "react-icons/fa"
import {NavItem}  from './NavItem'

export const Sidenav = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : "light";
  });
  
    useEffect(() => {
      theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [theme]);

    const handleThemeSwitch = () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu size={20} onClick={handleNav} className='text-textHead  dark:text-textHead-dark fixed top-4 right-4 z-[99] md:hidden cursor-pointer hover:scale-150 ease-in duration-300'  / >
        {
          nav ? (
            <div className='fixed w-full h-screen bg-bgMain/70 dark:bg-bgMain-dark/70 flex flex-col justify-center items-center z-20 '>
              <NavItem icon={AiOutlineHome} link="/portfolio/home" title="Home" handleClick={handleNav} mobile={true} />
              <NavItem icon={GrProjects} link="/portfolio/work" title="Work/Skills" handleClick={handleNav} mobile={true} />
              <NavItem icon={AiOutlineProject} link="/portfolio/projects" title="Projects" handleClick={handleNav} mobile={true} />
              <NavItem icon={BsPerson} link={Resume} title="Resume" handleClick='' mobile={true} />
              <NavItem icon={AiOutlineMail} link="/portfolio/home#contact" title="Contact" handleClick={handleNav} mobile={true} />
              <div className="fixed bottom-4 right-4 z-20">
                {theme === "dark" ? <FaSun size={25} className='text-orange-400 cursor-pointer' onClick={handleThemeSwitch} /> : <FaMoon size={25} className='text-yellow-400 cursor-pointer' onClick={handleThemeSwitch}/>}
              </div>
            </div>
          )
          : (
            ''
          )
        }

        <div className='md:block hidden fixed  z-10'>
          <div className='bg-bgSecondary dark:bg-bgSecondary-dark fixed flex  w-full shadow-lg shadow-gray-400 dark:shadow-gray-900  items-center justify-end '>
            <NavItem icon={AiOutlineHome} link="/portfolio/home#" title="Home" handleClick='' mobile={false} />
            <NavItem icon={GrProjects} link="/portfolio/work" title="Work/Skills" handleClick='' mobile={false} />
            <NavItem icon={AiOutlineProject} link="/portfolio/projects" title="Projects" handleClick='' mobile={false} />
            <NavItem icon={BsPerson} link={Resume} title="Resume" handleClick='' mobile={false} />
            <NavItem icon={AiOutlineMail} link="/portfolio/home#contact" title="Contact" handleClick='' mobile={false} />
            <div className='justify-end mx-12 pl-8' z-20>
              {theme === "dark" ? <FaSun size={25} className='text-orange-400 cursor-pointer' onClick={handleThemeSwitch} /> : <FaMoon size={25} className='text-yellow-400 cursor-pointer' onClick={handleThemeSwitch}/>}
            </div>
          </div>
        </div>
    </div>
  )
}
