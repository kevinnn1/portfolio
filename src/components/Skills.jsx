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

const skillsData = [
    {
      icon: AiFillCode,
      skillType: "Programming Languages",
      skillSet: "C++, C, C#, Java, Python, JavaScript, Haskell"
    },
    {
      icon: GrSystem,
      skillType: "Operating Systems",
      skillSet: "Windows, Linux, iOS"
    },
    {
      icon: MdWeb,
      skillType: "Web Development",
      skillSet: "HTML, CSS, Node.js, React, Django, REST, SQL, UI/UX design, Heroku, Wordpress"
    },
    {
      icon: CgGames,
      skillType: "Video Game Development",
      skillSet: "Unity, 2D game design, game console modding, ROM hacking, emulation"
    },
    {
      icon: FaCodeBranch,
      skillType: "Version Control",
      skillSet: "Git, GitHub"
    },
    {
      icon: SiAdobe,
      skillType: "Adobe Creative Cloud",
      skillSet: "Dreamweaver, Flash, Photoshop, Premiere"
    },
    {
      icon: SiMicrosoftoffice,
      skillType: "Microsoft Office Suite",
      skillSet: "Word, Excel, PowerPoint, Access"
    },
    {
      icon: FaProjectDiagram,
      skillType: "Project Management",
      skillSet: "Risk and time management, project planning, agile"
    },
    {
      icon: HiLanguage,
      skillType: "Languages",
      skillSet: "Fluent in Spanish, proficient in French"
    }
  ];
  
  export const Skills = () => {
    return (
      <div className="grid sm:grid-cols-3 gap-12">
        {skillsData.map((skill, index) => (
          <SkillsItem
            key={index}
            icon={skill.icon}
            skillType={skill.skillType}
            skillSet={skill.skillSet}
          />
        ))}
      </div>
    );
  };