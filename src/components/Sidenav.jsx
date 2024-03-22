import {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import  Resume from '../assets/Kevin_Grajeda_Resume_2024.pdf'
import {useEffect} from "react";
import {FaSun, FaMoon} from "react-icons/fa";
import {NavItem} from "./NavItem";
import { HashLink as Link } from 'react-router-hash-link';

export const Sidenav = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <div>
         <div className='md:hidden fixed  z-[99] '>
          <div className='bg-buttonBg dark:bg-buttonBg-dark fixed flex justify-between ease-in-out duration-300 w-full shadow-lg shadow-gray-400 dark:shadow-gray-900 items-center  '>
           
            <h3 className='bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark font-bold text-xl break-normal hover:scale-110 ease-in-out duration-300 m-2 p-2' >
              <Link to='portfolio/home'>
              Kevin Grajeda
              </Link>
            </h3>
            </div>
            </div>
        <AiOutlineMenu size={30} onClick={handleNav} className='text-textHead  dark:text-textHead-dark fixed top-4 right-4 z-[99] md:hidden cursor-pointer hover:scale-150 ease-in duration-300' / >
        {
          nav ? (
            <div className='fixed w-full h-screen bg-bgMain/70 dark:bg-bgMain-dark/70 flex flex-col justify-center items-center z-20 '>
              <NavItem icon={AiOutlineHome} link="/portfolio/home#" title="Home" handleClick={handleNav} mobile={true} />
              <NavItem icon={AiOutlineProject} link="/portfolio/experience" title="Experience" handleClick={handleNav} mobile={true} />
              <NavItem icon={GrProjects} link="/portfolio/projects" title="Projects" handleClick={handleNav} mobile={true} />
              <NavItem icon={BsPerson} link={Resume} title="Resume" handleClick='' mobile={true} />
              <div className="fixed bottom-4 left-4 z-20">
                {theme === "dark" ? <FaSun size={25} className='text-orange-400 cursor-pointer hover:scale-125 ease-in-out duration-300' onClick={handleThemeSwitch} /> : <FaMoon size={25} className='text-yellow-400 cursor-pointer hover:scale-125 ease-in-out duration-300' onClick={handleThemeSwitch}/>}
              </div>
            </div>
          )
          : (
            ''
          )
        }

        <div className='md:block hidden fixed  z-10 '>
          <div className='bg-buttonBg dark:bg-buttonBg-dark fixed flex justify-between ease-in-out duration-300 w-full shadow-lg shadow-gray-400 dark:shadow-gray-900 items-center px-4  '>
           
            <h3 className='bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark font-bold text-xl break-normal hover:scale-110 ease-in-out duration-300' >
            <Link to='portfolio/home'>
              Kevin Grajeda
              </Link>
            </h3>
            <div className='flex  ease-in-out duration-300'>
            <NavItem icon={AiOutlineHome} link="/portfolio/home#" title="Home"  mobile={false} />
            <NavItem icon={AiOutlineProject} link="/portfolio/experience" title="Experience"  mobile={false} />
            <NavItem icon={GrProjects} link="/portfolio/projects" title="Projects"  mobile={false} />
            <NavItem icon={BsPerson} link={Resume} title="Resume" mobile={false} />
            </div>
            <div className='justify-end pl-8 z-20'>
              {theme === "dark" ? <FaSun size={25} className='text-orange-400 cursor-pointer hover:scale-125 ease-in-out duration-300' onClick={handleThemeSwitch} /> : <FaMoon size={25} className='text-yellow-400 cursor-pointer hover:scale-125 ease-in-out duration-300' onClick={handleThemeSwitch}/>}
            </div>
          </div>
        </div>
    </div>
  )
}
