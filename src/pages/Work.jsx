import React from 'react'
import {WorkItem} from '../components/WorkItem'

const data = [
    {
        year: 2020,
        title: 'xyx',
        duration:'x years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        year: 2020,
        title: 'xyx',
        duration:'x years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        year: 2020,
        title: 'xyx',
        duration:'x years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]
export function Work() {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
        <h1 className='text-textHead dark:text-textHead-dark text-4xl font-bold text-center'> Work </h1>
        {data.map((item, i)=> (
            <WorkItem key={i} 
            year={item.year} 
            title ={item.title} 
            duration= {item.duration} 
            details={item.details}
            />
        ))}
    </div>
  )
}
