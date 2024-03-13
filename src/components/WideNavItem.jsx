import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

 export const WideNavItem = ({icon: Icon, link, title}) => {
  return (
    <Link to={link} className='bg-buttonBg dark:bg-buttonBg-dark text-textHead dark:text-textHead-dark space-x-2 flex  shadow-lg shadow-gray-400 dark:shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
    <Icon size={20}/ >
    <span>{title}</span>
    </Link>
  )
}

