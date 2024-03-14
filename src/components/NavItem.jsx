import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export const NavItem = ({ icon: Icon, link, title, handleClick, mobile }) => {
  const isPdf = link.toLowerCase().endsWith('.pdf'); 

  if (isPdf) {
    if(mobile){
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className='w-[75%] flex justify-center rounded-full shadow-lg bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark shadow gray-400 dark:shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
              <Icon size={20} />
              <span className='pl-4'>{title}</span>
            </a>
          );
    }
    return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='bg-buttonBg dark:bg-buttonBg-dark hover:bg-green text-textHead dark:text-textHead-dark space-x-2 flex shadow-lg shadow-gray-400 dark:shadow-gray-900 m-2 mx-8 px-8 py-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
        <Icon size={20} />
        <span>{title}</span>
    </a>
    );
  }
  else {
    if(mobile) {
        return (
            <Link to={link} onClick={handleClick} className='w-[75%] flex justify-center rounded-full shadow-lg bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark shadow gray-400 dark:shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
              <Icon size={20} />
              <span className='pl-4'>{title}</span>
            </Link>
          );
    }
    return (
        <Link to={link} onClick={handleClick} className='bg-buttonBg dark:bg-buttonBg-dark hover:bg-green text-textHead dark:text-textHead-dark space-x-2 flex shadow-lg shadow-gray-400 dark:shadow-gray-900 m-2 mx-8 px-8 py-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
        <Icon size={20} />
        <span>{title}</span>
        </Link>
    );
};
};