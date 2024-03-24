import { MdPerson } from "react-icons/md";

export const About = () => {
  return (
    <div className="max-w-[500px]   p-4 bg-buttonBg/50 dark:bg-buttonBg-dark/50 rounded-xl ">
      <span className=" md:justify-start justify-center text-textHead dark:text-textHead-dark flex  items-center text-4xl font-bold text-center">
        <MdPerson />
        <h1 className="pl-4">About Me</h1>
      </span>
      <p className="text-textSub text-center dark:text-textSub-dark py-4">
        To Do:  fix image aspect ratios, custom domain, add information on projects, add about me info, add something to the left/above of this
      </p>
    </div>
  );
};
