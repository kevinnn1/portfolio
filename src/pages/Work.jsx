import {WorkItem} from '../components/WorkItem'
import { SkillsItem } from '../components/SkillsItem'
import { SiMicrosoftoffice } from "react-icons/si";
import { HiLanguage } from "react-icons/hi2";
import { SiAdobe } from "react-icons/si";
import { CgGames } from "react-icons/cg";
import { FaCodeBranch } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { SiKnowledgebase } from "react-icons/si";

import nyu from '../assets/nyu.png'

const data = [
    {
        year: 'Mar. 2019 – May 2021',
        title: 'Tutor',
        location:'New York City, NY',
        details: '▪ America Reads/Counts hires students to assist teachers across several New York City public schools in the classroom ▪ Worked across several schools in Manhattan, Brooklyn, and the Bronx, helping students in mathematics, reading, writing, and science. Also worked with students individually and in small groups ▪ Assisted teachers in paperwork, grading, class preparation, and classroom management',
        employer: 'America Reads/Counts',
    },
    {
        year: 'Jul. 2022 – Aug. 2023',
        title: 'Tenant House Maintenance',
        location:'Paterson, NJ; Haledon, NJ',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        employer: 'Independent',
    },
    {
        year: 'Nov. 2023 – Feb. 2024',
        title: 'Year-End Temp Generalist',
        location:'Parsippany, NJ',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        employer: 'ADP',
    }
]
export function Work() {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-24'>
        <span className='md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center pb-12'>
            <FaBook />
            <h1 className='pl-4' >Education</h1>
        </span>
        <div className="flex items-center mb-4">
            <img src={nyu} className="w-16 h-16 bg-gray-300 rounded-xl flex-shrink-0 mr-4 hover:scale-105"/>
            <div>
            <p className='flex gap-1 md:gap-4  items-center justify-start text-xs md:text-sm'>
            <span className='mr-auto  bg-buttonBg dark:bg-buttonBg-dark text-cardText dark:text-cardText-dark text-sm font-semibold m-1 px-2 py-1 rounded-md'>New York Univerity</span>
            <span className='ml-auto  bg-buttonBg dark:bg-buttonBg-dark text-cardText dark:text-cardText-dark text-sm font-semibold m-1 px-2 py-1 rounded-md'>New York City, New York</span>
          </p>
          <p className='flex  gap-1 md:gap-4  items-center justify-start text-xs md:text-sm'>
            <span className='mr-auto  bg-buttonBg dark:bg-buttonBg-dark text-cardText dark:text-cardText-dark text-sm font-semibold m-1 px-2 py-1 rounded-md'>Tandon School of Engineering</span>
            <span className='ml-auto  bg-buttonBg dark:bg-buttonBg-dark text-cardText dark:text-cardText-dark text-sm font-semibold m-1 px-2 py-1 rounded-md'>2018-2022</span>
          </p>
            </div>
        </div>
        <span className='md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center py-12'>
            <FaBriefcase />
            <h1 className='pl-4' >Work</h1>
        </span>
        {data.map((item, i)=> (
            <WorkItem key={i} 
            year={item.year} 
            title ={item.title} 
            location= {item.location} 
            details={item.details}
            employer={item.employer}
            />
        ))}
        <span className='md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center py-12'>
            <SiKnowledgebase />
            <h1 className='pl-4' >Skills</h1>
        </span>
        <div className='grid sm:grid-cols-3 gap-12 '>
            <SkillsItem icon={AiFillCode} skillType='Programming Languages' skillSet='C++, C, C#, Java, Python, JavaScript, Haskell' />
            <SkillsItem icon={GrSystem} skillType='Operating Systems' skillSet='Windows, Linux, iOS' />
            <SkillsItem icon={MdWeb} skillType='Web Development' skillSet='HTML, CSS, Node.js, React, Django, REST, SQL, UI/UX design, Heroku, Wordpress' />
            <SkillsItem icon={CgGames} skillType='Video Game Development' skillSet='Unity, 2D game design, video game console modding, emulation' />
            <SkillsItem icon={FaCodeBranch} skillType='Version Control' skillSet='Git, GitHub' />
            <SkillsItem icon={SiAdobe} skillType='Adobe Creative Cloud' skillSet='Dreamweaver, Flash, Photoshop, Premiere' />
            <SkillsItem icon={SiMicrosoftoffice} skillType='Microsoft Office Suite' skillSet='Word, Excel, PowerPoint, Access' />
            <SkillsItem icon={FaProjectDiagram} skillType='Project Management' skillSet='Risk and time management, project planning, agile' />
            <SkillsItem icon={HiLanguage} skillType='Languages' skillSet='Fluent in Spanish, proficient in French' />
        </div>
    </div>
  )
}
