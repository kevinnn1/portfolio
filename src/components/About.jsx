import { MdPerson } from "react-icons/md";

export const About = () => {
  return (
    <div className="p-4 rounded-xl">
      <span className="text-textHead dark:text-textHead-dark md:justify-start justify-center flex text-4xl font-bold text-center">
        <MdPerson />
        <h1 className="pl-4">About Me</h1>
      </span>
      <p className="text-textSub dark:text-textSub-dark">
        To Do: custom domain, add about me info, 
      </p>
    </div>
  );
};