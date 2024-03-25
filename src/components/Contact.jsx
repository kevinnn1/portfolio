import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="p-4 first-line:rounded-xl">
      <span className="text-textHead md:justify-start justify-center dark:text-textHead-dark flex items-center text-4xl font-bold text-center">
        <MdOutlineConnectWithoutContact />
        <h1 className="pl-4">Connect</h1>
      </span>
      <p className="text-textSub dark:text-textSub-dark py-4">
        Feel free to email me, connect on LinkedIn, or view my GitHub!
      </p>
      <div className="text-textHead dark:text-textHead-dark flex flex-row gap-4 max-w-full justify-center  w-full ">
        <a href="https://www.linkedin.com/in/kevin-grajeda-038039152/" target="_blank">
          <FaLinkedin className="cursor-pointer hover:text-textSub dark:hover:text-textSub-dark hover:scale-110 ease-in duration-300" size={40}/>
        </a>
        <a href="https://github.com/kevinnn1" target="_blank">
          <FaGithub className="cursor-pointer hover:text-textSub dark:hover:text-textSub-dark hover:scale-110 ease-in duration-300" size={40}/>
        </a>
        <a href="mailto:kagrajeda1@gmail.com" target="_blank"> 
          <FaEnvelope className="cursor-pointer hover:text-textSub dark:hover:text-textSub-dark hover:scale-110 ease-in duration-300" size={40}/>
        </a>
      </div>
    </div>
  );
};
