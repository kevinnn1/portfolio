import { WorkItem } from "../components/WorkItem";
import { SkillsItem } from "../components/SkillsItem";
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

import nyu from "../assets/nyu.png";

const data = [
  {
    year: "Mar. 2019 – May 2021",
    title: "Tutor",
    location: "New York City, NY",
    details:
      "▪ America Reads/Counts hires students to assist teachers across several New York City public schools in the classroom ▪ Worked across several schools in Manhattan, Brooklyn, and the Bronx, helping students in mathematics, reading, writing, and science. Also worked with students individually and in small groups ▪ Assisted teachers in paperwork, grading, class preparation, and classroom management",
    employer: "America Reads/Counts",
  },
  {
    year: "Jul. 2022 – Aug. 2023",
    title: "Tenant House Maintenance",
    location: "Paterson, NJ; Haledon, NJ",
    details:
      "Worked on family’s houses fixing regular plumbing, heating, kitchen issues ▪ Renovated rooms within houses which involved painting, deep cleaning, removing/repairing flooring",
    employer: "Independent",
  },
  {
    year: "Nov. 2023 – Feb. 2024",
    title: "Year-End Temp Generalist",
    location: "Parsippany, NJ",
    details:
      "Wrapped and bagged Employee W2 and Payroll checks for ADP’s clients ▪ Performed quality assurance for the documents by checking all documents are accounted for and in order",
    employer: "ADP",
  },
];
export function Work() {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-24">
      <span className="md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl text-center pb-8">
        <FaBook />
        <h1 className="pl-4">Education</h1>
      </span>
      <div className="flex flex-col sm:flex-row  items-center">
      <img src={nyu} className="h-36 w-36 rounded-xl flex-shrink-0 mr-4 mb-4  hover:scale-105"/>
      <div className="flex flex-col  mb-4">
          <p className="flex  items-center justify-start font-semibold text-xs md:text-sm">
            <span className="mr-auto   text-cardText dark:text-cardText-dark text-sm  m-1 px-2  rounded-md">
              New York Univerity
            </span>
            <span className="ml-auto   text-cardText dark:text-cardText-dark text-sm  m-1 px-2  rounded-md">
              New York City, New York
            </span>
          </p>
          <p className="flex   items-center justify-start italic text-xs md:text-sm">
            <span className="mr-auto   text-cardText dark:text-cardText-dark text-sm  m-1 px-2  rounded-md">
              Tandon School of Engineering
            </span>
            <span className="ml-auto   text-cardText dark:text-cardText-dark text-sm  m-1 px-2  rounded-md">
              2018-2022
            </span>
          </p>
          <p className="flex items-center justify-start italic text-xs md:text-sm">
            <span className="   text-cardText dark:text-cardText-dark text-sm  m-1 px-2  rounded-md">
              B.S Computer Science
            </span>
            <span className="h-2 w-2 bg-buttonBg dark:bg-buttonBg-dark rounded-full">

            </span>
            <span className="   text-cardText dark:text-cardText-dark text-sm  m-1 px-2  rounded-md">
              Mathematics Minor
            </span>
          </p>
          <p className="flex    items-center justify-start text-xs md:text-sm">
            <span className="text-textSub dark:text-textSub-dark text-sm m-1 px-2">
              ▪ Relevant Coursework: Software Engineering, Machine Learning,
              Artificial Intelligence, Linear Algebra, Object Oriented
              Programming
            </span>
          </p>
          <p className="flex    items-center justify-start text-xs md:text-sm">
            <span className="text-textSub dark:text-textSub-dark text-sm m-1 px-2">
              ▪ Studied abroad in Paris, France during the Fall of 2021 and
              Spring of 2022 at NYU’s Paris campus
            </span>
          </p>
      </div>
      </div>
      <span className="md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center py-8">
        <FaBriefcase />
        <h1 className="pl-4">Work</h1>
      </span>
      {data.map((item, i) => (
        <WorkItem
          key={i}
          year={item.year}
          title={item.title}
          location={item.location}
          details={item.details}
          employer={item.employer}
        />
      ))}
      <span className="md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center py-8">
        <SiKnowledgebase />
        <h1 className="pl-4">Skills</h1>
      </span>
      <div className="grid sm:grid-cols-3 gap-12 ">
        <SkillsItem
          icon={AiFillCode}
          skillType="Programming Languages"
          skillSet="C++, C, C#, Java, Python, JavaScript, Haskell"
        />
        <SkillsItem
          icon={GrSystem}
          skillType="Operating Systems"
          skillSet="Windows, Linux, iOS"
        />
        <SkillsItem
          icon={MdWeb}
          skillType="Web Development"
          skillSet="HTML, CSS, Node.js, React, Django, REST, SQL, UI/UX design, Heroku, Wordpress"
        />
        <SkillsItem
          icon={CgGames}
          skillType="Video Game Development"
          skillSet="Unity, 2D game design, video game console modding, emulation"
        />
        <SkillsItem
          icon={FaCodeBranch}
          skillType="Version Control"
          skillSet="Git, GitHub"
        />
        <SkillsItem
          icon={SiAdobe}
          skillType="Adobe Creative Cloud"
          skillSet="Dreamweaver, Flash, Photoshop, Premiere"
        />
        <SkillsItem
          icon={SiMicrosoftoffice}
          skillType="Microsoft Office Suite"
          skillSet="Word, Excel, PowerPoint, Access"
        />
        <SkillsItem
          icon={FaProjectDiagram}
          skillType="Project Management"
          skillSet="Risk and time management, project planning, agile"
        />
        <SkillsItem
          icon={HiLanguage}
          skillType="Languages"
          skillSet="Fluent in Spanish, proficient in French"
        />
      </div>
    </div>
  );
}
