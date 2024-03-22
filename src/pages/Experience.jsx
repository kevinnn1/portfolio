import { Work } from "../components/Work";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";

import { FaBook } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { SiKnowledgebase } from "react-icons/si";

export function Experience() {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-24">
      <span className="md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center pb-8">
        <FaBook />
        <h1 className="pl-4">Education</h1>
      </span>
      <Education />
      <span className="md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center py-8 ">
        <FaBriefcase />
        <h1 className="pl-4">Work</h1>
      </span>
      <Work />
      <span className="md:justify-start text-textHead dark:text-textHead-dark flex justify-center items-center text-4xl font-bold text-center py-8">
        <SiKnowledgebase />
        <h1 className="pl-4">Skills</h1>
      </span>
      <Skills />
    </div>
  );
}
